import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

const CEMETERY_IMG = "/images/workers.png";

function CemeteryCard({ worker }) {
  return (
      <Card className="worker-card" elevation={0} sx = {{backgroundColor: '#648643',
                    color: '#262626',
                    borderRadius: '20px',}}>
        <CardMedia
          component="img"
          image={CEMETERY_IMG}
          alt="Cmentarz"
          className="worker-card__image"
        />
        <CardContent className="worker-card__content">
          <Typography variant="h6" className="worker-card__name">
            {worker.name} {worker.surname}
          </Typography>
          <Typography variant="body2" className="worker-card__cemetery">
            Cmentarz {worker.cemetery} 
          </Typography>
          <Typography variant="body2" className="worker-card__seniority">
            {worker.seniority} lat stażu
          </Typography>
          
        </CardContent>
      </Card>
  );
}

export default CemeteryCard;
