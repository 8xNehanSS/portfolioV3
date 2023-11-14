import React from "react";
import { Button } from "@mui/material";

function CVButton() {
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        marginTop: "50px",
        marginBottom: "50px",
      }}
    >
      <Button
        style={{
          backgroundColor: "#3856FF",
        }}
        variant="contained"
        href="../../SEG12_20220071.pdf"
      >
        Download CV
      </Button>
    </footer>
  );
}

export default CVButton;
