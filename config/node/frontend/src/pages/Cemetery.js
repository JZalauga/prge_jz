import React from 'react';
import { Box, Button, Typography } from "@mui/material";
import { Link } from 'react-router-dom';

function Cemetery() {
    return (
        <Box className="cemetery-page">
            <Typography variant="h2" className="cemetery-page__title">
                Zarządzanie Cmentarzami
            </Typography>

            <Box className="cemetery-page__actions">
                <Button
                    variant="contained"
                    component={Link}
                    to="/cemeteries/cmeteries_list" // Ścieżka do listy
                    disableElevation
                    sx={{
                        backgroundColor: '#648643',
                        color: '#262626',
                        borderRadius: '12px',
                        padding: '12px 60px',
                        fontWeight: 700,
                        '&:hover': {
                        backgroundColor: '#759a52', // Nieco jaśniejszy zielony
                        },
                     }} // Dodaje odstęp między przyciskami
                    
                >
                    Lista cmentarzy
                </Button>

                <Button
                    variant="contained"
                    component={Link}
                    to="/cemeteries/new_cemetery" // Ścieżka do formularza dodawania
                    disableElevation
                    sx={{
                        backgroundColor: '#648643',
                        color: '#262626',
                        borderRadius: '12px',
                        padding: '12px 60px',
                        fontWeight: 700,
                        '&:hover': {
                        backgroundColor: '#759a52', // Nieco jaśniejszy zielony
                        },
                     }}
                >
                    Dodaj cmentarz
                </Button>
            </Box>
        </Box>
    );
}

export default Cemetery;