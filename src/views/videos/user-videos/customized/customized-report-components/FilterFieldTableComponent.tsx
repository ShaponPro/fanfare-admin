import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Grid from "@mui/material/Grid";
import FilterTableComponent from "./FilterTableComponent";
import FieldTableComponent from "./FieldTableComponent";

const filterGrid = css`
  margin: 0px !important;
  padding: 0px !important;
  width: 20% !important;
  margin-right: 10px !important;
  @media (min-width: 820px) {
    flex-basis: 0 !important;
  }
  margin-top: 30px !important;
  height: max-content;
  @media (max-width: 820px) {
    width: 100% !important;
  }
`;

const fieldGrid = css`
  width: 80% !important;
  margin: 0px !important;
  padding: 0px !important;
  margin-top: 30px !important;
  @media (max-width: 820px) {
    width: 100% !important;
  }
`;

const parentGrid = css`
  width: 100% !important;
  margin: 0px !important;
  padding: 0px !important;
`;

const FilterFieldTableComponent = () => {
  return (
    <>
      <Grid container css={parentGrid}>
        <Grid css={filterGrid}>
          <FilterTableComponent></FilterTableComponent>
        </Grid>
        <Grid css={fieldGrid}>
          <FieldTableComponent></FieldTableComponent>
        </Grid>
      </Grid>
    </>
  );
};

export default FilterFieldTableComponent;
