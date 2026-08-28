// Sample contracts data
const SEED_DATA = [
  { id: 101, contract_code: 'CTR-2026-001', company_name: 'Transylvania Cloud Tech SA', fiscal_code: 'RO41029381', industry: 'IT & Software', total_value_eur: 450000, collected_amount: 380000, overdue_amount: 0, status: 'active', created_at: '2026-01-10' },
  { id: 102, contract_code: 'CTR-2026-002', company_name: 'Transylvania Cloud Tech SA', fiscal_code: 'RO41029381', industry: 'IT & Software', total_value_eur: 185000, collected_amount: 185000, overdue_amount: 0, status: 'completed', created_at: '2025-10-15' },
  { id: 103, contract_code: 'CTR-2026-003', company_name: 'Transylvania Cloud Tech SA', fiscal_code: 'RO41029381', industry: 'IT & Software', total_value_eur: 92000, collected_amount: 30000, overdue_amount: 28000, status: 'active', created_at: '2026-02-01', due_date: '2026-08-01' },
  { id: 104, contract_code: 'CTR-2026-004', company_name: 'Metropolis Real Estate Development SRL', fiscal_code: 'RO30491827', industry: 'Imobiliar & Constructii', total_value_eur: 920000, collected_amount: 420000, overdue_amount: 180000, status: 'active', created_at: '2025-11-20', due_date: '2026-04-15' },
  { id: 105, contract_code: 'CTR-2026-005', company_name: 'Metropolis Real Estate Development SRL', fiscal_code: 'RO30491827', industry: 'Imobiliar & Constructii', total_value_eur: 340000, collected_amount: 150000, overdue_amount: 95000, status: 'active', created_at: '2026-01-18', due_date: '2026-06-10' },
  { id: 106, contract_code: 'CTR-2026-006', company_name: 'Metropolis Real Estate Development SRL', fiscal_code: 'RO30491827', industry: 'Imobiliar & Constructii', total_value_eur: 120000, collected_amount: 120000, overdue_amount: 0, status: 'completed', created_at: '2025-08-10' },
  { id: 107, contract_code: 'CTR-2026-007', company_name: 'Solaris Photovoltaic Park SA', fiscal_code: 'RO49182736', industry: 'Energie Regenerabila', total_value_eur: 780000, collected_amount: 780000, overdue_amount: 0, status: 'completed', created_at: '2025-07-12' },
  { id: 108, contract_code: 'CTR-2026-008', company_name: 'Solaris Photovoltaic Park SA', fiscal_code: 'RO49182736', industry: 'Energie Regenerabila', total_value_eur: 540000, collected_amount: 480000, overdue_amount: 0, status: 'active', created_at: '2026-01-05' },
  { id: 109, contract_code: 'CTR-2026-009', company_name: 'Solaris Photovoltaic Park SA', fiscal_code: 'RO49182736', industry: 'Energie Regenerabila', total_value_eur: 210000, collected_amount: 140000, overdue_amount: 0, status: 'active', created_at: '2026-03-01' },
  { id: 110, contract_code: 'CTR-2026-010', company_name: 'Danube Ports Logistic Hub SRL', fiscal_code: 'RO33918274', industry: 'Transport & Logistica', total_value_eur: 620000, collected_amount: 350000, overdue_amount: 110000, status: 'active', created_at: '2025-12-01', due_date: '2026-07-05' },
  { id: 111, contract_code: 'CTR-2026-011', company_name: 'Danube Ports Logistic Hub SRL', fiscal_code: 'RO33918274', industry: 'Transport & Logistica', total_value_eur: 175000, collected_amount: 175000, overdue_amount: 0, status: 'completed', created_at: '2025-09-14' },
  { id: 112, contract_code: 'CTR-2026-012', company_name: 'Titan Heavy Steel Structures SA', fiscal_code: 'RO14920194', industry: 'Productie Industriala', total_value_eur: 850000, collected_amount: 310000, overdue_amount: 240000, status: 'active', created_at: '2025-10-20', due_date: '2026-03-20' },
  { id: 113, contract_code: 'CTR-2026-013', company_name: 'Titan Heavy Steel Structures SA', fiscal_code: 'RO14920194', industry: 'Productie Industriala', total_value_eur: 280000, collected_amount: 90000, overdue_amount: 85000, status: 'active', created_at: '2026-02-14', due_date: '2026-06-28' },
  { id: 114, contract_code: 'CTR-2026-014', company_name: 'Nova Retail Group SA', fiscal_code: 'RO55829104', industry: 'Retail & FMCG', total_value_eur: 420000, collected_amount: 390000, overdue_amount: 0, status: 'active', created_at: '2026-01-20' },
  { id: 115, contract_code: 'CTR-2026-015', company_name: 'Nova Retail Group SA', fiscal_code: 'RO55829104', industry: 'Retail & FMCG', total_value_eur: 160000, collected_amount: 160000, overdue_amount: 0, status: 'completed', created_at: '2025-11-05' },
  { id: 116, contract_code: 'CTR-2026-016', company_name: 'Nova Retail Group SA', fiscal_code: 'RO55829104', industry: 'Retail & FMCG', total_value_eur: 75000, collected_amount: 40000, overdue_amount: 12000, status: 'active', created_at: '2026-03-10', due_date: '2026-08-10' },
  { id: 117, contract_code: 'CTR-2026-017', company_name: 'EuroTelecom Networks SA', fiscal_code: 'RO19203948', industry: 'Telecomunicatii', total_value_eur: 710000, collected_amount: 650000, overdue_amount: 0, status: 'active', created_at: '2025-12-18' },
  { id: 118, contract_code: 'CTR-2026-018', company_name: 'EuroTelecom Networks SA', fiscal_code: 'RO19203948', industry: 'Telecomunicatii', total_value_eur: 310000, collected_amount: 310000, overdue_amount: 0, status: 'completed', created_at: '2025-06-22' },
  { id: 119, contract_code: 'CTR-2026-019', company_name: 'BioPharm Distribution SRL', fiscal_code: 'RO19283746', industry: 'Farmaceutic & Sanatate', total_value_eur: 380000, collected_amount: 190000, overdue_amount: 78000, status: 'active', created_at: '2026-01-12', due_date: '2026-05-30' },
  { id: 120, contract_code: 'CTR-2026-020', company_name: 'BioPharm Distribution SRL', fiscal_code: 'RO19283746', industry: 'Farmaceutic & Sanatate', total_value_eur: 145000, collected_amount: 145000, overdue_amount: 0, status: 'completed', created_at: '2025-08-30' },
  { id: 121, contract_code: 'CTR-2026-021', company_name: 'SC Alpha Logistics SRL', fiscal_code: 'RO38491029', industry: 'Transport & Logistica', total_value_eur: 195000, collected_amount: 170000, overdue_amount: 0, status: 'active', created_at: '2026-01-25' },
  { id: 122, contract_code: 'CTR-2026-022', company_name: 'SC Alpha Logistics SRL', fiscal_code: 'RO38491029', industry: 'Transport & Logistica', total_value_eur: 85000, collected_amount: 85000, overdue_amount: 0, status: 'completed', created_at: '2025-10-02' },
  { id: 123, contract_code: 'CTR-2026-023', company_name: 'AeroDynamics Romania SA', fiscal_code: 'RO39201948', industry: 'Productie Industriala', total_value_eur: 320000, collected_amount: 250000, overdue_amount: 35000, status: 'active', created_at: '2026-02-08', due_date: '2026-07-18' },
  { id: 124, contract_code: 'CTR-2026-024', company_name: 'CyberSec Defense Systems SRL', fiscal_code: 'RO42981723', industry: 'IT & Software', total_value_eur: 290000, collected_amount: 290000, overdue_amount: 0, status: 'completed', created_at: '2025-11-15' },
  { id: 125, contract_code: 'CTR-2026-025', company_name: 'CyberSec Defense Systems SRL', fiscal_code: 'RO42981723', industry: 'IT & Software', total_value_eur: 165000, collected_amount: 125000, overdue_amount: 0, status: 'active', created_at: '2026-03-02' },
  { id: 126, contract_code: 'CTR-2026-026', company_name: 'GreenEnergy Solutions SA', fiscal_code: 'RO29481023', industry: 'Energie Regenerabila', total_value_eur: 240000, collected_amount: 240000, overdue_amount: 0, status: 'completed', created_at: '2025-07-20' },
  { id: 127, contract_code: 'CTR-2026-027', company_name: 'GreenEnergy Solutions SA', fiscal_code: 'RO29481023', industry: 'Energie Regenerabila', total_value_eur: 180000, collected_amount: 110000, overdue_amount: 0, status: 'active', created_at: '2026-02-19' },
  { id: 128, contract_code: 'CTR-2026-028', company_name: 'Carpathian Mineral Waters SA', fiscal_code: 'RO18293041', industry: 'Retail & FMCG', total_value_eur: 210000, collected_amount: 140000, overdue_amount: 45000, status: 'active', created_at: '2026-01-30', due_date: '2026-06-05' },
  { id: 129, contract_code: 'CTR-2026-029', company_name: 'Vanguard Automotive Robotics SRL', fiscal_code: 'RO40192837', industry: 'Productie Industriala', total_value_eur: 390000, collected_amount: 320000, overdue_amount: 38000, status: 'active', created_at: '2026-02-22', due_date: '2026-08-05' },
  { id: 130, contract_code: 'CTR-2026-030', company_name: 'MedLife Supply Chain SA', fiscal_code: 'RO21093847', industry: 'Farmaceutic & Sanatate', total_value_eur: 230000, collected_amount: 200000, overdue_amount: 0, status: 'active', created_at: '2026-03-05' },
  { id: 131, contract_code: 'CTR-2026-031', company_name: 'Urban Civil Engineering SRL', fiscal_code: 'RO30192847', industry: 'Imobiliar & Constructii', total_value_eur: 260000, collected_amount: 110000, overdue_amount: 72000, status: 'active', created_at: '2026-01-14', due_date: '2026-04-28' },
  { id: 132, contract_code: 'CTR-2026-032', company_name: 'Black Sea Offshore Logistics SRL', fiscal_code: 'RO39182746', industry: 'Transport & Logistica', total_value_eur: 340000, collected_amount: 270000, overdue_amount: 0, status: 'active', created_at: '2026-03-12' },
  { id: 133, contract_code: 'CTR-2026-033', company_name: 'AgroTech Moldavia SRL', fiscal_code: 'RO27481920', industry: 'Agricultura & Tehnologie', total_value_eur: 125000, collected_amount: 125000, overdue_amount: 0, status: 'completed', created_at: '2025-09-18' },
  { id: 134, contract_code: 'CTR-2026-034', company_name: 'AgroTech Moldavia SRL', fiscal_code: 'RO27481920', industry: 'Agricultura & Tehnologie', total_value_eur: 88000, collected_amount: 45000, overdue_amount: 18000, status: 'active', created_at: '2026-02-28', due_date: '2026-07-25' },
  { id: 135, contract_code: 'CTR-2026-035', company_name: 'Terra Smart Irrigation SRL', fiscal_code: 'RO48192019', industry: 'Agricultura & Tehnologie', total_value_eur: 140000, collected_amount: 80000, overdue_amount: 25000, status: 'active', created_at: '2026-03-15', due_date: '2026-06-15' },
  { id: 136, contract_code: 'CTR-2026-036', company_name: 'Optima Data Analytics SRL', fiscal_code: 'RO49201928', industry: 'IT & Software', total_value_eur: 175000, collected_amount: 130000, overdue_amount: 22000, status: 'active', created_at: '2026-03-22', due_date: '2026-07-12' },
  { id: 137, contract_code: 'CTR-2026-037', company_name: 'Bucuresti Financial Advisory SRL', fiscal_code: 'RO37281902', industry: 'Consultanta & Finante', total_value_eur: 95000, collected_amount: 95000, overdue_amount: 0, status: 'completed', created_at: '2025-11-28' },
  { id: 138, contract_code: 'CTR-2026-038', company_name: 'Bucuresti Financial Advisory SRL', fiscal_code: 'RO37281902', industry: 'Consultanta & Finante', total_value_eur: 62000, collected_amount: 40000, overdue_amount: 0, status: 'active', created_at: '2026-02-10' },
  { id: 139, contract_code: 'CTR-2026-039', company_name: 'Nordic Timber Processors SA', fiscal_code: 'RO18293847', industry: 'Productie Industriala', total_value_eur: 110000, collected_amount: 20000, overdue_amount: 0, status: 'cancelled', created_at: '2026-01-05' },
  { id: 140, contract_code: 'CTR-2026-040', company_name: 'Alpine Eco Resort & Spa SRL', fiscal_code: 'RO29103948', industry: 'Consultanta & Finante', total_value_eur: 68000, collected_amount: 68000, overdue_amount: 0, status: 'completed', created_at: '2025-08-14' },
  { id: 141, contract_code: 'CTR-2026-041', company_name: 'OmniHealth Diagnostics Clinics SRL', fiscal_code: 'RO28192039', industry: 'Farmaceutic & Sanatate', total_value_eur: 115000, collected_amount: 115000, overdue_amount: 0, status: 'completed', created_at: '2025-12-05' },
  { id: 142, contract_code: 'CTR-2026-042', company_name: 'OmniHealth Diagnostics Clinics SRL', fiscal_code: 'RO28192039', industry: 'Farmaceutic & Sanatate', total_value_eur: 72000, collected_amount: 48000, overdue_amount: 0, status: 'active', created_at: '2026-03-18' },
  { id: 143, contract_code: 'CTR-2026-043', company_name: 'Delta Marine Shipyard SA', fiscal_code: 'RO51029384', industry: 'Productie Industriala', total_value_eur: 680000, collected_amount: 240000, overdue_amount: 165000, status: 'active', created_at: '2025-11-10', due_date: '2026-02-10' },
  { id: 144, contract_code: 'CTR-2026-044', company_name: 'Delta Marine Shipyard SA', fiscal_code: 'RO51029384', industry: 'Productie Industriala', total_value_eur: 210000, collected_amount: 210000, overdue_amount: 0, status: 'completed', created_at: '2025-05-19' },
  { id: 145, contract_code: 'CTR-2026-045', company_name: 'Kavala Hypermarket Distribution SRL', fiscal_code: 'RO61928374', industry: 'Retail & FMCG', total_value_eur: 310000, collected_amount: 280000, overdue_amount: 0, status: 'active', created_at: '2026-01-08' },
  { id: 146, contract_code: 'CTR-2026-046', company_name: 'Kavala Hypermarket Distribution SRL', fiscal_code: 'RO61928374', industry: 'Retail & FMCG', total_value_eur: 120000, collected_amount: 60000, overdue_amount: 35000, status: 'active', created_at: '2026-02-25', due_date: '2026-07-08' },
  { id: 147, contract_code: 'CTR-2026-047', company_name: 'Apex AI Software Labs SRL', fiscal_code: 'RO71829304', industry: 'IT & Software', total_value_eur: 230000, collected_amount: 230000, overdue_amount: 0, status: 'completed', created_at: '2025-10-12' },
  { id: 148, contract_code: 'CTR-2026-048', company_name: 'Apex AI Software Labs SRL', fiscal_code: 'RO71829304', industry: 'IT & Software', total_value_eur: 190000, collected_amount: 160000, overdue_amount: 0, status: 'active', created_at: '2026-03-08' },
  { id: 149, contract_code: 'CTR-2026-049', company_name: 'Banat Wind Energy Park SA', fiscal_code: 'RO81920394', industry: 'Energie Regenerabila', total_value_eur: 820000, collected_amount: 750000, overdue_amount: 0, status: 'active', created_at: '2025-12-15' },
  { id: 150, contract_code: 'CTR-2026-050', company_name: 'Banat Wind Energy Park SA', fiscal_code: 'RO81920394', industry: 'Energie Regenerabila', total_value_eur: 360000, collected_amount: 360000, overdue_amount: 0, status: 'completed', created_at: '2025-06-10' },
  { id: 151, contract_code: 'CTR-2026-051', company_name: 'Crisana Cold Logistics SRL', fiscal_code: 'RO91827364', industry: 'Transport & Logistica', total_value_eur: 145000, collected_amount: 90000, overdue_amount: 28000, status: 'active', created_at: '2026-01-28', due_date: '2026-06-20' },
  { id: 152, contract_code: 'CTR-2026-052', company_name: 'Crisana Cold Logistics SRL', fiscal_code: 'RO91827364', industry: 'Transport & Logistica', total_value_eur: 75000, collected_amount: 75000, overdue_amount: 0, status: 'completed', created_at: '2025-09-01' },
  { id: 153, contract_code: 'CTR-2026-053', company_name: 'Quantum Precision Machining SA', fiscal_code: 'RO10293847', industry: 'Productie Industriala', total_value_eur: 410000, collected_amount: 280000, overdue_amount: 55000, status: 'active', created_at: '2026-02-04', due_date: '2026-05-10' },
  { id: 154, contract_code: 'CTR-2026-054', company_name: 'Quantum Precision Machining SA', fiscal_code: 'RO10293847', industry: 'Productie Industriala', total_value_eur: 160000, collected_amount: 40000, overdue_amount: 0, status: 'cancelled', created_at: '2025-11-12' },
  { id: 155, contract_code: 'CTR-2026-055', company_name: 'Dobrogea Cereals Export SRL', fiscal_code: 'RO20394857', industry: 'Agricultura & Tehnologie', total_value_eur: 510000, collected_amount: 480000, overdue_amount: 0, status: 'active', created_at: '2026-01-19' },
  { id: 156, contract_code: 'CTR-2026-056', company_name: 'Dobrogea Cereals Export SRL', fiscal_code: 'RO20394857', industry: 'Agricultura & Tehnologie', total_value_eur: 220000, collected_amount: 220000, overdue_amount: 0, status: 'completed', created_at: '2025-08-20' },
  { id: 157, contract_code: 'CTR-2026-057', company_name: 'Atlas Tower Infrastructures SA', fiscal_code: 'RO30495867', industry: 'Telecomunicatii', total_value_eur: 890000, collected_amount: 450000, overdue_amount: 210000, status: 'active', created_at: '2025-11-30', due_date: '2026-03-01' },
  { id: 158, contract_code: 'CTR-2026-058', company_name: 'Atlas Tower Infrastructures SA', fiscal_code: 'RO30495867', industry: 'Telecomunicatii', total_value_eur: 340000, collected_amount: 340000, overdue_amount: 0, status: 'completed', created_at: '2025-04-15' },
  { id: 159, contract_code: 'CTR-2026-059', company_name: 'Sanitas Private Hospitals SRL', fiscal_code: 'RO40596877', industry: 'Farmaceutic & Sanatate', total_value_eur: 275000, collected_amount: 250000, overdue_amount: 0, status: 'active', created_at: '2026-02-16' },
  { id: 160, contract_code: 'CTR-2026-060', company_name: 'Sanitas Private Hospitals SRL', fiscal_code: 'RO40596877', industry: 'Farmaceutic & Sanatate', total_value_eur: 130000, collected_amount: 130000, overdue_amount: 0, status: 'completed', created_at: '2025-07-28' },
  { id: 161, contract_code: 'CTR-2026-061', company_name: 'Carpati Express Courier SRL', fiscal_code: 'RO50697887', industry: 'Transport & Logistica', total_value_eur: 92000, collected_amount: 65000, overdue_amount: 14000, status: 'active', created_at: '2026-03-01', due_date: '2026-08-12' },
  { id: 162, contract_code: 'CTR-2026-062', company_name: 'Carpati Express Courier SRL', fiscal_code: 'RO50697887', industry: 'Transport & Logistica', total_value_eur: 45000, collected_amount: 45000, overdue_amount: 0, status: 'completed', created_at: '2025-10-10' },
  { id: 163, contract_code: 'CTR-2026-063', company_name: 'Cluj Silicon Foundry SRL', fiscal_code: 'RO60798897', industry: 'IT & Software', total_value_eur: 380000, collected_amount: 310000, overdue_amount: 0, status: 'active', created_at: '2026-01-22' },
  { id: 164, contract_code: 'CTR-2026-064', company_name: 'Cluj Silicon Foundry SRL', fiscal_code: 'RO60798897', industry: 'IT & Software', total_value_eur: 150000, collected_amount: 150000, overdue_amount: 0, status: 'completed', created_at: '2025-09-25' },
  { id: 165, contract_code: 'CTR-2026-065', company_name: 'Moldavia Dairy Products SA', fiscal_code: 'RO70899907', industry: 'Retail & FMCG', total_value_eur: 185000, collected_amount: 110000, overdue_amount: 42000, status: 'active', created_at: '2026-02-11', due_date: '2026-06-25' },
  { id: 166, contract_code: 'CTR-2026-066', company_name: 'Moldavia Dairy Products SA', fiscal_code: 'RO70899907', industry: 'Retail & FMCG', total_value_eur: 65000, collected_amount: 65000, overdue_amount: 0, status: 'completed', created_at: '2025-08-08' },
  { id: 167, contract_code: 'CTR-2026-067', company_name: 'HydroPower Engineering SA', fiscal_code: 'RO80910017', industry: 'Energie Regenerabila', total_value_eur: 640000, collected_amount: 600000, overdue_amount: 0, status: 'active', created_at: '2026-01-15' },
  { id: 168, contract_code: 'CTR-2026-068', company_name: 'HydroPower Engineering SA', fiscal_code: 'RO80910017', industry: 'Energie Regenerabila', total_value_eur: 290000, collected_amount: 290000, overdue_amount: 0, status: 'completed', created_at: '2025-05-30' },
  { id: 169, contract_code: 'CTR-2026-069', company_name: 'Valahia Industrial Parks SRL', fiscal_code: 'RO91021127', industry: 'Imobiliar & Constructii', total_value_eur: 730000, collected_amount: 320000, overdue_amount: 195000, status: 'active', created_at: '2025-12-20' },
  { id: 170, contract_code: 'CTR-2026-070', company_name: 'Valahia Industrial Parks SRL', fiscal_code: 'RO91021127', industry: 'Imobiliar & Constructii', total_value_eur: 210000, collected_amount: 210000, overdue_amount: 0, status: 'completed', created_at: '2025-06-18' },
  { id: 171, contract_code: 'CTR-2026-071', company_name: 'SmartGrid Automation SRL', fiscal_code: 'RO11122233', industry: 'IT & Software', total_value_eur: 125000, collected_amount: 125000, overdue_amount: 0, status: 'completed', created_at: '2025-10-05' },
  { id: 172, contract_code: 'CTR-2026-072', company_name: 'SmartGrid Automation SRL', fiscal_code: 'RO11122233', industry: 'IT & Software', total_value_eur: 95000, collected_amount: 60000, overdue_amount: 0, status: 'active', created_at: '2026-03-04' },
  { id: 173, contract_code: 'CTR-2026-073', company_name: 'Balkan Heavy Cranes SRL', fiscal_code: 'RO22233344', industry: 'Productie Industriala', total_value_eur: 350000, collected_amount: 180000, overdue_amount: 68000, status: 'active', created_at: '2026-01-29', due_date: '2026-05-05' },
  { id: 174, contract_code: 'CTR-2026-074', company_name: 'Balkan Heavy Cranes SRL', fiscal_code: 'RO22233344', industry: 'Productie Industriala', total_value_eur: 85000, collected_amount: 85000, overdue_amount: 0, status: 'completed', created_at: '2025-07-14' },
  { id: 175, contract_code: 'CTR-2026-075', company_name: 'OmniChannel Retail Solutions SRL', fiscal_code: 'RO33344455', industry: 'Retail & FMCG', total_value_eur: 140000, collected_amount: 140000, overdue_amount: 0, status: 'completed', created_at: '2025-11-22' },
  { id: 176, contract_code: 'CTR-2026-076', company_name: 'OmniChannel Retail Solutions SRL', fiscal_code: 'RO33344455', industry: 'Retail & FMCG', total_value_eur: 85000, collected_amount: 40000, overdue_amount: 22000, status: 'active', created_at: '2026-02-18', due_date: '2026-07-28' },
  { id: 177, contract_code: 'CTR-2026-077', company_name: 'Muntenia BioFuels SA', fiscal_code: 'RO44455566', industry: 'Energie Regenerabila', total_value_eur: 480000, collected_amount: 420000, overdue_amount: 0, status: 'active', created_at: '2026-01-04' },
  { id: 178, contract_code: 'CTR-2026-078', company_name: 'Muntenia BioFuels SA', fiscal_code: 'RO44455566', industry: 'Energie Regenerabila', total_value_eur: 190000, collected_amount: 190000, overdue_amount: 0, status: 'completed', created_at: '2025-08-19' },
  { id: 179, contract_code: 'CTR-2026-079', company_name: 'Arad Cold Chain Logistic SA', fiscal_code: 'RO55566677', industry: 'Transport & Logistica', total_value_eur: 260000, collected_amount: 160000, overdue_amount: 48000, status: 'active', created_at: '2026-02-09', due_date: '2026-06-01' },
  { id: 180, contract_code: 'CTR-2026-080', company_name: 'PharmaPoint Distribution SRL', fiscal_code: 'RO66677788', industry: 'Farmaceutic & Sanatate', total_value_eur: 310000, collected_amount: 280000, overdue_amount: 0, status: 'active', created_at: '2026-03-14' },
  { id: 181, contract_code: 'CTR-2026-081', company_name: 'PharmaPoint Distribution SRL', fiscal_code: 'RO66677788', industry: 'Farmaceutic & Sanatate', total_value_eur: 95000, collected_amount: 95000, overdue_amount: 0, status: 'completed', created_at: '2025-09-11' },
  { id: 182, contract_code: 'CTR-2026-082', company_name: 'Starlight Hospitality Group SA', fiscal_code: 'RO77788899', industry: 'Consultanta & Finante', total_value_eur: 110000, collected_amount: 75000, overdue_amount: 0, status: 'active', created_at: '2026-02-27' },
  { id: 183, contract_code: 'CTR-2026-083', company_name: 'Starlight Hospitality Group SA', fiscal_code: 'RO77788899', industry: 'Consultanta & Finante', total_value_eur: 45000, collected_amount: 10000, overdue_amount: 0, status: 'cancelled', created_at: '2025-12-08' },
  { id: 184, contract_code: 'CTR-2026-084', company_name: 'MicroDev Consulting SRL', fiscal_code: 'RO88899900', industry: 'IT & Software', total_value_eur: 12000, collected_amount: 12000, overdue_amount: 0, status: 'completed', created_at: '2025-10-25' },
  { id: 185, contract_code: 'CTR-2026-085', company_name: 'MicroDev Consulting SRL', fiscal_code: 'RO88899900', industry: 'IT & Software', total_value_eur: 8500, collected_amount: 5000, overdue_amount: 2500, status: 'active', created_at: '2026-03-19' },
  { id: 186, contract_code: 'CTR-2026-086', company_name: 'Local Craft Roasters SRL', fiscal_code: 'RO99900011', industry: 'Retail & FMCG', total_value_eur: 6500, collected_amount: 6500, overdue_amount: 0, status: 'completed', created_at: '2025-11-14' },
  { id: 187, contract_code: 'CTR-2026-087', company_name: 'Local Craft Roasters SRL', fiscal_code: 'RO99900011', industry: 'Retail & FMCG', total_value_eur: 4200, collected_amount: 1500, overdue_amount: 1800, status: 'active', created_at: '2026-03-24' },
  { id: 188, contract_code: 'CTR-2026-088', company_name: 'EcoPack Recycled Cartons SRL', fiscal_code: 'RO12349876', industry: 'Productie Industriala', total_value_eur: 18000, collected_amount: 18000, overdue_amount: 0, status: 'completed', created_at: '2025-12-02' },
  { id: 189, contract_code: 'CTR-2026-089', company_name: 'EcoPack Recycled Cartons SRL', fiscal_code: 'RO12349876', industry: 'Productie Industriala', total_value_eur: 14000, collected_amount: 6000, overdue_amount: 0, status: 'active', created_at: '2026-03-11' },
  { id: 190, contract_code: 'CTR-2026-090', company_name: 'Audit Expert Partners SRL', fiscal_code: 'RO23458765', industry: 'Consultanta & Finante', total_value_eur: 22000, collected_amount: 22000, overdue_amount: 0, status: 'completed', created_at: '2025-09-09' },
  { id: 191, contract_code: 'CTR-2026-091', company_name: 'Audit Expert Partners SRL', fiscal_code: 'RO23458765', industry: 'Consultanta & Finante', total_value_eur: 16500, collected_amount: 8000, overdue_amount: 0, status: 'active', created_at: '2026-02-15' },
  { id: 192, contract_code: 'CTR-2026-092', company_name: 'Urban Green Landscaping SRL', fiscal_code: 'RO34567654', industry: 'Imobiliar & Constructii', total_value_eur: 9500, collected_amount: 9500, overdue_amount: 0, status: 'completed', created_at: '2025-10-18' },
  { id: 193, contract_code: 'CTR-2026-093', company_name: 'Urban Green Landscaping SRL', fiscal_code: 'RO34567654', industry: 'Imobiliar & Constructii', total_value_eur: 7800, collected_amount: 3000, overdue_amount: 3200, status: 'active', created_at: '2026-03-07' },
  { id: 194, contract_code: 'CTR-2026-094', company_name: 'AgroBoutique Organic SRL', fiscal_code: 'RO45676543', industry: 'Agricultura & Tehnologie', total_value_eur: 15000, collected_amount: 15000, overdue_amount: 0, status: 'completed', created_at: '2025-11-19' },
  { id: 195, contract_code: 'CTR-2026-095', company_name: 'AgroBoutique Organic SRL', fiscal_code: 'RO45676543', industry: 'Agricultura & Tehnologie', total_value_eur: 11500, collected_amount: 5000, overdue_amount: 0, status: 'active', created_at: '2026-02-24' },
  { id: 196, contract_code: 'CTR-2026-096', company_name: 'CyberShield Penetration Testing SRL', fiscal_code: 'RO56785432', industry: 'IT & Software', total_value_eur: 35000, collected_amount: 35000, overdue_amount: 0, status: 'completed', created_at: '2025-12-14' },
  { id: 197, contract_code: 'CTR-2026-097', company_name: 'CyberShield Penetration Testing SRL', fiscal_code: 'RO56785432', industry: 'IT & Software', total_value_eur: 28000, collected_amount: 14000, overdue_amount: 0, status: 'active', created_at: '2026-03-21' },
  { id: 198, contract_code: 'CTR-2026-098', company_name: 'DentalCare Equipment SRL', fiscal_code: 'RO67894321', industry: 'Farmaceutic & Sanatate', total_value_eur: 48000, collected_amount: 48000, overdue_amount: 0, status: 'completed', created_at: '2025-08-27' },
  { id: 199, contract_code: 'CTR-2026-099', company_name: 'DentalCare Equipment SRL', fiscal_code: 'RO67894321', industry: 'Farmaceutic & Sanatate', total_value_eur: 32000, collected_amount: 12000, overdue_amount: 14000, status: 'active', created_at: '2026-02-02', due_date: '2026-07-20' },
  { id: 200, contract_code: 'CTR-2026-100', company_name: 'SolarRoof Home Systems SRL', fiscal_code: 'RO78903210', industry: 'Energie Regenerabila', total_value_eur: 55000, collected_amount: 45000, overdue_amount: 0, status: 'active', created_at: '2026-03-16' }
];

// App state
const state = {
  contracts: [],
  tab: 'overview',
  filter: 'all',
  industry: 'all',
  search: '',
  sortCol: 'total_value_eur',
  sortDir: 'desc',
  overviewPage: 1
};

const PAGE_SIZE = 10;

// LocalStorage data loading with seed fallback
function loadData() {
  const local = localStorage.getItem('bitfact_contracts_v5');
  if (local) {
    try {
      const parsed = JSON.parse(local);
      if (Array.isArray(parsed)) {
        state.contracts = parsed;
        return;
      }
    } catch (e) {}
  }
  state.contracts = SEED_DATA.map(c => ({ ...c }));
  save();
}

function save() {
  localStorage.setItem('bitfact_contracts_v5', JSON.stringify(state.contracts));
}

// Number formatting helpers
function fmt(n) {
  const num = Math.round(Number(n || 0));
  return num.toLocaleString('ro-RO') + ' €';
}

function pct(n) {
  return Number(n || 0).toFixed(1) + '%';
}

// HTML escaping for user-supplied values
function esc(s) {
  return String(s ?? '').replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
}

// Dark and light theme toggle
function initTheme() {
  setTheme(localStorage.getItem('bitfact_theme') || 'light');
  document.getElementById('btn-theme')?.addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('data-theme') || 'light';
    const next = cur === 'dark' ? 'light' : 'dark';
    setTheme(next);
  });
}

function setTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  localStorage.setItem('bitfact_theme', t);
  const moon = document.getElementById('icon-moon');
  const sun = document.getElementById('icon-sun');
  if (moon && sun) {
    moon.style.display = t === 'dark' ? 'block' : 'none';
    sun.style.display = t === 'light' ? 'block' : 'none';
  }
}

// Calculate KPI summary metrics
function computeKPIs() {
  const c = state.contracts;
  const totalC = c.reduce((s, x) => s + Number(x.total_value_eur || 0), 0);
  const totalCol = c.reduce((s, x) => s + Number(x.collected_amount || 0), 0);
  const totalO = c.reduce((s, x) => s + Number(x.overdue_amount || 0), 0);
  const totalP = Math.max(0, totalC - totalCol);

  const overdueN = c.filter(x => Number(x.overdue_amount) > 0).length;
  const rate = totalC > 0 ? (totalCol / totalC) * 100 : 0;

  document.getElementById('kpi-total-contracted').textContent = fmt(totalC);
  document.getElementById('kpi-contract-count').textContent = `${c.length} contracte`;
  document.getElementById('kpi-total-collected').textContent = fmt(totalCol);
  document.getElementById('kpi-collection-rate').textContent = `${pct(rate)}`;
  document.getElementById('kpi-total-overdue').textContent = fmt(totalO);
  document.getElementById('kpi-overdue-count').textContent = `${overdueN} restante`;

  const colP = totalC > 0 ? Number((totalCol / totalC * 100).toFixed(1)) : 0;
  const oP = totalC > 0 ? Number((totalO / totalC * 100).toFixed(1)) : 0;
  const pP = Math.max(0, Number((100 - colP - oP).toFixed(1)));

  document.getElementById('meter-collected').style.width = colP + '%';
  document.getElementById('meter-pending').style.width = pP + '%';
  document.getElementById('meter-overdue').style.width = oP + '%';

  document.getElementById('legend-collected-val').textContent = fmt(totalCol);
  const pendingClean = Math.max(0, totalP - totalO);
  document.getElementById('legend-pending-val').textContent = fmt(pendingClean);
  document.getElementById('legend-overdue-val').textContent = fmt(totalO);

  renderAging(totalC, totalCol, totalO);
  renderClients(totalC);
}

// Render aging breakdown list (buckets by days past due_date)
function renderAging(totalC, totalCol, totalO) {
  const unpaid = Math.max(0, totalC - totalCol);
  const criticalCount = state.contracts.filter(x => Number(x.overdue_amount) >= 40000).length;
  const badge = document.getElementById('critical-insight-badge');
  if (badge) badge.textContent = `${criticalCount} critice`;

  const today = new Date();
  const DAY = 86400000;
  const amounts = [0, 0, 0, 0, 0];
  let undated = 0;

  state.contracts.forEach(c => {
    const o = Number(c.overdue_amount || 0);
    if (o <= 0) return;
    if (!c.due_date) { undated += o; return; }
    const days = Math.floor((today - new Date(c.due_date)) / DAY);
    const idx = days <= 30 ? 0 : days <= 60 ? 1 : days <= 90 ? 2 : 3;
    amounts[idx] += o;
  });

  const buckets = [
    { label: 'La termen', amount: Math.max(0, unpaid - totalO), level: 0 },
    { label: '1–30 zile', amount: amounts[0], level: 1 },
    { label: '31–60 zile', amount: amounts[1], level: 2 },
    { label: '61–90 zile', amount: amounts[2], level: 3 },
    { label: 'Peste 90 zile', amount: amounts[3], level: 4 }
  ];
  if (undated > 0) buckets.push({ label: 'Fara scadenta', amount: undated, level: 4 });

  const html = buckets.map(b => {
    const p = unpaid > 0 ? (b.amount / unpaid * 100).toFixed(1) : 0;
    return `
      <div class="aging-row level-${b.level}">
        <span class="aging-label">${b.label}</span>
        <span class="aging-val mono">${fmt(b.amount)}</span>
        <span class="aging-pct mono">${p}%</span>
      </div>
    `;
  }).join('');

  const el1 = document.getElementById('overview-aging-list');
  if (el1) el1.innerHTML = html;
  const el2 = document.getElementById('deep-aging-list');
  if (el2) el2.innerHTML = html;
  const el3 = document.getElementById('deep-aging-total-risk');
  if (el3) el3.textContent = fmt(totalO);
}

// Render top client rankings
function renderClients(totalC) {
  const tbody = document.getElementById('client-share-body');
  if (!tbody) return;

  const map = {};
  state.contracts.forEach(c => {
    if (!map[c.company_name]) {
      map[c.company_name] = { name: c.company_name, industry: c.industry, val: 0, count: 0 };
    }
    map[c.company_name].val += Number(c.total_value_eur || 0);
    map[c.company_name].count += 1;
  });

  const list = Object.values(map).sort((a, b) => b.val - a.val);
  if (list.length === 0) {
    tbody.innerHTML = '<tr><td colspan="5" class="empty-state">Nu exista date despre clienti.</td></tr>';
    return;
  }

  tbody.innerHTML = list.map((cl, i) => {
    const share = totalC > 0 ? (cl.val / totalC * 100).toFixed(1) : 0;
    return `
      <tr>
        <td class="mono" style="font-weight:600; color:var(--text-muted)">#${i + 1}</td>
        <td>
          <div class="client-primary">${esc(cl.name)}</div>
          <div class="client-meta-line">
            <span class="client-industry-pill">${esc(cl.industry)}</span>
            <span class="client-code-tag mono">${cl.count} contracte</span>
          </div>
        </td>
        <td class="mono text-right col-total">${fmt(cl.val)}</td>
        <td class="mono text-right">${share}%</td>
        <td>
          <div class="flux-bar" style="height: 6px; margin: 0; border-radius: 3px;">
            <div class="flux-seg settled" style="width: ${share}%"></div>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

// Filter and sort contracts
function getFiltered() {
  return state.contracts.filter(c => {
    let ms = true;
    if (state.filter === 'active') ms = c.status === 'active';
    else if (state.filter === 'completed') ms = c.status === 'completed';
    else if (state.filter === 'cancelled') ms = c.status === 'cancelled';
    else if (state.filter === 'overdue') ms = Number(c.overdue_amount) > 0;

    const mi = state.industry === 'all' || c.industry === state.industry;
    const q = state.search.toLowerCase().trim();
    const mq = !q || (c.company_name || '').toLowerCase().includes(q) ||
                     (c.contract_code || '').toLowerCase().includes(q) ||
                     (c.industry || '').toLowerCase().includes(q) ||
                     (c.fiscal_code || '').toLowerCase().includes(q);
    return ms && mi && mq;
  }).sort((a, b) => {
    let va = a[state.sortCol];
    let vb = b[state.sortCol];
    if (typeof va === 'string') {
      va = va.toLowerCase();
      vb = (vb || '').toLowerCase();
    } else {
      va = Number(va || 0);
      vb = Number(vb || 0);
    }
    if (va < vb) return state.sortDir === 'asc' ? -1 : 1;
    if (va > vb) return state.sortDir === 'asc' ? 1 : -1;
    return 0;
  });
}

// Table row HTML template
function rowHTML(r) {
  let statusClass = 'status-active', statusText = 'Activ';
  if (r.status === 'completed') { statusClass = 'status-completed'; statusText = 'Finalizat'; }
  else if (r.status === 'cancelled') { statusClass = 'status-cancelled'; statusText = 'Anulat'; }
  else if (Number(r.overdue_amount) > 0) { statusClass = 'status-overdue'; statusText = 'Restant'; }

  return `
    <tr data-id="${r.id}" class="clickable-row">
      <td class="col-client">
        <div class="client-primary">${esc(r.company_name)}</div>
        <div class="client-meta-line">
          <span class="mono client-code-tag">${esc(r.contract_code)}</span>
          <span class="client-industry-pill">${esc(r.industry)}</span>
        </div>
      </td>
      <td class="mono text-right col-total">${fmt(r.total_value_eur)}</td>
      <td class="mono text-right col-overdue ${r.overdue_amount > 0 ? 'text-brick' : ''}" style="${r.overdue_amount > 0 ? 'font-weight:600' : ''}">${fmt(r.overdue_amount)}</td>
      <td class="col-status">
        <span class="status-indicator ${statusClass}">
          <span class="status-dot"></span>
          ${statusText}
        </span>
      </td>
      <td class="text-right col-actions">
        <div class="row-actions">
          <button class="btn-row btn-edit" data-id="${r.id}" title="Editeaza">Edit</button>
          <button class="btn-row delete btn-delete" data-id="${r.id}" title="Sterge">Sterge</button>
        </div>
      </td>
    </tr>
  `;
}

// Render tables and pagination
function renderTables() {
  const filtered = getFiltered();
  populateIndustries();

  const ot = document.getElementById('overview-table-body');
  if (ot) {
    if (filtered.length === 0) {
      ot.innerHTML = '<tr><td colspan="5"><div class="empty-state"><h4>Niciun rezultat gasit</h4><p>Ajustati cautarea sau filtrele.</p></div></td></tr>';
      document.getElementById('overview-pagination').innerHTML = '';
    } else {
      const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
      state.overviewPage = Math.min(Math.max(1, state.overviewPage), totalPages);
      const start = (state.overviewPage - 1) * PAGE_SIZE;
      const pageItems = filtered.slice(start, start + PAGE_SIZE);
      ot.innerHTML = pageItems.map(rowHTML).join('');

      const from = start + 1;
      const to = Math.min(start + PAGE_SIZE, filtered.length);
      const tally = document.getElementById('overview-table-tally');
      if (tally) tally.textContent = `Afisare ${from}–${to} din ${filtered.length} contracte`;

      renderPagination(state.overviewPage, totalPages);
    }
  }

  const pt = document.getElementById('portfolio-table-body');
  if (pt) {
    if (filtered.length === 0) {
      pt.innerHTML = '<tr><td colspan="5"><div class="empty-state"><h4>Nu s-au gasit contracte</h4><p>Niciun contract nu corespunde criteriilor.</p></div></td></tr>';
    } else {
      pt.innerHTML = filtered.map(rowHTML).join('');
    }
    const tally = document.getElementById('portfolio-table-tally');
    if (tally) tally.textContent = `${filtered.length} inregistrari`;
  }
}

function populateIndustries() {
  const sel = document.getElementById('portfolio-industry');
  if (!sel) return;
  const cur = state.industry;
  const inds = [];
  state.contracts.forEach(c => {
    if (c.industry && !inds.includes(c.industry)) inds.push(c.industry);
  });
  inds.sort();
  sel.innerHTML = `<option value="all">Toate industriile (${state.contracts.length})</option>` +
    inds.map(i => `<option value="${esc(i)}" ${i === cur ? 'selected' : ''}>${esc(i)}</option>`).join('');
}

function renderPagination(current, total) {
  const el = document.getElementById('overview-pagination');
  if (!el) return;
  if (total <= 1) {
    el.innerHTML = '';
    return;
  }
  const pages = [];
  for (let p = 1; p <= total; p++) {
    if (p === 1 || p === total || (p >= current - 1 && p <= current + 1)) {
      pages.push(p);
    } else if (pages[pages.length - 1] !== '...') {
      pages.push('...');
    }
  }
  const pills = pages.map(p => {
    if (p === '...') return `<span class="page-pill" style="border:none">...</span>`;
    return `<button class="page-pill ${p === current ? 'active' : ''}" data-page="${p}">${p}</button>`;
  }).join('');
  el.innerHTML = `<button class="page-prev" ${current <= 1 ? 'disabled' : ''}>Anterior</button>${pills}<button class="page-next" ${current >= total ? 'disabled' : ''}>Urmator</button>`;
}

function initPagination() {
  const el = document.getElementById('overview-pagination');
  if (!el) return;
  el.addEventListener('click', e => {
    const pill = e.target.closest('.page-pill[data-page]');
    if (pill) {
      state.overviewPage = Number(pill.getAttribute('data-page'));
      renderTables();
      return;
    }
    const prev = e.target.closest('.page-prev');
    if (prev && !prev.disabled) {
      state.overviewPage -= 1;
      renderTables();
      return;
    }
    const next = e.target.closest('.page-next');
    if (next && !next.disabled) {
      state.overviewPage += 1;
      renderTables();
    }
  });
}

// Tab navigation
function switchTab(t) {
  state.tab = t;
  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.getAttribute('data-tab') === t);
  });
  document.querySelectorAll('.tab-panel').forEach(p => {
    p.classList.toggle('active', p.id === `tab-${t}`);
  });

  const h = document.getElementById('page-heading');
  switch (t) {
    case 'overview':
      h.textContent = 'Sinteza Financiara';
      break;
    case 'portfolio':
      h.textContent = 'Portofoliu Contracte';
      break;
    case 'aging':
      h.textContent = 'Scadentar Creante';
      break;
    case 'clients':
      h.textContent = 'Top Clienti';
      break;
  }
  renderTables();
}

function initNav() {
  document.querySelectorAll('.nav-link[data-tab]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      switchTab(link.getAttribute('data-tab'));
    });
  });
}

// Contract modal form and actions
function initModal() {
  document.getElementById('btn-add-contract')?.addEventListener('click', () => openModal());
  document.getElementById('btn-close-modal')?.addEventListener('click', closeModal);
  document.getElementById('btn-cancel')?.addEventListener('click', closeModal);
  
  const modal = document.getElementById('contract-modal');
  modal?.addEventListener('click', e => {
    if (e.target === modal) closeModal();
  });

  document.getElementById('contract-form')?.addEventListener('submit', e => {
    e.preventDefault();
    saveContract();
  });
}

// Suggest next unused contract code
function nextCode() {
  const codes = new Set(state.contracts.map(c => c.contract_code));
  let n = state.contracts.length + 1;
  while (codes.has(`CTR-2026-${String(n).padStart(3, '0')}`)) n++;
  return `CTR-2026-${String(n).padStart(3, '0')}`;
}

function openModal(id = null) {
  const title = document.getElementById('modal-title');
  const form = document.getElementById('contract-form');

  if (id) {
    const c = state.contracts.find(x => x.id === id);
    if (c) {
      title.textContent = `Editare: ${c.contract_code}`;
      document.getElementById('contract-id').value = c.id;
      document.getElementById('company_name').value = c.company_name;
      document.getElementById('fiscal_code').value = c.fiscal_code || '';
      document.getElementById('contract_code').value = c.contract_code;
      document.getElementById('industry').value = c.industry;
      document.getElementById('total_value').value = c.total_value_eur;
      document.getElementById('collected_amount').value = c.collected_amount;
      document.getElementById('overdue_amount').value = c.overdue_amount;
      document.getElementById('due_date').value = c.due_date || '';
      document.getElementById('contract_status').value = c.status;
    }
  } else {
    title.textContent = 'Contract Nou';
    form.reset();
    document.getElementById('contract-id').value = '';
    document.getElementById('contract_code').value = nextCode();
    document.getElementById('collected_amount').value = '0';
    document.getElementById('overdue_amount').value = '0';
  }

  document.getElementById('contract-modal').classList.add('active');
  setTimeout(() => document.getElementById('company_name').focus(), 80);
}

function closeModal() {
  document.getElementById('contract-modal').classList.remove('active');
  state.editId = null;
}

function saveContract() {
  const idVal = document.getElementById('contract-id').value;
  const data = {
    company_name: document.getElementById('company_name').value.trim(),
    fiscal_code: document.getElementById('fiscal_code').value.trim(),
    contract_code: document.getElementById('contract_code').value.trim(),
    industry: document.getElementById('industry').value.trim(),
    total_value_eur: parseFloat(document.getElementById('total_value').value) || 0,
    collected_amount: parseFloat(document.getElementById('collected_amount').value) || 0,
    overdue_amount: parseFloat(document.getElementById('overdue_amount').value) || 0,
    due_date: document.getElementById('due_date').value || '',
    status: document.getElementById('contract_status').value
  };

  if (state.contracts.some(c => c.contract_code === data.contract_code && c.id !== Number(idVal))) {
    toast(`Cod duplicat: ${data.contract_code}`);
    return;
  }

  if (idVal) {
    const idx = state.contracts.findIndex(c => c.id === Number(idVal));
    if (idx !== -1) {
      Object.assign(state.contracts[idx], data);
      toast(`Contract actualizat: ${data.contract_code}`);
    }
  } else {
    data.id = Date.now();
    data.created_at = new Date().toISOString().slice(0, 10);
    state.contracts.unshift(data);
    toast(`Contract inregistrat: ${data.contract_code}`);
  }

  save();
  computeKPIs();
  renderTables();
  closeModal();
}

// Contract details drawer
function initDrawer() {
  document.getElementById('btn-close-drawer')?.addEventListener('click', () => {
    document.getElementById('detail-drawer').classList.remove('active');
  });
  const drawer = document.getElementById('detail-drawer');
  drawer?.addEventListener('click', e => {
    if (e.target === drawer) drawer.classList.remove('active');
  });
}

function openDrawer(id) {
  const c = state.contracts.find(x => x.id === id);
  if (!c) return;

  document.getElementById('drawer-company').textContent = c.company_name;
  document.getElementById('drawer-code').textContent = c.contract_code;
  document.getElementById('drawer-industry').textContent = c.industry;
  document.getElementById('drawer-cui').textContent = c.fiscal_code || 'Fara CUI';
  document.getElementById('drawer-status').textContent = c.status === 'active' ? 'Activ' : (c.status === 'completed' ? 'Finalizat' : 'Anulat');

  const r = c.total_value_eur > 0 ? (c.collected_amount / c.total_value_eur * 100).toFixed(1) : 0;
  document.getElementById('drawer-rate').textContent = r + '%';
  document.getElementById('drawer-total').textContent = fmt(c.total_value_eur);
  document.getElementById('drawer-collected').textContent = fmt(c.collected_amount);
  document.getElementById('drawer-pending').textContent = fmt(Math.max(0, c.total_value_eur - c.collected_amount));
  document.getElementById('drawer-overdue').textContent = fmt(c.overdue_amount);

  document.getElementById('detail-drawer').classList.add('active');
}

// Table row and action button click handlers
function initTableActions() {
  document.addEventListener('click', e => {
    const edit = e.target.closest('.btn-edit');
    if (edit) {
      e.stopPropagation();
      openModal(Number(edit.getAttribute('data-id')));
      return;
    }
    const del = e.target.closest('.btn-delete');
    if (del) {
      e.stopPropagation();
      const id = Number(del.getAttribute('data-id'));
      const c = state.contracts.find(x => x.id === id);
      if (c && confirm(`Confirmati stergerea contractului ${c.contract_code}?`)) {
        state.contracts = state.contracts.filter(x => x.id !== id);
        save();
        computeKPIs();
        renderTables();
        toast(`Contract sters: ${c.contract_code}`);
      }
      return;
    }
    const row = e.target.closest('.clickable-row');
    if (row) {
      openDrawer(Number(row.getAttribute('data-id')));
    }
  });
}

// Search, filter, and column sort handlers
function initFilters() {
  const os = document.getElementById('overview-search');
  const ps = document.getElementById('portfolio-search');
  const cos = document.getElementById('btn-clear-overview-search');
  const cps = document.getElementById('btn-clear-portfolio-search');

  function doSearch(v) {
    state.search = v;
    state.overviewPage = 1;
    if (os && os.value !== v) os.value = v;
    if (ps && ps.value !== v) ps.value = v;
    cos?.classList.toggle('visible', Boolean(v));
    cps?.classList.toggle('visible', Boolean(v));
    renderTables();
  }

  os?.addEventListener('input', e => doSearch(e.target.value));
  ps?.addEventListener('input', e => doSearch(e.target.value));
  cos?.addEventListener('click', () => doSearch(''));
  cps?.addEventListener('click', () => doSearch(''));

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.filter = btn.getAttribute('data-filter');
      renderTables();
    });
  });

  document.getElementById('portfolio-industry')?.addEventListener('change', e => {
    state.industry = e.target.value;
    renderTables();
  });

  document.querySelectorAll('th.sortable').forEach(th => {
    th.addEventListener('click', () => {
      const col = th.getAttribute('data-sort');
      if (state.sortCol === col) {
        state.sortDir = state.sortDir === 'asc' ? 'desc' : 'asc';
      } else {
        state.sortCol = col;
        state.sortDir = 'desc';
      }
      document.querySelectorAll('th.sortable').forEach(h => {
        h.classList.remove('sort-active');
        const arr = h.querySelector('.sort-arrow');
        if (arr) arr.innerHTML = '&#8597;';
      });
      th.classList.add('sort-active');
      const arrow = th.querySelector('.sort-arrow');
      if (arrow) arrow.innerHTML = state.sortDir === 'asc' ? '&#8593;' : '&#8595;';
      renderTables();
    });
  });
}

// File import and CSV export
function initExportAndImport() {
  document.getElementById('btn-export-csv')?.addEventListener('click', () => exportCSV(state.contracts));
  document.getElementById('btn-export-filtered')?.addEventListener('click', () => exportCSV(getFiltered()));
  document.getElementById('btn-print')?.addEventListener('click', () => window.print());

  const importBtn = document.getElementById('btn-import-trigger');
  const fileInput = document.getElementById('file-import');
  if (importBtn && fileInput) {
    importBtn.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', e => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = evt => {
        const text = evt.target.result;
        try {
          if (file.name.endsWith('.json')) {
            const data = JSON.parse(text);
            if (Array.isArray(data)) {
              state.contracts = data;
              save();
              computeKPIs();
              renderTables();
              toast(`Importate ${data.length} contracte`);
            }
          } else if (file.name.endsWith('.csv')) {
            parseCSV(text);
          }
        } catch (err) {
          toast('Eroare la import fisier');
        }
        fileInput.value = '';
      };
      reader.readAsText(file);
    });
  }
}

// Split a CSV line respecting double-quoted fields
function splitCSVLine(line) {
  const out = [];
  let cur = '', inQ = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (inQ) {
      if (ch === '"' && line[i + 1] === '"') { cur += '"'; i++; }
      else if (ch === '"') inQ = false;
      else cur += ch;
    } else if (ch === '"') inQ = true;
    else if (ch === ',') { out.push(cur); cur = ''; }
    else cur += ch;
  }
  out.push(cur);
  return out.map(s => s.trim());
}

function parseCSV(text) {
  const lines = text.trim().split(/\r?\n/).filter(Boolean);
  if (lines.length <= 1) return;

  const newContracts = [];
  for (let i = 1; i < lines.length; i++) {
    const parts = splitCSVLine(lines[i]);
    if (parts.length >= 5) {
      newContracts.push({
        id: Date.now() + i,
        contract_code: parts[0] || `CTR-${i}`,
        company_name: parts[1] || 'Client',
        fiscal_code: parts[2] || '',
        industry: parts[3] || 'General',
        total_value_eur: parseFloat(parts[4]) || 0,
        collected_amount: parseFloat(parts[5]) || 0,
        overdue_amount: parseFloat(parts[6]) || 0,
        status: ['active', 'completed', 'cancelled'].includes(parts[7]) ? parts[7] : 'active'
      });
    }
  }

  if (newContracts.length > 0) {
    state.contracts = newContracts;
    save();
    computeKPIs();
    renderTables();
    toast(`Importate ${newContracts.length} contracte`);
  }
}

function exportCSV(list) {
  if (!list || list.length === 0) return;
  const q = v => `"${String(v ?? '').replace(/"/g, '""')}"`;
  const headers = 'Cod Contract,Client,CUI,Industrie,Valoare Totala EUR,Incasat EUR,Restant EUR,Status';
  const rows = list.map(c => {
    return `${q(c.contract_code)},${q(c.company_name)},${q(c.fiscal_code)},${q(c.industry)},${c.total_value_eur},${c.collected_amount},${c.overdue_amount},${q(c.status)}`;
  });
  const csv = '\uFEFF' + headers + '\n' + rows.join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `bitfact_portofoliu_${new Date().toISOString().slice(0, 10)}.csv`;
  link.click();
  toast('Fisier CSV descarcat');
}

// Keyboard shortcuts
function initKeys() {
  document.addEventListener('keydown', e => {
    if (['INPUT', 'SELECT', 'TEXTAREA'].includes(e.target.tagName)) {
      if (e.key === 'Escape') {
        e.target.blur();
        closeModal();
        document.getElementById('detail-drawer')?.classList.remove('active');
      }
      return;
    }
    const overlayOpen = document.getElementById('contract-modal').classList.contains('active') ||
                        document.getElementById('detail-drawer').classList.contains('active');
    if (overlayOpen) {
      if (e.key === 'Escape') {
        closeModal();
        document.getElementById('detail-drawer').classList.remove('active');
      }
      return;
    }
    if (e.key === '/') {
      e.preventDefault();
      const s = state.tab === 'portfolio' ? document.getElementById('portfolio-search') : document.getElementById('overview-search');
      s?.focus();
    } else if (e.key.toLowerCase() === 'n') {
      e.preventDefault();
      openModal();
    } else if (e.key.toLowerCase() === 't') {
      e.preventDefault();
      const cur = document.documentElement.getAttribute('data-theme') || 'light';
      setTheme(cur === 'dark' ? 'light' : 'dark');
    } else if (e.key.toLowerCase() === 'e') {
      e.preventDefault();
      exportCSV(state.contracts);
    } else if (e.key.toLowerCase() === 'p') {
      e.preventDefault();
      window.print();
    } else if (e.key === 'Escape') {
      closeModal();
      document.getElementById('detail-drawer')?.classList.remove('active');
    }
  });
}

// Toast notifications
function toast(msg) {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const el = document.createElement('div');
  el.className = 'toast mono';
  el.textContent = msg;
  container.appendChild(el);
  setTimeout(() => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(4px)';
    el.style.transition = 'opacity 200ms var(--ease), transform 200ms var(--ease)';
    setTimeout(() => el.remove(), 200);
  }, 2200);
}

// App startup
document.addEventListener('DOMContentLoaded', () => {
  loadData();
  initTheme();
  initNav();
  initPagination();
  initFilters();
  initModal();
  initDrawer();
  initTableActions();
  initExportAndImport();
  initKeys();
  computeKPIs();
  renderTables();
});