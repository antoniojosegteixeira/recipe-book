import React from "react";
import Link from "@mui/material/Link";

const defaultSx = {
  color: "primary.dark",
  cursor: "pointer",
  textDecoration: "none",
  fontFamily: "Lora",
  fontWeight: "bold",
  "&:hover": {
    color: "primary.main",
  },
};

export default function MyLink({ children, sx }) {
  return <Link sx={{ ...defaultSx, ...sx }}>{children}</Link>;
}
