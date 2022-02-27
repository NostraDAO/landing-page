import React from "react";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import style from "./Roadmap.module.css";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import styles from "./Roadmap.module.css";
import CheckedIcon from "../../../public/icons/checkbox-line.png"
import UncheckedIcon from "../../../public/icons/checkbox-blank-line.png"
import Image from "next/image"
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Roadmap() {
  return (
    <>
    <Container maxWidth="lg" sx={{paddingTop: "64px"}} id="roadmap">
    <Typography variant="h3" gutterBottom textAlign="center">Roadmap</Typography>
    <Timeline position="alternate"  sx={{paddingTop: "78px"}}>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{backgroundColor: "#93100D"}} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <h3 style={{textTransform: "uppercase"}}>2021 - January 2022</h3>
          <div>
            <ul className={styles.liReverted}>
              <li className={styles.liClass}><span ><Image src={CheckedIcon} /></span>Start of community building</li>
              <li className={styles.liClass}><span><Image src={CheckedIcon} /></span>Start of recruiting</li>
              <li className={styles.liClass}><span><Image src={CheckedIcon} /></span>First draft of docs</li>
              <li className={styles.liClass}><span><Image src={CheckedIcon} /></span>First whitelisters chosen</li>
              <li className={styles.liClass}><span><Image src={CheckedIcon} /></span>Development Kickoff</li>
            </ul>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{backgroundColor: 'black'}} />
        </TimelineSeparator>
        <TimelineContent>
          <h3 style={{textTransform: "uppercase"}}>February 2022</h3>
          <div>
            <ul className={styles.liReverted}>
              <li className={styles.liClass}>More Whitelist Spots Announced<span><Image src={CheckedIcon} /></span></li>
              <li className={styles.liClass}>First AMA with Boss dox<span><Image src={CheckedIcon} /></span></li>
              <li className={styles.liClass}>Marketing Kickoff<span><Image src={CheckedIcon} /></span></li>
              <li className={styles.liClass}>Update Docs with Gameplay Mechanics<span><Image src={CheckedIcon} /></span></li>
              <li className={styles.liClass}>Core Team Dox<span><Image src={UncheckedIcon} /></span></li>
              <li className={styles.liClass}>Families Reveal<span><Image src={UncheckedIcon} /></span></li>
              <li className={styles.liClass}>Target Projects Revealed<span><Image src={UncheckedIcon} /></span></li>
            </ul>
          </div>
        </TimelineContent>
      </TimelineItem>
        <TimelineItem>
        <TimelineSeparator>
            <TimelineDot sx={{backgroundColor: "#93100D" }} />
            <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <h3 style={{textTransform: "uppercase"}}>March 2022</h3>
            <div>
                <ul className={styles.liReverted}>
                    <li className={styles.liClass}><span><Image src={UncheckedIcon} /></span>Business NFTs minted</li>
                    <li className={styles.liClass}><span><Image src={UncheckedIcon} /></span>Exchange your Business NFTs for a PFP</li>
                    <li className={styles.liClass}><span><Image src={UncheckedIcon} /></span>Tokens Distributed to NFT holders</li>
                    <li className={styles.liClass}><span><Image src={UncheckedIcon} /></span>Further Marketing Efforts</li>
                    <li className={styles.liClass}><span><Image src={UncheckedIcon} /></span>Winning Family Receives Prize</li>
                    <li className={styles.liClass}><span><Image src={UncheckedIcon} /></span>Token Launch</li>
                    <li className={styles.liClass}><span><Image src={UncheckedIcon} /></span>Bonding Launch</li>
                 </ul>
             </div>
        </TimelineContent>
        </TimelineItem>
        <TimelineItem>
        <TimelineSeparator>
            <TimelineDot sx={{backgroundColor: "black" }} />
            <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <h3 style={{textTransform: "uppercase"}}>Q2 2022</h3>
            <div>
                <ul className={styles.liReverted}>
                    <li className={styles.liClass}>Code Audit<span><Image src={UncheckedIcon} /></span></li>
                    <li className={styles.liClass}>Initial Investments<span><Image src={UncheckedIcon} /></span></li>
                    <li className={styles.liClass}>Coingecko and Coinmarketcap Listing<span><Image src={UncheckedIcon} /></span></li>
                    <li className={styles.liClass}>Nodes<span><Image src={UncheckedIcon} /></span></li>
                </ul>
            </div>
            </TimelineContent>
        </TimelineItem>       
    </Timeline>
    </ Container>
    </>
  );
}
