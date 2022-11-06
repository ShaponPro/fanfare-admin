import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Grid from "@mui/material/Grid";
import SelectedFieldsButtonComponent from "./SelectedFieldsButtonComponent";

//prop types
type props = {
  fieldsState: Array<{
    id: number;
    label: string;
    isActive: boolean;
    childData: Array<{ id: number; label: string; isActive: boolean }>;
  }>;
  setFieldsState: (fn: () => Array<any>) => void;
  childData: Array<{ id: number; label: string; isActive: boolean }>;
};

const fullButtonGrid = css`
  width: 100% !important;
  padding: 0px !important;
  margin: 0px !important;
  background: rgba(0, 158, 250, 0.2);
  padding-top: 10px !important;
  padding-left: 10px !important;
  padding-right: 20px !important;
  padding-bottom: 20px !important;
  border-radius: 5px;
  margin-top: 20px !important;
`;

const buttonGrid = css`
  padding: 0px !important;
  margin: 0px !important;
  width: 244.17px !important;
`;

const SelectedFieldsComponent = (props: props) => {
  return (
    <>
      <Grid container item lg={12} md={12} sm={12} xs={12} css={fullButtonGrid}>
        {props.childData.map(eachChildData => {
          const label = eachChildData.label;
          const isActive = eachChildData.isActive;

          return (
            <Grid container item lg={2} md={4} sm={12} xs={12} key={eachChildData.id} css={buttonGrid}>
              <SelectedFieldsButtonComponent
                label={label}
                isActive={isActive}
                childData={props.childData}
                fieldsState={props.fieldsState}
                setFieldsState={props.setFieldsState}
              ></SelectedFieldsButtonComponent>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default SelectedFieldsComponent;
