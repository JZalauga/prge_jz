import React, {useEffect, useState} from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import WorkerCard from "../components/WorkerCard";

function ListOfWorkers(props)
{
    const [workers, setWorkers] = useState();

    useEffect(() => {
        fetch("http://localhost:10000/app/get_worker")
        .then(res => res.json())
        .then(res => {console.log(res);
        setWorkers(res.data);
    });
    }, []);
    useEffect(() => {}, []);

    

    return(
        <Box className="list-page">
            <Container maxWidth="lg">
                <Typography variant="h2" className="list-page__title">
                    Pracownicy
                </Typography>

                <Grid container spacing={4} className="list-page__grid">
                    {workers?.map((worker => (<WorkerCard key={worker.id} worker={worker}/>)))}
                </Grid>
            </Container>
        </Box>
    );
}

export default ListOfWorkers;