import React, { useEffect, useState } from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import WorkerCard from "../components/WorkerCard";

function ListOfWorkers(props) {
  const [workers, setWorkers] = useState();

  useEffect(() => {
    fetch("http://localhost:10000/app/get_worker")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setWorkers(res.data);
      });
  }, []);
  useEffect(() => {}, []);

  return (
    <Box className="list-page">
      <Container maxWidth="lg">
        <Typography variant="h2" className="list-page__title"
        sx={{
          fontSize: {xs: '2rem', md: '3rem'},
        }}>
          Pracownicy
        </Typography>

        <Grid container spacing={4} jusifyContent="center">
          {workers?.map((worker) => (
            <Grid key={worker.id} size={{ xs: 12, md: 3 }}>
              <WorkerCard key={worker.id} worker={worker} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default ListOfWorkers;
