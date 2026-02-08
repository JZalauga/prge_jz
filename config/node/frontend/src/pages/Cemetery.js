import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Cemetery() {
  return (
    <Box className="cemetery-page">
      <Typography
        variant="h2"
        className="cemetery-page__title"
        sx={{
          display: { xs: "none", md: "block" },
        }}
      >
        Zarządzanie Cmentarzami
      </Typography>

      <Box className="cemetery-page__actions">
        <Button
          variant="contained"
          component={Link}
          to="/cemeteries/cmeteries_list"
          disableElevation
          sx={{
            backgroundColor: "#648643",
            color: "#262626",
            borderRadius: "12px",
            padding: { xs: "15px 60px", md: "20px 70px"},
            fontWeight: 700,
            "&:hover": {
              backgroundColor: "#759a52",
            },
          }}
        >
          Lista cmentarzy
        </Button>

        <Button
          variant="contained"
          component={Link}
          to="/cemeteries/new_cemetery" 
          disableElevation
          sx={{
            backgroundColor: "#648643",
            color: "#262626",
            borderRadius: "12px",
            padding: { xs: "15px 60px", md: "20px 70px"},
            fontWeight: 700,
            "&:hover": {
              backgroundColor: "#759a52", 
            },
          }}
        >
          Dodaj cmentarz
        </Button>
      </Box>
    </Box>
  );
}

export default Cemetery;
