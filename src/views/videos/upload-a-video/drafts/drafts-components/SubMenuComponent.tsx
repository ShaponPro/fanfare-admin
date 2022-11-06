import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Grid } from "@mui/material";
import SubMenuButtonComponent from "./SubMenuButtonComponent";

const innerGrid1 = css`
    margin: 0 !important;
    width: 100% !important;
    height: 66px;
    background-color: #ecf8ff;
    padding: 13px 20px;
    box-shadow: 1px 2px 3px rgba(22, 31, 41, 0.2);
`;

//prop types
type buttonProps = {
    isDraft: boolean;
    setIsDraft: (fn: (isDraft: boolean) => boolean) => void;
};

const SubMenuComponent = (props: buttonProps) => {
    return (
        <>
            <Grid container spacing={2} css={innerGrid1}>
                <SubMenuButtonComponent
                    isDraft={props.isDraft}
                    setIsDraft={props.setIsDraft}
                ></SubMenuButtonComponent>
            </Grid>
        </>
    );
};

export default SubMenuComponent;
