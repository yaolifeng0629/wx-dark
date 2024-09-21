import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

function ChatWindow() {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');

    const handleSend = () => {
        if (inputMessage.trim()) {
            setMessages([...messages, { text: inputMessage, sender: 'me' }]);
            setInputMessage('');
        }
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Box sx={{ flexGrow: 1, overflow: 'auto', p: 2 }}>
                {messages.map((message, index) => (
                    <Typography key={index} align={message.sender === 'me' ? 'right' : 'left'}>
                        {message.text}
                    </Typography>
                ))}
            </Box>
            <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <TextField
                    fullWidth
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    variant="outlined"
                    placeholder="输入消息..."
                />
                <Button
                    sx={{ mt: 1 }}
                    variant="contained"
                    color="primary"
                    onClick={handleSend}
                >
                    发送
                </Button>
            </Box>
        </Box>
    );
}

export default ChatWindow;
