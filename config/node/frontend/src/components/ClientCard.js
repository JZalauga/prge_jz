import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

const Client_IMG = "/images/clients.png";

function ClientCard({ client }) {
  return (
      <Card className="client-card" elevation={0}>
        <CardMedia
          component="img"
          image={Client_IMG}
          className="client-card__image"
        />
        <CardContent className="client-card__content">
          <Typography variant="h6" className="client-card__name">
            {client.name}
          </Typography>
          <Typography variant="body2" className="client-card__type">
            Typ: {client.type} 
          </Typography>
          <Typography variant="body2" className="client-card__address">
            Adres: {client.address}
          </Typography>
          
        </CardContent>
      </Card>
  );
}

export default ClientCard;
