import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button } from "@mui/material";

//prop types
type buttonProps = {
  label: string;
  isActive: boolean;
  fieldsState: Array<{
    id: number;
    label: string;
    isActive: boolean;
    childData: Array<any>;
  }>;
  setFieldsState: (fn: () => Array<any>) => void;
};

const fieldsButton = css`
  margin: 0px !important;
  padding: 0px !important;
  padding: 10px !important;
  color: #161f29 !important;
  background-color: #f3f3f4 !important;
  width: 100% !important;
  font-family: "Open Sans", sans-serif !important;
  font-style: normal;
  font-weight: 400 !important;
  font-size: 14px;
  line-height: 19px;
  text-transform: capitalize !important;
  border-radius: 5px !important;
  margin-right: 5px !important;
`;

const clickedFieldsButton = css`
  ${fieldsButton};
  color: #009efa !important;
  background-color: #ecf8ff !important;
  border: 0.5px solid #161f29;
  font-weight: 700 !important;
`;

const SelectFieldsButtonComponent = (props: buttonProps) => {
  const handleSelectFields = (label: string) => {
    const updatedState = props.fieldsState.map(eachState => {
      if (label == "Select All") {
      }

      if (eachState.label == label) {
        return { ...eachState, isActive: true };
      } else {
        return { ...eachState, isActive: false };
      }
    });

    props.setFieldsState(() => {
      return updatedState;
    });
  };

  return (
    <>
      <Button
        variant='text'
        onClick={() => {
          handleSelectFields(props.label);
        }}
        css={props.isActive ? clickedFieldsButton : fieldsButton}
      >
        {props.label}
      </Button>
    </>
  );
};

export default SelectFieldsButtonComponent;
