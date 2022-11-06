import { Grid } from "@mui/material";
import React from "react";
import InputComponent from "./InputComponent";
import ListComponent from "./ListComponentCopy";
const DownloadCodeCodeList = () => {
  return (
    <>
      <Grid container>
        <Grid container lg={12}>
          <InputComponent></InputComponent>
        </Grid>
        <Grid container lg={12}>
          <ListComponent></ListComponent>
        </Grid>
      </Grid>
    </>
  );
};

export default DownloadCodeCodeList;
