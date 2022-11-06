import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Grid } from "@mui/material";
import ButtonComp from "../../../../../src/components/ButtonComponent";

const buttonGrid = css`
    margin-top: 10px !important;
    margin-right: 10px !important;
`;

const FooterButtons = () => {
    return (
        <>
            <Grid container css={buttonGrid}>
                <Grid>
                    <ButtonComp type="cancel" title="View Contract" />
                </Grid>

                <Grid>
                    <ButtonComp type="cancel" title="Save Only" />
                </Grid>

                <Grid>
                    <ButtonComp type="cancel" title="Save & Sent" />
                </Grid>
            </Grid>
        </>
    );
};

export default FooterButtons;
