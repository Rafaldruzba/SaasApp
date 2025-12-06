import React from 'react';

const Messages: React.FC = () => {
    const [messages, setMessages] = React.useState<string[]>([]);

    React.useEffect(() => {
        // Fetch messages from an API or service
        const fetchMessages = async () => {
            // Replace with your API call
            const response = await fetch('/api/messages');
            const data = await response.json();
            setMessages(data);
        };

        fetchMessages();
    }, []);

    return (
        <div>
            <h1>Messages</h1>
            <ul>
                {messages.map((message, index) => (
                    <li key={index}>{message}</li>
                ))}
            </ul>
        </div>
    );
};

export default Messages;