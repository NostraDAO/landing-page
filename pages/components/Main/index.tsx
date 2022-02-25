import React from "react";
import styles from "./Main.module.css";
import Image from "next/image";
import Logo from "../../../public/NostraCity-Logo.png";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Link from "@mui/material/Link";

const theme = createTheme({
  palette: {
    primary: {
      main: "#93100D",
    },
  },
});

export default function Main() {
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.mainContainer}>
        <div className={styles.imgMain}>
          <Image src={Logo} />
          <div className={styles.imgMainText}>
            <Button
              variant="contained"
              target="_blank"
              href="https://app.nostradao.com"
              color="primary"
              sx={{
                my: 2,
                marginLeft: "10px",
                textTransform: "uppercase",
                fontFamily: "Source Sans Pro",
                fontWeight: "bold",
                fontSize: "1.2em",
              }}
            >
              Coming Soon
            </Button>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
