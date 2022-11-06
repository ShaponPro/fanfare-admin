import React, { useState } from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Grid from "@mui/material/Grid";
import SelectFilterButtonComponent from "./SelectFilterButtonComponent";

const text1 = css`
  color: #000000;
  font-family: "Open Sans", sans-serif !important;
  font-style: normal !important;
  font-weight: 600 !important;
  font-size: 14px;
  line-height: 19px;
  margin-bottom: 10px;
`;

const fullButtonGrid = css`
  width: 100%important;
  padding: 0px !important;
  margin: 0px !important;
  background-color: #f3f3f4;
  padding-top: 10px !important;
  padding-left: 10px !important;
  padding-right: 20px !important;
  padding-bottom: 20px !important;
  border-radius: 5px;
`;

const buttonGrid = css`
  padding: 0px !important;
  margin: 0px !important;
  width: 244.17px !important;
`;

const filterGrid = css`
  width: 100%important;
`;

const SelectFilterComponent = () => {
  const [filterState, setFilterState] = useState([
    {
      id: 0,
      label: "Select All",
      isActive: false,
    },
    {
      id: 1,
      label: "Upload Period",
      isActive: false,
    },
    {
      id: 2,
      label: "Uploaded Country",
      isActive: false,
    },
    {
      id: 3,
      label: "User ID/Name",
      isActive: false,
    },
    {
      id: 4,
      label: "Video Length Group",
      isActive: false,
    },
    {
      id: 5,
      label: "View Percentage",
      isActive: false,
    },
    {
      id: 6,
      label: "Engagement",
      isActive: false,
    },
    {
      id: 7,
      label: "AD & Monetization",
      isActive: false,
    },
    {
      id: 8,
      label: "Video Contest",
      isActive: false,
    },
    {
      id: 9,
      label: "Right Selling Status",
      isActive: false,
    },
    {
      id: 10,
      label: "Current Status",
      isActive: false,
    },
    {
      id: 11,
      label: "Music Creator",
      isActive: false,
    },
  ]);

  return (
    <>
      <Grid container item lg={12} md={12} sm={12} xs={12} css={filterGrid}>
        <Grid container css={text1}>
          Select Filters
        </Grid>

        <Grid container item lg={12} md={12} sm={12} xs={12} css={fullButtonGrid}>
          {filterState.map(eachFilterState => {
            const label = eachFilterState.label;
            const isActive = eachFilterState.isActive;

            return (
              <Grid container item lg={2} md={4} sm={12} xs={12} key={eachFilterState.id} css={buttonGrid}>
                <SelectFilterButtonComponent
                  label={label}
                  isActive={isActive}
                  filterState={filterState}
                  setFilterState={setFilterState}
                ></SelectFilterButtonComponent>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
};

export default SelectFilterComponent;
