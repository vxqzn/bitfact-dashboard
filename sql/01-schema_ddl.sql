DROP TABLE IF EXISTS payments CASCADE;
DROP TABLE IF EXISTS invoices CASCADE;
DROP TABLE IF EXISTS contracts CASCADE;
DROP TABLE IF EXISTS clients CASCADE;

-- 1. Clienti, Contracte, Facturi, Plati
CREATE TABLE clients (
    id             SERIAL PRIMARY KEY,
    fiscal_code    VARCHAR(16)  NOT NULL UNIQUE,
    name           VARCHAR(120) NOT NULL,
    industry       VARCHAR(50)  NOT NULL,
    contact_email  VARCHAR(100) NOT NULL UNIQUE,
    created_at     TIMESTAMPTZ  NOT NULL DEFAULT now()
);

CREATE TABLE contracts (
    id                SERIAL PRIMARY KEY,
    client_id         INT NOT NULL REFERENCES clients(id) ON DELETE RESTRICT,
    contract_code     VARCHAR(30) NOT NULL UNIQUE,
    start_date        DATE NOT NULL,
    end_date          DATE NOT NULL,
    total_value_eur   DECIMAL(12, 2) NOT NULL CHECK (total_value_eur >= 0),
    status            VARCHAR(20) NOT NULL DEFAULT 'active'
                          CHECK (status IN ('active', 'inactive', 'completed', 'cancelled')),
    created_at        TIMESTAMPTZ NOT NULL DEFAULT now(),

    CONSTRAINT chk_contract_dates CHECK (end_date >= start_date)
);

CREATE TABLE invoices (
    id              SERIAL PRIMARY KEY,
    contract_id     INT NOT NULL REFERENCES contracts(id) ON DELETE RESTRICT,
    invoice_number  VARCHAR(30) NOT NULL UNIQUE,
    due_date        DATE NOT NULL,
    amount_eur      DECIMAL(12, 2) NOT NULL CHECK (amount_eur >= 0),
    status          VARCHAR(20) NOT NULL DEFAULT 'unpaid'
                        CHECK (status IN ('unpaid', 'paid', 'overdue')),
    created_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE payments (
    id                SERIAL PRIMARY KEY,
    invoice_id        INT NOT NULL REFERENCES invoices(id) ON DELETE RESTRICT,
    payment_date      DATE NOT NULL,
    amount_paid_eur   DECIMAL(12, 2) NOT NULL CHECK (amount_paid_eur >= 0),
    payment_method    VARCHAR(20) NOT NULL CHECK (payment_method IN ('transfer', 'card', 'cash')),
    created_at        TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_contracts_client ON contracts(client_id);
CREATE INDEX idx_contracts_status ON contracts(status);

CREATE INDEX idx_invoices_contract  ON invoices(contract_id);
CREATE INDEX idx_invoices_status    ON invoices(status);

CREATE INDEX idx_payments_invoice   ON payments(invoice_id, payment_date);
