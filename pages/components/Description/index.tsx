import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import style from './Description.module.css';

const theme = createTheme({
  typography: {
    fontFamily: "Source Sans Pro",
  }
})


export default function Description() {
  return (
    <ThemeProvider theme={theme}>
    <Container maxWidth="lg">
      <Box>
        <div style={{marginTop: "64px", marginBottom: "64px"}}>
          <div className={style.descriptionTitle}>Pick your Defi family and<br/> dominate Nostra City.</div>
          <div className={style.description }>
            NostraCity is a competition of Defi families that fight each other
            by driving up sales of simple NFTs of their sponsored business in
            each season lasting 3 weeks. The family who drives up the highest
            amount of sales, wins a windfall of extra $BOSS tokens. Losing
            families win the same amount of tokens they invested. All families
            will be able to keep NFTs, and use the $BOSS token to purchase their
            own DAAS nodes in the form of yield-bearing NFTs for further
            seasons.
          </div>
        </div>
      </Box>
    </Container>
    </ThemeProvider>
  );
}
