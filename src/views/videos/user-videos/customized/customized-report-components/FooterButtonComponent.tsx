import React from "react";
import { Button, Grid } from "@mui/material";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const footerButton = css`
  margin: 0px !important;
  padding: 0px !important;
  color: rgba(22, 31, 41, 0.5);
  background: #f3f3f4;
  border-radius: 3px;
  padding: 10px 25px 10px 25px !important;
  width: 100% !important;
  height: 42px;
  font-family: "Open Sans", sans-serif !important;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-transform: capitalize !important;
  border-radius: 0px !important;
  justify-content: flex-start;
`;

const buttonGrid = css`
  width: 100px !important;
  padding: 0px !important;
  margin: 0px !important;
  margin-right: 10px !important;
`;

const generateButtonGrid = css`
  width: 125px !important;
  padding: 0px !important;
  margin: 0px !important;
`;

const footerButtonGenerate = css`
  ${footerButton};
  color: #ffffff !important;
  width: 100% !important;
  background: #57ce66 !important;
  font-weight: 700 !important;
`;

const buttonGroup = css`
  width: 100%important;
  justify-content: flex-end;
  margin-top: 20px !important;
  margin-bottom: 20px !important;
`;

const handleCancel = () => {
  console.log("cancel clicked");
};

const handleGenerate = () => {
  console.log("generate clicked");
};

const FooterButtonComponent = () => {
  return (
    <>
      <Grid container css={buttonGroup}>
        <Grid css={buttonGrid}>
          <Button
            variant='text'
            css={footerButton}
            onClick={() => {
              handleCancel();
            }}
          >
            Cancel
          </Button>
        </Grid>

        <Grid css={generateButtonGrid}>
          <Button
            variant='text'
            css={footerButtonGenerate}
            onClick={() => {
              handleGenerate();
            }}
          >
            Generate
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default FooterButtonComponent;
