import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
    typography: {
        fontFamily: "Source Sans Pro"
    }
})

export default function Benefits() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{padding: '5em'}}>
        <Box>
          <Stack direction="row" spacing={2}>
            <Card sx={{ maxWidth: 375 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: '2.5em', fontWeight: "bold", mb: 2 }}
                  color="text.primary"
                  gutterBottom
                >
                  Community-led investments.
                </Typography>
                <Typography sx={{ mb: 1.5, fontSize: '1.1em', fontWeight: "bold" }} color="text.secondary">
                  By purchasing NFTs in a business within NostraCity, you will
                  join a family of friendly Defi degens.Together, you will band
                  together to collect as many NFTs as possible, raising your
                  chances of collecting all bribes in the city.
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 375, backgroundColor: "#93100D" }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: '2.5em', fontWeight: "bold", mb: 2, color:"white" }}
                  color="text.primary"
                  gutterBottom
                >
                  Sustainable APRs
                </Typography>
                <Typography sx={{fontSize: '1.1em', fontWeight: "bold",  mb: 1.5, color: "white" }} color="text.secondary">
                  The value of our token comes from the treasury investments,
                  allowing us to pay out a generous yet sustainable APR for
                  longer.
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{ maxWidth: 375 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: '2.5em', fontWeight: "bold", mb: 2 }}
                  color="text.primary"
                  gutterBottom
                >
                  Fully Transparent
                </Typography>
                <Typography sx={{ fontSize: '1.1em', fontWeight: "bold", mb: 1.5 }} color="text.secondary">
                  Team Doxxing, third party reviews and open code area already
                  under way. Check our weekly AMA on Wednesday at 8pm UTC{" "}
                  <Link href="#" >here</Link>.
                </Typography>
              </CardContent>
            </Card>
          </Stack>
        </Box>
      </Container>
        </ThemeProvider>
    </>
  );
}
