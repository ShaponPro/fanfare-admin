import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Grid } from "@mui/material";
import ButtonComp from "../../../../../src/components/ButtonComponent";

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
                    <ButtonComp type="action" title="View" />
                </Grid>
                <Grid>
                    <ButtonComp type="action" title="Delete" />
                </Grid>
            </Grid>
        </>
    );
};

export default ButtonComponent;
