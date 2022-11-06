import { Accordion, AccordionSummary, FormControl, Radio } from "@mui/material";
import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FilterComponent } from "src/components/FilterComponent";
import SearchComponent from "src/components/SearchComponent";
import TextField from "../../../../../src/components/Textfield";

import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useState } from "react";

// ** MUI Imports
import { InputBase, Box, InputAdornment } from "@mui/material";
import Select from "@mui/material/Select";

// ** Icons Imports
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import AuthorizationComponent from "./AuthorizationComponent";
import ContentSpecificationComponent from "./ContentSpecificationComponent";
import RestrictionComponent from "./RestrictionComponent";
import ChargesComponent from "./ChargesComponent";
import GenerateCodeComponent from "./GenerateCodeComponent";
import FooterButtons from "./FooterButtons";

/* Style Start */
const itemStyle = {
    borderRadius: "0",
    padding: "5px",
    height: "36px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    boxShadow: " inset 1px 1.5px 5px rgba(22, 31, 41, 0.2)",
    justifyContent: "space-between",
    width: "160px",

    //border: '2px solid red'
};

const typographyStyle = {
    fontSize: "11px",
    width: "150px",
    color: "black",
};

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
}));

const StyledGrid = styled(Grid)({
    display: "flex",
    alignItems: "center",

    //border: '2px solid red',
    margin: "10px",
});

const userVideos = {
    userName: "",
    uploadedCountry: "",
    videoContest: "",
    musicCreator: "",
};

const radioBtnContainerStyle = {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    transition: ".15s ease-in-out",
    margin: "0px 0px 0px 10px",
    fontSize: "12px",

    //border: '2px solid red'
};

const StyledSelect = styled(Select)({
    borderRadius: "0px",
    background: "white",
    height: "36px",
    boxShadow: "inset 1px 1.5px 5px rgba(22, 31, 41, 0.2)",
    width: "160px",

    //border: '2px solid black'
});
//**props

type props = {
    title: string;

    // userName: string
    // fields: object[];
    // onChange: (fields: object[]) => void;
    // style: React.CSSProperties;
};

const accordionStyle = css`
    margin-bottom: 20px !important;
    width: 100% !important;
    background-color: #ecf8ff;
    box-shadow: 1px 2px 3px rgba(22, 31, 41, 0.2);
`;

const DownloadCodeGenerateCode = () => {
    const [videoState, setVideoState] = useState<object>(userVideos);

    return (
        <>
            <Grid>
                <Grid container>
                    <Grid container alignItems={"baseline"}>
                        <Grid width={"10%"}>Total Video*</Grid>
                        <Grid width={"90%"}>
                            <TextField></TextField>
                        </Grid>
                    </Grid>

                    <Grid container alignItems={"baseline"}>
                        <Grid width={"20%"}>Download Limit/Video*</Grid>
                        <Grid width={"80%"}>
                            <TextField></TextField>
                        </Grid>
                    </Grid>

                    <Grid container alignItems={"baseline"}>
                        <Grid>Code Expiry Date*</Grid>
                        <Grid>
                            <StyledGrid>
                                <FormControl
                                    sx={{ minWidth: 120 }}
                                    size="small"
                                >
                                    <StyledSelect>
                                        <label style={radioBtnContainerStyle}>
                                            Today
                                        </label>
                                        <label style={radioBtnContainerStyle}>
                                            Last 7 Days
                                        </label>
                                        <label style={radioBtnContainerStyle}>
                                            Last 15 Days
                                        </label>
                                        <label style={radioBtnContainerStyle}>
                                            Last 30 Days
                                        </label>
                                        <label style={radioBtnContainerStyle}>
                                            Last 60 Days
                                        </label>
                                        <label style={radioBtnContainerStyle}>
                                            Last 90 Days
                                        </label>

                                        <Grid
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                            }}
                                        >
                                            <label
                                                style={radioBtnContainerStyle}
                                            >
                                                Custom Range
                                            </label>
                                            <Radio />
                                        </Grid>
                                    </StyledSelect>
                                </FormControl>
                            </StyledGrid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid>
                    <div>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                                css={accordionStyle}
                            >
                                <Typography>Authorization</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <AuthorizationComponent></AuthorizationComponent>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                                css={accordionStyle}
                            >
                                <Typography>Content Specification</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <ContentSpecificationComponent></ContentSpecificationComponent>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                                css={accordionStyle}
                            >
                                <Typography>Restriction</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <RestrictionComponent></RestrictionComponent>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                                css={accordionStyle}
                            >
                                <Typography>Charges</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <ChargesComponent></ChargesComponent>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </Grid>

                <Grid>
                    <GenerateCodeComponent></GenerateCodeComponent>
                </Grid>

                <Grid>
                    <FooterButtons></FooterButtons>
                </Grid>
            </Grid>
        </>
    );
};

export default DownloadCodeGenerateCode;
