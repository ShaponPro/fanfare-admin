import { Grid } from "@mui/material";
import TextField from "../../../../../src/components/Textfield";
import React from "react";

const ChargesComponent = () => {
    return (
        <>
            <Grid container alignItems={"baseline"}>
                <Grid width={"10%"}>Total Charges*</Grid>
                <Grid width={"90%"}>
                    <TextField></TextField>
                </Grid>
            </Grid>

            <Grid container alignItems={"baseline"}>
                <Grid width={"20%"}>Transaction ID*</Grid>
                <Grid width={"80%"}>
                    <TextField></TextField>
                </Grid>
            </Grid>
        </>
    );
};

export default ChargesComponent;
