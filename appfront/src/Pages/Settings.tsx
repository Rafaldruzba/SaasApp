import React, { useState } from 'react';

interface SettingsData {
    appName: string;
    email: string;
    notifications: boolean;
    theme: 'light' | 'dark';
    language: string;
}

export const Settings: React.FC = () => {
    const [settings, setSettings] = useState<SettingsData>({
        appName: 'My App',
        email: 'user@example.com',
        notifications: true,
        theme: 'light',
        language: 'en',
    });

    const [saved, setSaved] = useState(false);

    const handleChange = (field: keyof SettingsData, value: any) => {
        setSettings(prev => ({ ...prev, [field]: value }));
        setSaved(false);
    };

    const handleSave = () => {
        console.log('Settings saved:', settings);
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
    };

    return (
        <div className="settings-container" style={{ padding: '2rem', maxWidth: '600px' }}>
            <h1>Settings</h1>

            <div className="settings-section" style={{ marginBottom: '1.5rem' }}>
                <label>App Name</label>
                <input
                    type="text"
                    value={settings.appName}
                    onChange={(e) => handleChange('appName', e.target.value)}
                    style={{ width: '100%', padding: '0.5rem' }}
                />
            </div>

            <div className="settings-section" style={{ marginBottom: '1.5rem' }}>
                <label>Email</label>
                <input
                    type="email"
                    value={settings.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    style={{ width: '100%', padding: '0.5rem' }}
                />
            </div>

            <div className="settings-section" style={{ marginBottom: '1.5rem' }}>
                <label>Theme</label>
                <select
                    value={settings.theme}
                    onChange={(e) => handleChange('theme', e.target.value)}
                    style={{ width: '100%', padding: '0.5rem' }}
                >
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                </select>
            </div>

            <div className="settings-section" style={{ marginBottom: '1.5rem' }}>
                <label>
                    <input
                        type="checkbox"
                        checked={settings.notifications}
                        onChange={(e) => handleChange('notifications', e.target.checked)}
                    />
                    Enable Notifications
                </label>
            </div>

            <button onClick={handleSave} style={{ padding: '0.75rem 1.5rem', cursor: 'pointer' }}>
                Save Settings
            </button>

            {saved && <p style={{ color: 'green', marginTop: '1rem' }}>Settings saved successfully!</p>}
        </div>
    );
};