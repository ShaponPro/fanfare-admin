import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button } from "@mui/material";

//prop types
type buttonProps = {
  label: string;
  isActive: boolean;
  filterState: Array<{ id: number; label: string; isActive: boolean }>;
  setFilterState: (fn: () => Array<any>) => void;
};

const filterButton = css`
  margin: 0px !important;
  padding: 0px !important;
  padding: 10px !important;
  color: #161f29 !important;
  background-color: #ffffff !important;
  box-shadow: inset 1px 1.5px 5px rgba(22, 31, 41, 0.1);
  margin-left: 10px !important;
  margin-top: 10px !important;
  width: 100% !important;
  font-family: "Open Sans", sans-serif !important;
  font-style: normal;
  font-weight: 400 !important;
  font-size: 14px;
  line-height: 19px;
  text-transform: capitalize !important;
  border-radius: 0px !important;
`;

const clickedFilterButton = css`
  ${filterButton};
  color: white !important;
  background-color: #57ce66 !important;
  font-weight: 700 !important;
`;

const SelectFilterButtonComponent = (props: buttonProps) => {
  const handleSelectFilter = (label: string) => {
    const updatedState = props.filterState.map(eachState => {
      if (label == "Select All") {
      }

      if (eachState.label == label) {
        return { ...eachState, isActive: true };
      } else {
        return { ...eachState, isActive: false };
      }
    });

    props.setFilterState(() => {
      return updatedState;
    });
  };

  return (
    <>
      <Button
        variant='text'
        onClick={() => {
          handleSelectFilter(props.label);
        }}
        css={props.isActive ? clickedFilterButton : filterButton}
      >
        {props.label}
      </Button>
    </>
  );
};

export default SelectFilterButtonComponent;
