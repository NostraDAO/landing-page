import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Image from "next/image";
import Logo from "../../../public/NostraCity-Logo.png";
import styles from "./Footer.module.css";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import DiscordIcon from "../../../public/icons/discord-line.png";
import TwitterIcon from "../../../public/icons/twitter-line.png";
import GithubIcon from "../../../public/icons/github-line.png";
import MediumIcon from "../../../public/icons/medium-line.png";
import YoutubeIcon from "../../../public/icons/youtube-line.png";
import { Scrollchor } from "react-scrollchor";


export default function Footer() {
  return (
    <ThemeProvider
      theme={createTheme({
        palette: { primary: { main: "#161616" } },
        typography: {
          fontFamily: "Source Sans Pro",
        },
      })}
    >
      <footer>
        <div className={styles.container}>
          <Image src={Logo} width={150} height={100}  />
          <Stack spacing={2} direction="row">
            <Link
              underline="none"
              href="/"
              sx={{
                fontFamily: "Source Sans Pro",
                fontSize: "1em",
                fontWeight: "bold",
              }}
            >
              Home
            </Link>
            <Link
              underline="none"
              sx={{
                fontFamily: "Source Sans Pro",
                fontSize: "1em",
                fontWeight: "bold",
              }}
            >
             <Scrollchor to="#benefits">Benefits</Scrollchor>
            </Link>
            <Link
              underline="none"
              sx={{
                fontFamily: "Source Sans Pro",
                fontSize: "1em",
                fontWeight: "bold",
              }}
            >
            <Scrollchor to="#roadmap">Roadmap</Scrollchor>
            </Link>
            <Link
              underline="none"
              href="/"
              sx={{
                fontFamily: "Source Sans Pro",
                fontSize: "1em",
                fontWeight: "bold",
              }}
            >
              <Scrollchor to="#team">Team</Scrollchor>
            </Link>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Link
            href="http://discord.gg/nostracityhq"
              underline="none"
              sx={{
                fontFamily: "Source Sans Pro",
                fontSize: "1em",
                fontWeight: "bold",
              }}
            >
            <a><Image src={DiscordIcon}/></a>
            </Link>
            <Link
            href="https://twitter.com/Nostra_City"
              underline="none"
              sx={{
                fontFamily: "Source Sans Pro",
                fontSize: "1em",
                fontWeight: "bold",
              }}
            >
              <a><Image src={TwitterIcon}/></a>
            </Link>
            <Link
            href="https://github.com/NostraDAO"
              underline="none"
              sx={{
                fontFamily: "Source Sans Pro",
                fontSize: "1em",
                fontWeight: "bold",
              }}
            >
              <a><Image src={GithubIcon}/></a>
            </Link>
            <Link
            href="https://medium.com/@nostracity"
              underline="none"
              sx={{
                fontFamily: "Source Sans Pro",
                fontSize: "1em",
                fontWeight: "bold",
              }}
            >
              <a><Image src={MediumIcon}/></a>
            </Link>
            <Link
            href="https://bit.ly/3GPBHxl"
            underline="none"
              sx={{
                fontFamily: "Source Sans Pro",
                fontSize: "1em",
                fontWeight: "bold",
              }}
            >
              <a><Image src={YoutubeIcon}/></a>
            </Link>
          </Stack>
        </div>
      </footer>
    </ThemeProvider>
  );
}
