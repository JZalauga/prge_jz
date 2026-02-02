import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import '../styles/_cemetery_card.scss';

const CEMETERY_IMG = "/images/cemeteries.png";

function CemeteryCard({ cemetery }) {
  return (
      <Card className="cemetery-card" elevation={0} sx = {{backgroundColor: '#648643',
                    color: '#262626',
                    borderRadius: '20px',}}>
        <CardMedia
          component="img"
          image={CEMETERY_IMG}
          alt="Cmentarz"
          className="cemetery-card__image"
        />
        <CardContent className="cemetery-card__content">
          <Typography variant="h6" className="cemetery-card__name">
            {cemetery.name}
          </Typography>
          <Typography variant="body2" className="cemetery-card__location">
            {cemetery.location}
          </Typography>
          
        </CardContent>
      </Card>
  );
}

export default CemeteryCard;
