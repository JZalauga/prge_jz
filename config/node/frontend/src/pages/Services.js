import React from "react";
import {
  Typography,
  Box,
  Card,
  CardMedia,
  CardActionArea,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";

//D:\UCZELNIA\semestr_5\prge\projekt\prge_jz\config\node\frontend\public\images\cemeteries.png
const serviceList = [
  { id: 1, title: "Geoportal", img: "/images/geoportal.png", path: "/map" },
  {
    id: 2,
    title: "Cmentarze",
    img: "/images/cemeteries.png",
    path: "/cemeteries",
  },
  { id: 3, title: "Pracownicy", img: "/images/workers.png", path: "/workers" },
  { id: 4, title: "Klienci", img: "/images/clients.png", path: "/clients" },
];

function Services(props) {
  return (
    <Box className="services">
      <Grid container spacing={4} jusifyContent="center">
        {serviceList.map((service) => (
          <Grid key={service.id} size={{ xs: 12, md: 3 }}>
            <Card key={service.id} className="services__card" elevation={0}>
              <CardActionArea component={Link} to={service.path}>
                <Box
                 component = "img"
                  src={service.img}
                  alt={service.title}
                  sx={{
                    width: '100%',
                    aspectRatio: '16 / 10',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                <Box className="card-label"
                  sx={{
                    backgroundColor: '#648643',
                    color: '#262626',
                    textAlign: 'center',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    padding: {
                      xs: '8px',
                      md: '12px'},
                    fontSize: {
                      xs: '1rem',
                      md: '1.4rem'}
                  }}
                  >
                    {service.title}
                </Box>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Services;
