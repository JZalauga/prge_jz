import React from "react";
import { Button, Typography, Box } from "@mui/material";
import { Link } from "react-router";

function Home(props) {
    return (
        <Box className='home'>
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
                    backgroundColor: '#648643',
                    color: '#262626',
                    borderRadius: '20px',
                    fontWeight: 700,
                    padding:{
                        xs: '5px 40px',
                        md: '12px 60px',
                    },
                    fontsize:{
                        xs: '1rem',
                        md: '1.4rem'
                    },
                    '&:hover': {
                        backgroundColor: '#759a52',
                    },
                }}
            >
                START
            </Button>
        </Box>
    );
}

export default Home;