import React, {useEffect, useState} from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import ClientCard from "../components/ClientCard";

function ListOfClients(props)
{
    const [clients, setClients] = useState();

    useEffect(() => {
        fetch("http://localhost:10000/app/get_client")
        .then(res => res.json())
        .then(res => {console.log(res);
        setClients(res.data);
    });
    }, []);
    useEffect(() => {}, []);

    

    return(
        <Box className="list-page">
            <Container maxWidth="lg">
                <Typography variant="h2" className="list-page__title">
                    Klienci
                </Typography>

                <Grid container spacing={4} className="list-page__grid">
                    {clients?.map((client => (<ClientCard key={client.id} client={client}/>)))}
                </Grid>
            </Container>
        </Box>
    );
}

export default ListOfClients;