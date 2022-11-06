import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button } from "@mui/material";

//prop types
type buttonProps = {
    isDraft: boolean;
    setIsDraft: (fn: (isDraft: boolean) => boolean) => void;
};

const customizedButton = css`
    color: #161f29 !important;
    background-color: #ffffff80 !important;
    font-weight: 400 !important;
    border: 1px solid rgba(22, 31, 41, 0.5) !important;
    border-radius: 20px !important;
    padding: 10px 20px !important;
    width: 200px;
    height: 40px;
    font-family: "Open Sans", sans-serif !important;
    font-style: normal;
    font-size: 16px;
    line-height: 20px;
    text-transform: capitalize !important;
`;

const clickedCustomizedButton = css`
    ${customizedButton};
    color: white !important;
    background-color: #161f29 !important;
    font-weight: 700 !important;
`;

const SubMenuButtonComponent = (props: buttonProps) => {
    const handleCustomized = () => {
        props.setIsDraft(() => {
            return !props.isDraft;
        });
    };

    return (
        <>
            <Button
                variant="outlined"
                onClick={handleCustomized}
                css={props.isDraft ? clickedCustomizedButton : customizedButton}
            >
                Drafts
            </Button>
        </>
    );
};

export default SubMenuButtonComponent;
