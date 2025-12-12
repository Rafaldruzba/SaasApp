-- Dodawanie użytkownika (zwykłego lub tymczasowego)
DELIMITER //
CREATE PROCEDURE add_user (
    IN p_company_id INT,
    IN p_branch_id INT,
    IN p_username VARCHAR(100),
    IN p_email VARCHAR(255),
    IN p_password_hash VARCHAR(255),
    IN p_first_name VARCHAR(100),
    IN p_last_name VARCHAR(100),
    IN p_phone VARCHAR(50),
    IN p_is_temporary BOOLEAN,
    IN p_expires_at DATETIME,
    IN p_agency_name VARCHAR(255)
)
BEGIN
    INSERT INTO users (
        company_id, branch_id, username, email, password_hash,
        first_name, last_name, phone, is_temporary, expires_at, agency_name
    )
    VALUES (
        p_company_id, p_branch_id, p_username, p_email, p_password_hash,
        p_first_name, p_last_name, p_phone, p_is_temporary, p_expires_at, p_agency_name
    );
END //
DELIMITER ;

-- Sprawdzenie czy użytkownik jest aktywny
DELIMITER //
CREATE FUNCTION is_user_active(p_user_id INT) RETURNS BOOLEAN
BEGIN
    DECLARE v_is_temporary BOOLEAN;
    DECLARE v_expires_at DATETIME;
    DECLARE v_result BOOLEAN;

    SELECT is_temporary, expires_at INTO v_is_temporary, v_expires_at
    FROM users WHERE user_id = p_user_id;

    IF v_is_temporary = TRUE AND v_expires_at < NOW() THEN
        SET v_result = FALSE;
    ELSE
        SET v_result = TRUE;
    END IF;

    RETURN v_result;
END //
DELIMITER ;

-- Dezaktywacja wygasłych kont tymczasowych
DELIMITER //
CREATE PROCEDURE deactivate_expired_users()
BEGIN
    UPDATE users
    SET is_temporary = FALSE
    WHERE is_temporary = TRUE AND expires_at < NOW();

    INSERT INTO activity_logs (branch_id, user_id, action, description)
    SELECT branch_id, user_id, 'DEACTIVATE_USER', 'Konto tymczasowe wygasło'
    FROM users WHERE is_temporary = FALSE AND expires_at < NOW();
END //
DELIMITER;

-- Nadanie roli użytkownikowi
DELIMITER //
CREATE PROCEDURE assign_role (
    IN p_user_id INT,
    IN p_role_name VARCHAR(100)
)
BEGIN
    INSERT INTO user_roles (user_id, role_id)
    VALUES (
        p_user_id,
        (SELECT role_id FROM roles WHERE name = p_role_name)
    );
END //
DELIMITER ;

-- Sprawdzenie czy użytkownik ma dane uprawnienie
DELIMITER //
CREATE FUNCTION has_permission(p_user_id INT, p_permission_name VARCHAR(100)) RETURNS BOOLEAN
BEGIN
    DECLARE v_count INT;

    SELECT COUNT(*) INTO v_count
    FROM user_roles ur
    JOIN role_permissions rp ON ur.role_id = rp.role_id
    JOIN permissions p ON rp.permission_id = p.permission_id
    WHERE ur.user_id = p_user_id AND p.name = p_permission_name;

    RETURN v_count > 0;
END //
DELIMITER ;

-- Dodanie użytkownika do grupy
DELIMITER //
CREATE PROCEDURE add_user_to_group (
    IN p_user_id INT,
    IN p_group_name VARCHAR(100),
    IN p_branch_id INT
)
BEGIN
    INSERT INTO user_groups (user_id, group_id)
    VALUES (
        p_user_id,
        (SELECT group_id FROM employee_groups WHERE name = p_group_name AND branch_id = p_branch_id)
    );
END //
DELIMITER ;

-- Dodanie posta
DELIMITER //
CREATE PROCEDURE add_post (
    IN p_branch_id INT,
    IN p_author_id INT,
    IN p_title VARCHAR(255),
    IN p_content TEXT
)
BEGIN
    INSERT INTO posts (branch_id, author_id, title, content)
    VALUES (p_branch_id, p_author_id, p_title, p_content);

    CALL log_activity(p_branch_id, p_author_id, 'ADD_POST', CONCAT('Dodano post: ', p_title));
END //
DELIMITER ;

-- Edycja posta
DELIMITER //
CREATE PROCEDURE edit_post (
    IN p_post_id INT,
    IN p_author_id INT,
    IN p_title VARCHAR(255),
    IN p_content TEXT
)
BEGIN
    UPDATE posts
    SET title = p_title, content = p_content, updated_at = NOW()
    WHERE post_id = p_post_id;

    CALL log_activity((SELECT branch_id FROM posts WHERE post_id = p_post_id), p_author_id, 'EDIT_POST', CONCAT('Edytowano post ID: ', p_post_id));
END //
DELIMITER ;

-- Dodanie grafiku
DELIMITER //
CREATE PROCEDURE add_schedule (
    IN p_branch_id INT,
    IN p_user_id INT,
    IN p_shift_date DATE,
    IN p_shift_start TIME,
    IN p_shift_end TIME
)
BEGIN
    INSERT INTO schedules (branch_id, user_id, shift_date, shift_start, shift_end)
    VALUES (p_branch_id, p_user_id, p_shift_date, p_shift_start, p_shift_end);

    CALL log_activity(p_branch_id, p_user_id, 'ADD_SCHEDULE', CONCAT('Dodano grafik na ', p_shift_date));
END //
DELIMITER ;

-- Logowanie aktywności
DELIMITER //
CREATE PROCEDURE log_activity (
    IN p_branch_id INT,
    IN p_user_id INT,
    IN p_action VARCHAR(100),
    IN p_description TEXT
)
BEGIN
    INSERT INTO activity_logs (branch_id, user_id, action, description)
    VALUES (p_branch_id, p_user_id, p_action, p_description);
END //
DELIMITER ;

-- Wysłanie wiadomości
DELIMITER //
CREATE PROCEDURE send_message (
    IN p_sender_id INT,
    IN p_receiver_id INT,
    IN p_content TEXT
)
BEGIN
    INSERT INTO messages (sender_id, receiver_id, content)
    VALUES (p_sender_id, p_receiver_id, p_content);

    CALL log_activity((SELECT branch_id FROM users WHERE user_id = p_sender_id), p_sender_id, 'SEND_MESSAGE', CONCAT('Wysłano wiadomość do user_id: ', p_receiver_id));
END //
DELIMITER ;

-- Dodanie powiadomienia
DELIMITER //
CREATE PROCEDURE add_notification (
    IN p_user_id INT,
    IN p_title VARCHAR(255),
    IN p_content TEXT
)
BEGIN
    INSERT INTO notifications (user_id, title, content)
    VALUES (p_user_id, p_title, p_content);
END //
DELIMITER ;

