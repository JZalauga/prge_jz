import React, {useEffect, useState} from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import CemeteryCard from "../components/CemeteryCard";
import '../styles/_cemetery_card.scss';

function ListOfCemeteries(props)
{
    const [cemeteries, setCemeteries] = useState();

    useEffect(() => {
        //"https://localhost:8000/app/get_users"
        fetch("http://localhost:10000/app/get_cemetery")
        .then(res => res.json())
        .then(res => {console.log(res);
        setCemeteries(res.data);
    });
    }, []);
    useEffect(() => {}, []);

    

    return(
        <Box className="list-page">
            <Container maxWidth="lg">
                <Typography variant="h2" className="list-page__title">
                    Cmentarze
                </Typography>

                <Grid container spacing={4} className="list-page__grid">
                    {cemeteries?.map((cemetery => (<CemeteryCard key={cemetery.id} cemetery={cemetery}/>)))}
                </Grid>
            </Container>
        </Box>
    );
}

export default ListOfCemeteries;