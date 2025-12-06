import React, { useState, useEffect } from 'react';

interface Notification {
    id: string;
    message: string;
    type: 'success' | 'error' | 'info' | 'warning';
    timestamp: Date;
    read: boolean;
}

const Notifications: React.FC = () => {
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch notifications from your API
        fetchNotifications();
    }, []);

    const fetchNotifications = async () => {
        try {
            // Replace with your actual API endpoint
            const response = await fetch('/api/notifications');
            const data = await response.json();
            setNotifications(data);
        } catch (error) {
            console.error('Failed to fetch notifications:', error);
        } finally {
            setLoading(false);
        }
    };

    const markAsRead = (id: string) => {
        setNotifications(
            notifications.map(n => (n.id === id ? { ...n, read: true } : n))
        );
    };

    const deleteNotification = (id: string) => {
        setNotifications(notifications.filter(n => n.id !== id));
    };

    if (loading) return <div className="p-4">Loading notifications...</div>;

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Notifications</h1>
            <div className="space-y-3">
                {notifications.length === 0 ? (
                    <p className="text-gray-500">No notifications</p>
                ) : (
                    notifications.map(notification => (
                        <div
                            key={notification.id}
                            className={`p-4 rounded border ${
                                notification.read ? 'bg-gray-50' : 'bg-blue-50'
                            }`}
                        >
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="font-medium">{notification.message}</p>
                                    <p className="text-sm text-gray-500">
                                        {notification.timestamp.toLocaleString()}
                                    </p>
                                </div>
                                <div className="space-x-2">
                                    {!notification.read && (
                                        <button
                                            onClick={() => markAsRead(notification.id)}
                                            className="text-sm text-blue-600 hover:underline"
                                        >
                                            Mark as read
                                        </button>
                                    )}
                                    <button
                                        onClick={() => deleteNotification(notification.id)}
                                        className="text-sm text-red-600 hover:underline"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Notifications;