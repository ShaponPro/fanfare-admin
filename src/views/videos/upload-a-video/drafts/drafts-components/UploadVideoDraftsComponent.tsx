import React, { useState } from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Box } from "@mui/material";
import SubMenuComponent from "./SubMenuComponent";
import DraftComponent from "./DraftComponent";

const outerBox = css`
    background-color: #ffffff;
    width: 100% !important;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 2px 5px 20px rgba(22, 31, 41, 0.1);
    margin: 0;
`;

const UploadVideoDraftsComponent = () => {
    const [isDraft, setIsDraft] = useState(false);

    return (
        <>
            <Box sx={{ flexGrow: 1 }} css={outerBox}>
                {/* <SubMenuComponent
                    isDraft={isDraft}
                    setIsDraft={setIsDraft}
                ></SubMenuComponent> */}

                <DraftComponent></DraftComponent>
            </Box>
        </>
    );
};

export default UploadVideoDraftsComponent;
