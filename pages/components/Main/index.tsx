import React from "react";
import styles from "./Main.module.css";
import Image from "next/image";
import Logo from "../../../public/nostra-logo-big-white.png";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
    palette: {
        primary: {
            main: "#93100D",
    }
}})

export default function Main() {
  return (
    <ThemeProvider theme={theme}>
    <div className={styles.mainContainer}>
      <div className={styles.imgMain}>
        <Image src={Logo} widh={200} />
        <div className={styles.imgMainText}>
        <Button variant="contained" color="primary">
          Coming Soon
        </Button>
        </div>
      </div>
    </div>
    </ThemeProvider>
  );
}
