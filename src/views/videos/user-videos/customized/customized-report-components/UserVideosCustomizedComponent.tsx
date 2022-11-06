import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Box from "@mui/material/Box";
import FilterComponent from "./FilterComponent";

const outerBox = css`
  background-color: #ffffff;
  width: 100% !important;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 2px 5px 20px rgba(22, 31, 41, 0.1);
  margin: 0;
`;

const UserVideosCustomizedComponent = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }} css={outerBox}>
        <FilterComponent></FilterComponent>
      </Box>
    </>
  );
};

export default UserVideosCustomizedComponent;
