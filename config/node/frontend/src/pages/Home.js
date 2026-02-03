import React from "react";
import { Button, Typography, Box } from "@mui/material";
import { Link } from "react-router";

function Home(props) {
    return (
        <Box className='home'>
            {/* Połączony tytuł dla lepszego efektu wizualnego */}
            <Typography variant="h1" className='home__title'>
                GEOPORTAL<br />CMENTARZY
            </Typography>

            <Button
                className='home__button'
                variant='contained'
                component={Link}
                to='/services'
                disableElevation 
                sx={{
                    // Wykorzystujemy Twoje kody kolorów bezpośrednio
                    backgroundColor: '#648643',
                    color: '#262626',
                    borderRadius: '20px',
                    padding: '12px 60px',
                    fontWeight: 700,
                    '&:hover': {
                        backgroundColor: '#759a52', // Nieco jaśniejszy zielony
                    },
                }}
            >
                START
            </Button>
        </Box>
    );
}

export default Home;