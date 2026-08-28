-- Query 1: Sinteza financiara la nivel de contract

WITH cte_invoice_summary AS (
    SELECT
        i.contract_id,
        SUM(i.amount_eur) AS total_invoiced,
        SUM(CASE WHEN i.status = 'paid' THEN i.amount_eur ELSE 0 END) AS total_paid_invoiced,
        SUM(CASE WHEN i.status = 'overdue' THEN i.amount_eur ELSE 0 END) AS total_overdue
    FROM invoices AS i
    GROUP BY i.contract_id
),
cte_payment_summary AS (
    SELECT
        i.contract_id,
        SUM(p.amount_paid_eur) AS total_cash_collected
    FROM payments AS p
        INNER JOIN invoices AS i ON p.invoice_id = i.id
    GROUP BY i.contract_id
)
SELECT
    c.contract_code,
    cl.name AS client_name,
    cl.industry,
    c.total_value_eur,
    COALESCE(inv.total_invoiced, 0) AS total_invoiced_eur,
    COALESCE(pay.total_cash_collected, 0) AS total_collected_eur,
    COALESCE(inv.total_overdue, 0) AS overdue_exposure_eur,
    ROUND(
        (COALESCE(pay.total_cash_collected, 0) / NULLIF(c.total_value_eur, 0)) * 100, 1
    ) AS collection_rate_pct,
    c.status AS contract_status
FROM contracts AS c
    INNER JOIN clients AS cl ON c.client_id = cl.id
    LEFT JOIN cte_invoice_summary AS inv ON c.id = inv.contract_id
    LEFT JOIN cte_payment_summary AS pay ON c.id = pay.contract_id
ORDER BY c.total_value_eur DESC;


-- Query 2: Concentrarea portofoliului de clienti si cota de venituri
WITH cte_client_portfolio AS (
    SELECT
        cl.id AS client_id,
        cl.name AS client_name,
        cl.industry,
        COUNT(c.id) AS total_contracts,
        SUM(c.total_value_eur) AS total_contracted_value
    FROM clients AS cl
        INNER JOIN contracts AS c ON cl.id = c.client_id
    GROUP BY cl.id, cl.name, cl.industry
)
SELECT
    client_name,
    industry,
    total_contracts,
    total_contracted_value,
    ROUND(
        (total_contracted_value / NULLIF(SUM(total_contracted_value) OVER (), 0)) * 100, 2
    ) AS portfolio_share_pct,
    DENSE_RANK() OVER (ORDER BY total_contracted_value DESC) AS rank_by_revenue
FROM cte_client_portfolio
ORDER BY total_contracted_value DESC;


-- Query 3: Analiza vechimii creantelor
WITH cte_unpaid_invoices AS (
    SELECT
        i.id,
        i.invoice_number,
        c.contract_code,
        cl.name AS client_name,
        i.due_date,
        i.amount_eur,
        i.status,
        (CURRENT_DATE - i.due_date) AS days_overdue,
        CASE
            WHEN i.due_date >= CURRENT_DATE THEN 'Current'
            WHEN (CURRENT_DATE - i.due_date) <= 30 THEN '1-30 zile intarziere'
            WHEN (CURRENT_DATE - i.due_date) BETWEEN 31 AND 60 THEN '31-60 zile intarziere'
            WHEN (CURRENT_DATE - i.due_date) BETWEEN 61 AND 90 THEN '61-90 zile intarziere'
            ELSE 'Peste 90 zile intarziere'
        END AS aging_bucket
    FROM invoices AS i
        INNER JOIN contracts AS c ON i.contract_id = c.id
        INNER JOIN clients AS cl ON c.client_id = cl.id
    WHERE i.status IN ('unpaid', 'overdue')
)
SELECT
    aging_bucket,
    COUNT(id) AS invoice_count,
    SUM(amount_eur) AS total_unpaid_amount_eur,
    ROUND(
        (SUM(amount_eur) / NULLIF(SUM(SUM(amount_eur)) OVER (), 0)) * 100, 2
    ) AS pct_of_total_unpaid
FROM cte_unpaid_invoices
GROUP BY aging_bucket
ORDER BY total_unpaid_amount_eur DESC;
