import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Store } from "../context/Store";
import { useRouter } from "next/router";

export default function CookieBanner() {
  const { state, dispatch } = useContext(Store);
  const { cookiesBool } = state;
  const router = useRouter();

  const handleAccept = () => {
    dispatch({ type: "ACCEPT_COOKIES" });
  };

  return (
    <Card
      sx={{
        minWidth: 275,
        position: "fixed",
        bottom: 0,
        display: cookiesBool ? "none" : "block",
        zIndex: 999,
      }}
    >
      <CardContent>
        <Typography color="primary.dark">
          Recipe Book uses cookies to improve your experience, according to the
          Privacy Policy. <br /> By continuing to browse you agree to these
          conditions.
        </Typography>
      </CardContent>
      <CardActions sx={{ padding: "0rem 1rem 1rem 1rem" }}>
        <Button variant="contained" onClick={handleAccept}>
          ACCEPT
        </Button>
        <Button variant="contained">PRIVACY POLICY</Button>
      </CardActions>
    </Card>
  );
}
