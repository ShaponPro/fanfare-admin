import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button } from "@mui/material";

//prop types
type buttonProps = {
  label: string;
};

const fieldButton = css`
  width: 100% !important;
  margin: 0px !important;
  padding: 0px !important;
  padding-left: 10px !important;
  padding-top: 10px !important;
  padding-bottom: 10px !important;
  padding-right: 10px !important;
  color: #161f29 !important;
  font-family: "Open Sans", sans-serif !important;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-transform: capitalize !important;
  border-radius: 0px !important;
  justify-content: flex-start;
  white-space: nowrap;
`;

const FieldTableColumnButtonComponent = (props: buttonProps) => {
  return (
    <>
      <Button variant='text' css={fieldButton} disabled>
        {props.label}
      </Button>
    </>
  );
};

export default FieldTableColumnButtonComponent;
