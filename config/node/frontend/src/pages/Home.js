import React from "react";
import { Button, Typography } from "@mui/material";

function Home(props)
{
    return(
        <div className="home">
            <h1 className="home__header">GEOPORTAL</h1>
            <Typography className="home__subtitle">
                Geoportal tematyczny poświęcony danym przestrzennym.
            </Typography>
            
            <Button className='home__button' variant='contained' size='large'> zXZ </Button>
        </div>
    );
}

export default Home;