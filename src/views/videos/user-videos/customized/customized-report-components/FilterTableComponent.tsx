import React, { useState } from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button, Grid } from "@mui/material";
import FilterTableButtonComponent from "./FilterTableButtonComponent";

const buttonGrid = css`
  width: 100% !important;
  padding: 0px !important;
  margin: 0px !important;
`;

const filterTableButton = css`
  width: 100% !important;
  margin: 0px !important;
  padding: 0px !important;
  padding: 10px !important;
  color: #161f29 !important;
  background: rgba(22, 31, 41, 0.07);
  margin-bottom: 2px !important;
  margin-right: 2px !important;
  font-family: "Open Sans", sans-serif !important;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-transform: capitalize !important;
  border-radius: 0px !important;
  white-space: nowrap !important;
`;

const filterTableHeaderButton = css`
  ${filterTableButton};
  background: rgba(22, 31, 41, 0.07) !important;
  font-weight: 700 !important;
`;
const filterTableHeaderGrid = css`
  padding: 0px !important;
  margin: 0px !important;
`;

const filterTableBodyGrid = css`
  padding: 0px !important;
  margin: 0px !important;
`;

const filterTableBodyButtonGrid = css`
  ${buttonGrid};
  margin-bottom: 2px !important;
  &:nth-of-type(odd) {
    background: rgba(22, 31, 41, 0.03);
  }
  &:nth-of-type(even) {
    background: rgba(22, 31, 41, 0.07);
  }
`;

const FilterTableComponent = () => {
  const [selectedFiltersState, setSelectedFiltersState] = useState([
    { id: 0, label: "Upload Period" },
    { id: 1, label: "Uploaded Country" },
    { id: 2, label: "User ID/Name" },
    { id: 3, label: "Video Length Group" },
    { id: 4, label: "Engagement" },
    { id: 5, label: "AD & Monetization" },
  ]);

  return (
    <>
      {/* Selected Filters header Grid */}

      <Grid css={filterTableHeaderGrid}>
        <Grid css={buttonGrid}>
          <Button variant='text' css={filterTableHeaderButton} disabled>
            Selected Filters
          </Button>
        </Grid>

        <Grid css={buttonGrid}>
          <Button variant='text' css={filterTableHeaderButton} disabled>
            -
          </Button>
        </Grid>
      </Grid>

      {/* Selected Filters Data Grid */}
      <Grid css={filterTableBodyGrid}>
        {selectedFiltersState.map(eachSelectedFiltersState => {
          return (
            <Grid key={eachSelectedFiltersState.id} css={filterTableBodyButtonGrid}>
              <FilterTableButtonComponent
                label={eachSelectedFiltersState.label}
                selectedFiltersState={selectedFiltersState}
                setSelectedFiltersState={setSelectedFiltersState}
              ></FilterTableButtonComponent>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default FilterTableComponent;
