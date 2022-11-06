import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button } from "@mui/material";

//prop types
type buttonProps = {
  label: string;
  selectedFiltersState: Array<{ id: number; label: string }>;
  setSelectedFiltersState: (fn: () => Array<any>) => void;
};

const filterButton = css`
  margin: 0px !important;
  padding: 0px !important;
  padding: 10px !important;
  color: #161f29 !important;
  margin-right: 2px !important;
  font-family: "Open Sans", sans-serif !important;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-transform: capitalize !important;
  border-radius: 0px !important;
  justify-content: flex-start;
  white-space: nowrap !important;
`;

const FilterTableButtonComponent = (props: buttonProps) => {
  return (
    <>
      <Button variant='text' css={filterButton} disabled>
        {props.label}
      </Button>
    </>
  );
};

export default FilterTableButtonComponent;
