import React, { useEffect, useState } from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import CemeteryCard from "../components/CemeteryCard";
import "../styles/_cemetery_card.scss";

function ListOfCemeteries(props) {
  const [cemeteries, setCemeteries] = useState();

  useEffect(() => {
    fetch("http://localhost:10000/app/get_cemetery")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setCemeteries(res.data);
      });
  }, []);
  useEffect(() => {}, []);

  const handleDelete = async (id) => {
    fetch(`http://localhost:10000/app/delete_cemetery/${id}`, {
      method: "DELETE",
    });
    setCemeteries(cemeteries.filter((cemetery) => cemetery.id !== id));
  };


  return (
    <Box className="list-page">
      <Container maxWidth="lg">
        <Typography variant="h2" className="list-page__title">
          Cmentarze
        </Typography>

        <Grid container spacing={4} jusifyContent="center">
          {cemeteries?.map((cemetery) => (
            <Grid key={cemetery.id} size={{ xs: 12, md: 3 }}>
              <CemeteryCard key={cemetery.id} cemetery={cemetery} onDelete={handleDelete} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default ListOfCemeteries;
