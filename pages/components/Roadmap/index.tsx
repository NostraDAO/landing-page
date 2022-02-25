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

export default function Roadmap() {
  return (
    <Timeline position="alternate" id="roadmap">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <h4>2021 - January 2022</h4>
          <div>
            <ul className={styles.liReverted}>
              <li>Start of community building</li>
              <li>Start of recruiting</li>
              <li>First draft of docs</li>
              <li>First whitelisters chosen</li>
              <li> Development Kickoff</li>
            </ul>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="success" />
        </TimelineSeparator>
        <TimelineContent>
          <h4>February 2022</h4>
          <div>
            <ul className={styles.liReverted}>
              <li> More Whitelist Spots Announced</li>
              <li> First AMA with Boss dox</li>
              <li> Marketing Kickoff</li>
              <li> Update Docs with Gameplay Mechanics</li>
              <li> Development Kickoff</li>
              <li> Core Team Dox</li>
              <li>Families Reveal</li>
              <li>Target Projects Revealed</li>
            </ul>
          </div>
        </TimelineContent>
      </TimelineItem>
        <TimelineItem>
        <TimelineSeparator>
            <TimelineDot color="secondary" />
            <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <h4>March 2022</h4>
            <div>
                <ul className={styles.liReverted}>
                    <li>Business NFTs minted</li>
                    <li>Exchange your Business NFTs for a PFP</li>
                    <li>Tokens Distributed to NFT holders</li>
                    <li>Further Marketing Efforts</li>
                    <li>Winning Family Receives Prize</li>
                    <li>Token Launch</li>
                    <li>Bonding Launch</li>
                 </ul>
             </div>
        </TimelineContent>
        </TimelineItem>
        <TimelineItem>
        <TimelineSeparator>
            <TimelineDot color="secondary" />
            <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <h4>Q2 2022</h4>
            <div>
                <ul className={styles.liReverted}>
                    <li>Code Audit</li>
                    <li>Initial Investments</li>
                    <li>Coingecko and Coinmarketcap Listing</li>
                    <li>Nodes</li>
                </ul>
            </div>
            </TimelineContent>
        </TimelineItem>       
    </Timeline>
  );
}
