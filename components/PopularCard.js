import React from "react";
import { Grid, Box } from "@mui/material";

export default function PopularCard() {
  return (
    <Grid container spacing={2} sx={{ pt: 2 }}>
      <Grid item container xs={12} md={6} direction="column">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            minHeight: "37rem",
            borderRadius: "5px",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              backgroundImage: `url(/images/margarita.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "50%",
              height: "100%",
              width: "100%",
              transition: "0.4s ease-in-out",
              "&:hover": {
                transform: "scale(1.04)",
              },
            }}
          ></Box>
        </Box>
      </Grid>
      <Grid
        item
        container
        xs={12}
        md={6}
        spacing={2}
        sx={{ flexDirection: { xs: "column", md: "row" } }}
      >
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              minHeight: "18rem",
              borderRadius: "5px",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                backgroundImage: `url(/images/margarita.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "50%",
                minHeight: "18rem",
                width: "100%",
                transition: "0.4s ease-in-out",
                "&:hover": {
                  transform: "scale(1.04)",
                },
              }}
            ></Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              minHeight: "18rem",
              borderRadius: "5px",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                backgroundImage: `url(/images/margarita.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "50%",
                minHeight: "18rem",
                width: "100%",
                transition: "0.4s ease-in-out",
                "&:hover": {
                  transform: "scale(1.04)",
                },
              }}
            ></Box>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}
