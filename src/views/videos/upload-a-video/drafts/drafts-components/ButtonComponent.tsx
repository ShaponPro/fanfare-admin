import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Grid } from "@mui/material";
import ButtonComp from "./ButtonComponentCopy";

const buttonGrid = css`
    display: flex;
    flex-direction: row !important;
    margin-right: 5px !important;
`;

const ButtonComponent = () => {
    return (
        <>
            <Grid css={buttonGrid}>
                <Grid>
                    <ButtonComp type="action" title="Edit" />
                </Grid>
                <Grid>
                    <ButtonComp type="action" title="Delete" />
                </Grid>
            </Grid>
        </>
    );
};

export default ButtonComponent;
