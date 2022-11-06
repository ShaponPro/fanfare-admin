import { Grid } from "@mui/material";
import React from "react";
import TextField from "../../../../../src/components/Textfield";
import GenerateButtonComponent from "./GenerateButton";

const GenerateCodeComponent = () => {
    return (
        <>
            <Grid>
                <Grid>Code*</Grid>
                <Grid>
                    <TextField></TextField>
                </Grid>
            </Grid>

            <GenerateButtonComponent></GenerateButtonComponent>
        </>
    );
};

export default GenerateCodeComponent;
