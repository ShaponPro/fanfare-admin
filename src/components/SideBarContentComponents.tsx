import * as React from "react";
import { useState } from "react";

import Link from "next/link";

import { StepLabel } from "@mui/material";
import Box from "@mui/material/Box";
import Step from "@mui/material/Step";
import Stepper from "@mui/material/Stepper";

// interface Props {
//   item: NavGroup
//   navHover: boolean
//   parent?: NavGroup

//   navVisible?: boolean
//   groupActive: string[]
//   collapsedNavWidth: number
//   currentActiveGroup: string[]
//   navigationBorderWidth: number
//   isSubToSub?: NavGroup | undefined

// steps label
const steps = [
  {
    label: "User Video",
  },
  {
    label: " Brand Video ",
  },
  {
    label: "Tutorial",
  },
  {
    label: "Youtube Crawler",
  },
];

type Props = {
  children: React.ReactNode;
};
const SideBarContentComponents = (props: Props) => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const [isHover, setIsHover] = useState<boolean>(false);

  // const { item } = props

  // hover effect

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <Box
      style={{
        position: "relative",
        height: "1030px",
        width: "185px",
        marginTop: "0 !important",
        background: "#FFFFFF",
        boxShadow: "0px 5px 10px rgba(22, 31, 41, 0.1)",
        paddingRight: "1px",
      }}
    >
      {/* <VerticalNavItems {...props} navVisible={navVisible} verticalNavItems={item} /> */}
      <ul
        style={{
          paddingTop: "25px",
          fontWeight: 700,
          fontSize: "16px",
        }}
      >
        Videos
        <Link href='/videos/analytics'>
          <li
            style={{
              backgroundColor: isHover ? "#F3F3F4" : "#FFFFFF",

              cursor: "pointer",
              paddingTop: "30px",
              fontWeight: 400,

              paddingLeft: "5px",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Video Analytics
          </li>
        </Link>
        <Link href='/videos'>
          <li
            style={{
              fontWeight: 400,
              paddingBottom: "10px",

              paddingTop: "15px",
              color: "#161F29",
            }}
          >
            List Video
          </li>
        </Link>
        <Box>
          <Stepper activeStep={activeStep} orientation='vertical'>
            <Link href='/videos'>
              <Step
                sx={{ margin: "0px", cursor: "pointer" }}

                // sx={{
                //   "& .MuiStepLabel-root .Mui-completed": {
                //     color: "#161F29",
                //     margin: "0 !important",

                //     // circle color (COMPLETED)
                //   },
                //   "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel": {
                //     color: "#161F29",
                //     fontSize: "1px !important",
                //     margin: "0 !important",

                //     // Just text label  (COMPLETED)
                //   },
                //   "& .MuiStepLabel-root .Mui-active": {
                //     color: "#161F29",
                //     margin: "0 !important",

                //     // circle color (ACTIVE)
                //   },
                //   "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel": {
                //     color: "red !important",
                //     margin: "0 !important",

                //     // Just text label (ACTIVE)
                //   },

                //   "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
                //     fill: "", // circle's number (ACTIVE)
                //   },
                // }}
              >
                <StepLabel>User Video</StepLabel>
              </Step>
            </Link>
            <Link href='/videos/list-videos/brand-videos'>
              <StepLabel>
                <Step sx={{ margin: "0px", cursor: "pointer" }}>
                  <StepLabel>Brand Videos</StepLabel>
                </Step>
              </StepLabel>
            </Link>
            <Link href='/videos/list-videos/tutorial'>
              <Step sx={{ margin: "0px", cursor: "pointer" }}>
                <StepLabel>Tutorial</StepLabel>
              </Step>
            </Link>
            <Link href='/videos/youtube-crawler'>
              <Step sx={{ margin: "0px", cursor: "pointer" }}>
                <StepLabel>Youtube Crawler</StepLabel>
              </Step>
            </Link>

            {/* <Step>
              <StepLabel>Register your email</StepLabel>
            </Step>
            <Step>
              <StepLabel>Click on Finish</StepLabel>
            </Step> */}

            {/* {steps.map(step => (
              <Step
                key={step.label}
                sx={{
                  "& .MuiStepLabel-root .Mui-completed": {
                    color: "#161F29",

                    // circle color (COMPLETED)
                  },
                  "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel": {
                    color: "#161F29",
                    fontSize: "1px !important",

                    // Just text label  (COMPLETED)
                  },
                  "& .MuiStepLabel-root .Mui-active": {
                    color: "#161F29", // circle color (ACTIVE)
                  },
                  "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel": {
                    color: "rgba(22, 31, 41, 0.5) !important", // Just text label (ACTIVE)
                  },import Tutorial from './../pages/videos/upload-videos/Tutorial';
import YoutubeCrawler from './../pages/videos/youtube-crawler/index';

                  "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
                    fill: "", // circle's number (ACTIVE)
                  },
                }}
              >
                <StepLabel style={{ color: "#161F29", height: "15px" }}>{step.label}</StepLabel>
              </Step>
            ))} */}
          </Stepper>
        </Box>
        <Link href='/videos/upload-videos'>
          <li
            style={{
              cursor: "pointer",
              fontWeight: 400,
              paddingBottom: "18px",
              paddingTop: "14px",
              color: "#161F29",
            }}
          >
            Upload a video
          </li>
        </Link>
        <Link href='/videos/download-code'>
          <li
            style={{
              fontWeight: 400,
              paddingBottom: "16px",
              cursor: "pointer",
              color: "#161F29",
            }}
          >
            Download code
          </li>
        </Link>
        <Link href='/videos/content-restrictions'>
          <li
            style={{
              fontWeight: 400,
              paddingBottom: "16px",
              cursor: "pointer",
              color: "#161F29",
            }}
          >
            Content Restriction
          </li>
        </Link>
      </ul>
      {props.children}
    </Box>
  );
};

export default SideBarContentComponents;
