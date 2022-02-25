import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Image from "next/image";
import Bob from "../../../public/Bobby-Mafioso.jpeg";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import style from "./Team.module.css";

const theme = createTheme({
  typography: {
    fontFamily: "Source Sans Pro",
  },
});

export default function Team() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
          <Box>
            <div className={style.teamContainer}>
              <Stack
                spacing={6}
                direction="row"
                justifyContent="center"
                sx={{ paddingTop: "24px", paddingBottom: "24px" }}
              >
                <div>
                  {" "}
                  <Image
                    src={Bob}
                    alt="Bobby Mafioso"
                    width={200}
                    height={200}
                  />
                </div>
                <div>
                  {" "}
                  <Image
                    src={Bob}
                    alt="Bobby Mafioso"
                    width={200}
                    height={200}
                  />
                </div>
                <div>
                  {" "}
                  <Image
                    src={Bob}
                    alt="Bobby Mafioso"
                    width={200}
                    height={200}
                  />{" "}
                </div>
                <div>
                  {" "}
                  <Image
                    src={Bob}
                    alt="Bobby Mafioso"
                    width={200}
                    height={200}
                  />{" "}
                </div>
              </Stack>

              <div className={style.teamTitle}>Core Famiglia</div>
              <div className={style.teamDescription}>
                Our superstar core team is comprised of 2 developers and 2
                marketing/ comms professionals. Our goal is simple: to create a
                fun protocol that we would love to use ourselves. We also have a
                team of advisors in the following areas: Legal, UX, Marketing,
                Investing. We will reveal our identities and more details on
                advisors throughout the pre-launch phase.
              </div>
            </div>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}
