import React from 'react';
import { Typography, Box, Card, CardMedia, CardActionArea } from "@mui/material";
import {Link} from "react-router-dom";

//D:\UCZELNIA\semestr_5\prge\projekt\prge_jz\config\node\frontend\public\images\cemeteries.png
const serviceList = [
  { id: 1, title: 'Geoportal', img: '../../public/images/geoportal.png', path: '/map' },
  { id: 2, title: 'Cmentarze', img: '/images/geoportal.png', path: '/cemeteries' },
  { id: 3, title: 'Pracownicy', img: '/images/workers.png', path: '/workers' },
  { id: 4, title: 'Klienci', img: '/images/clients.png', path: '/clients' },
];

function Services(props) {
  return (
    <Box className="services">
      <Box className="services__grid">
        {serviceList.map((service) => (
          <Card key={service.id} className="services__card" elevation={0}>
            <CardActionArea component={Link} to={service.path}>
              <img 
                src={service.img} 
                alt={service.title} 
                className="card-image"
              />
              <Box className="card-label">
                {service.title}
              </Box>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default Services;