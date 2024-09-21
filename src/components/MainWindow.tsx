import React from 'react';
import { Box, Grid } from '@mui/material';
import ContactList from './ContactList';
import ChatWindow from './ChatWindow';

function MainWindow() {
    return (
        <Box sx={{ flexGrow: 1, height: '100vh' }}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <ContactList />
                </Grid>
                <Grid item xs={9}>
                    <ChatWindow />
                </Grid>
            </Grid>
        </Box>
    );
}

export default MainWindow;
