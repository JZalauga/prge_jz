import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Paper, Box, Alert } from '@mui/material';

const NewCemetery = () => {
    const [formData, setFormData] = useState({
        name: '',
        location: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ type: 'info', message: 'Wysyłanie...' });

        try {
            const response = await fetch('http://localhost:10000/app/insert_cemetery', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus({ type: 'success', message: 'Dodano cmentarz' });
                setFormData({ name: '', location: '' }); 
            } else {
                throw new Error('Błąd podczas dodawania');
            }
        } catch (error) {
            setStatus({ type: 'error', message: error.message });
        }
    };

    return (
        <Box className="new-cemetery-page">
                <Typography variant="h5" className = "new-cemetery-page__title" gutterBottom align="center">
                    Dodaj cmentarz
                </Typography>

                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                    <TextField
                        fullWidth
                        label="Nazwa"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        margin="normal"
                        className="new-cemetery-page__textfield"
                        required
                    />
                    <TextField
                        fullWidth
                        label="Lokalizacja"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        margin="normal"
                        className="new-cemetery-page__textfield"
                        required
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        className="new-cemetery-page__submit"
                        color="primary"
                    >
                        Zapisz
                    </Button>

                    {status.message && (
                        <Alert severity={status.type}
                        sx = {{
                            mt: 2,
                            backgroundColor: 'transparent',
                            color: '#648643',
                            fontSize: {xs: '1rem', md: '1.4rem'}
                            }}>
                            {status.message}
                        </Alert>
                    )}
                </Box>
        </Box>
    );
};

export default NewCemetery;