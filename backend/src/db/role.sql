-- ============================================
-- Role i uprawnienia startowe
-- ============================================

-- Role
INSERT INTO roles (name, description) VALUES
('CompanyAdmin', 'Administrator całej firmy – pełny dostęp do wszystkich placówek'),
('BranchAdmin', 'Dyrektor placówki – pełny dostęp do swojej placówki'),
('Manager', 'Kierownik grupy – zarządza grafikami, postami i pracownikami w swojej grupie'),
('Employee', 'Zwykły pracownik – dostęp do grafiku i postów'),
('AgencyWorker', 'Pracownik tymczasowy z agencji – ograniczony dostęp na określony czas');

-- Uprawnienia
INSERT INTO permissions (name, description) VALUES
('add_post', 'Dodawanie postów/informacji'),
('edit_post', 'Edycja postów'),
('delete_post', 'Usuwanie postów'),
('view_posts', 'Podgląd postów'),
('manage_schedule', 'Dodawanie i edycja grafików'),
('view_schedule', 'Podgląd grafików'),
('manage_users', 'Dodawanie i usuwanie pracowników'),
('view_users', 'Podgląd pracowników'),
('assign_roles', 'Nadawanie ról użytkownikom'),
('send_message', 'Wysyłanie wiadomości'),
('view_notifications', 'Podgląd powiadomień'),
('add_notification', 'Dodawanie powiadomień');

-- Powiązania rola ↔ uprawnienia
-- CompanyAdmin – pełny dostęp
INSERT INTO role_permissions (role_id, permission_id)
SELECT r.role_id, p.permission_id
FROM roles r, permissions p
WHERE r.name = 'CompanyAdmin';

-- BranchAdmin – pełny dostęp do swojej placówki
INSERT INTO role_permissions (role_id, permission_id)
SELECT r.role_id, p.permission_id
FROM roles r, permissions p
WHERE r.name = 'BranchAdmin';