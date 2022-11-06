import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Grid } from "@mui/material";
import ButtonComp from "../../../../../src/components/ButtonComponent";

const buttonGrid = css`
    // padding: 25px 20px!important;
`;

const GenerateButtonComponent = () => {
    return (
        <>
            <Grid css={buttonGrid}>
                <ButtonComp type="apply" title="Generate Code"/>
            </Grid>
        </>
    );
};

export default GenerateButtonComponent;
