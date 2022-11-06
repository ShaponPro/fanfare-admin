import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Grid } from "@mui/material";
import SelectFilterComponent from "./SelectFilterComponent";
import SelectFieldsComponent from "./SelectFieldsComponent";
import FilterFieldTableComponent from "./FilterFieldTableComponent";
import FooterButtonComponent from "./FooterButtonComponent";

const innerGrid2 = css`
  margin: 0 !important;
  margin-top: 20px !important;
  width: 100% !important;
`;

const FilterComponent = () => {
  return (
    <>
      <Grid container css={innerGrid2}>
        <SelectFilterComponent></SelectFilterComponent>
        <SelectFieldsComponent></SelectFieldsComponent>
        <FilterFieldTableComponent></FilterFieldTableComponent>
        <FooterButtonComponent></FooterButtonComponent>
      </Grid>
    </>
  );
};

export default FilterComponent;
