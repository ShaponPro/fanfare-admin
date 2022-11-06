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
  color: #161f29 !important;
  background: rgba(22, 31, 41, 0.07);
  margin-bottom: 2px !important;
  margin-right: 2px !important;
  width: 136px !important;
  height: 36px;
  font-family: "Open Sans", sans-serif !important;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-transform: capitalize !important;
  border-radius: 0px !important;
  justify-content: flex-start;
`;

const filterBodyButton = css`
  ${filterButton};
  padding-left: 10px !important;
  &:nth-of-type(odd) {
    background: rgba(22, 31, 41, 0.03);
  }
  &:nth-of-type(even) {
    background: rgba(22, 31, 41, 0.07);
  }
`;

const FieldTableButtonComponent = (props: buttonProps) => {
  return (
    <>
      <Button variant='text' css={filterBodyButton} disabled>
        {props.label}
      </Button>
    </>
  );
};

export default FieldTableButtonComponent;
