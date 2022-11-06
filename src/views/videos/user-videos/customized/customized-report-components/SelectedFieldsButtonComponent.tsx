import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button } from "@mui/material";

//prop types
type buttonProps = {
  label: string;
  isActive: boolean;
  childData: Array<{ id: number; label: string; isActive: boolean }>;
  fieldsState: Array<{
    id: number;
    label: string;
    isActive: boolean;
    childData: Array<{ id: number; label: string; isActive: boolean }>;
  }>;
  setFieldsState: (fn: () => Array<any>) => void;
};

const fieldButton = css`
  margin: 0px !important;
  padding: 0px !important;
  padding: 10px !important;
  color: #161f29 !important;
  background-color: #ffffff !important;
  box-shadow: inset 1px 1.5px 5px rgba(22, 31, 41, 0.1);
  border: 0.5px solid #161f29;
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

const clickedFieldButton = css`
  ${fieldButton};
  color: white !important;
  background-color: #57ce66 !important;
  font-weight: 700 !important;
`;

const SelectedFieldsButtonComponent = (props: buttonProps) => {
  const handleSelectedFieldsButton = (label: string) => {
    const childData = props.childData;

    const updatedChildData = childData.map(eachChildData => {
      if (eachChildData.label == label) {
        return { ...eachChildData, isActive: true };
      } else {
        return { ...eachChildData, isActive: false };
      }
    });

    const updatedData = props.fieldsState.map(eachFieldsState => {
      const childData = eachFieldsState.childData;

      if (eachFieldsState.isActive == true) {
        return {
          ...eachFieldsState,
          childData: [...updatedChildData],
        };
      } else {
        return {
          ...eachFieldsState,
          childData: [...childData],
        };
      }
    });

    props.setFieldsState(() => {
      return updatedData;
    });
  };

  return (
    <>
      <Button
        variant='text'
        onClick={() => {
          handleSelectedFieldsButton(props.label);
        }}
        css={props.isActive ? clickedFieldButton : fieldButton}
      >
        {props.label}
      </Button>
    </>
  );
};

export default SelectedFieldsButtonComponent;
