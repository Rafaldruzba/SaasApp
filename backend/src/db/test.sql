INSERT INTO companies (name, city, country)
VALUES ('Arche Sp. z o.o.', 'Warszawa', 'Polska');
INSERT INTO branches (company_id, name, type, city)
VALUES (1, 'Łochów Folwark', 'hotel', 'Łochów');
INSERT INTO employee_groups (branch_id, name) VALUES
(1, 'Recepcja'),
(1, 'Restauracja'),
(1, 'Housekeeping');
INSERT INTO users (company_id, branch_id, username, email, password_hash, first_name, last_name)
VALUES (1, 1, 'dyrektor.folwark', 'dyrektor@arche.pl', 'hash', 'Marek', 'Zieliński');
INSERT INTO users VALUES
(NULL, 1, 1, 'manager.recepcja', 'manager.recepcja@arche.pl', 'hash', 'Anna', 'Kowalska', NULL, NULL, NULL, NULL, CURDATE()),
(NULL, 1, 1, 'manager.restauracja', 'manager.restauracja@arche.pl', 'hash', 'Piotr', 'Nowak', NULL, NULL, NULL, NULL, CURDATE());
INSERT INTO users VALUES
(NULL, 1, 1, 'prac1', 'prac1@arche.pl', 'hash', 'Julia', 'Mazur', NULL, NULL, NULL, NULL, CURDATE()),
(NULL, 1, 1, 'prac2', 'prac2@arche.pl', 'hash', 'Karol', 'Lis', NULL, NULL, NULL, NULL, CURDATE()),
(NULL, 1, 1, 'prac3', 'prac3@arche.pl', 'hash', 'Ewa', 'Kurek', NULL, NULL, NULL, NULL, CURDATE()),
(NULL, 1, 1, 'prac4', 'prac4@arche.pl', 'hash', 'Tomasz', 'Bąk', NULL, NULL, NULL, NULL, CURDATE()),
(NULL, 1, 1, 'prac5', 'prac5@arche.pl', 'hash', 'Ola', 'Sikora', NULL, NULL, NULL, NULL, CURDATE()),
(NULL, 1, 1, 'prac6', 'prac6@arche.pl', 'hash', 'Michał', 'Kruk', NULL, NULL, NULL, NULL, CURDATE()),
(NULL, 1, 1, 'prac7', 'prac7@arche.pl', 'hash', 'Natalia', 'Baran', NULL, NULL, NULL, NULL, CURDATE());
INSERT INTO user_roles (user_id, role_id)
VALUES (1, (SELECT role_id FROM roles WHERE name='BranchAdmin'));
INSERT INTO user_roles VALUES
(2, (SELECT role_id FROM roles WHERE name='Manager')),
(3, (SELECT role_id FROM roles WHERE name='Manager'));
INSERT INTO user_roles VALUES
(4, (SELECT role_id FROM roles WHERE name='Employee')),
(5, (SELECT role_id FROM roles WHERE name='Employee')),
(6, (SELECT role_id FROM roles WHERE name='Employee')),
(7, (SELECT role_id FROM roles WHERE name='Employee')),
(8, (SELECT role_id FROM roles WHERE name='Employee')),
(9, (SELECT role_id FROM roles WHERE name='Employee')),
(10, (SELECT role_id FROM roles WHERE name='Employee'));
INSERT INTO user_groups VALUES
(2, 1),  -- manager recepcji
(4, 1),
(5, 1);
INSERT INTO user_groups VALUES
(3, 2),  -- manager restauracji
(6, 2),
(7, 2),
(8, 2);
INSERT INTO user_groups VALUES
(9, 3),
(10, 3),
(1, 3);  -- dyrektor może być przypisany do wszystkich grup