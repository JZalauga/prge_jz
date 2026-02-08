import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import {Box, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import '../styles/_cemetery_card.scss';

const CEMETERY_IMG = "/images/cemeteries.png";

function CemeteryCard({ cemetery, onDelete }) {
  const [showDelete, setShowDelete] = React.useState(false);
  return (
      <Card className="cemetery-card" elevation={0}
      onClick={() => setShowDelete(!showDelete)}
      sx = {{backgroundColor: '#648643',
                    color: '#262626',
                    position: 'relative',
                    borderRadius: '20px',}}>
{showDelete && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.6)', 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backdropFilter: 'blur(2px)' 
          }}
        >
          <IconButton 
            onClick={(e) => {
              e.stopPropagation();
              onDelete(cemetery.id); 
            }}
            sx={{ 
              backgroundColor: '#8f102a', 
              color: 'white',
              '&:hover': { backgroundColor: '#db1539' },
              width: '60px',
              height: '60px'
            }}
          >
            <DeleteIcon fontSize="large" />
          </IconButton>
        </Box>
      )}

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
