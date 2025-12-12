-- ============================================
-- Pakiet przykładowych wywołań procedur/funkcji
-- ============================================

-- 🔧 Użytkownicy
CALL add_user(
    1, 3,
    'jan.kowalski', 'jan@firma.pl', 'hash...',
    'Jan', 'Kowalski', '123456789',
    FALSE, NULL, NULL
);

CALL add_user(
    1, 3,
    'anna.agencja', 'anna@agencja.pl', 'hash...',
    'Anna', 'Nowak', '987654321',
    TRUE, DATE_ADD(NOW(), INTERVAL 48 HOUR), 'Agencja XYZ'
);

SELECT is_user_active(15);

CALL deactivate_expired_users();

-- 📌 Role i uprawnienia
CALL assign_role(15, 'Manager');
SELECT has_permission(15, 'manage_schedule');

-- 👥 Grupy pracowników
CALL add_user_to_group(15, 'Recepcja', 3);

-- 📝 Posty
CALL add_post(3, 15, 'Nowy grafik', 'Grafik na przyszły tydzień został dodany.');
CALL edit_post(7, 15, 'Zmieniony tytuł', 'Zaktualizowana treść posta.');

-- 📅 Grafiki
CALL add_schedule(3, 15, '2025-12-15', '08:00', '16:00');

-- 📊 Logi aktywności
CALL log_activity(3, 15, 'LOGIN', 'Użytkownik zalogował się do systemu');

-- ✉️ Wiadomości i powiadomienia
CALL send_message(15, 20, 'Hej, pamiętaj o spotkaniu o 14:00!');
CALL add_notification(15, 'Zmiana grafiku', 'Twój grafik został zaktualizowany.');