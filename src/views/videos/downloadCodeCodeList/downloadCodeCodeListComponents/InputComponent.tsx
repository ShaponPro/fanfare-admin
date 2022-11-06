import { Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { useState } from "react";

// ** MUI Imports
import { InputBase, Box, InputAdornment, Radio } from "@mui/material";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";

// ** Icons Imports
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

/* Style Start */
const itemStyle = {
  borderRadius: "0",
  padding: "5px",
  height: "36px",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  boxShadow: " inset 1px 1.5px 5px rgba(22, 31, 41, 0.2)",
  justifyContent: "space-between",
  width: "160px",

  //border: '2px solid red'
};

const typographyStyle = {
  fontSize: "11px",
  width: "150px",
  color: "black",
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
}));

const StyledGrid = styled(Grid)({
  display: "flex",
  alignItems: "center",

  //border: '2px solid red',
  margin: "10px",
});

const userVideos = {
  userName: "",
  uploadedCountry: "",
  videoContest: "",
  musicCreator: "",
};

const radioBtnContainerStyle = {
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  transition: ".15s ease-in-out",
  margin: "0px 0px 0px 10px",
  fontSize: "12px",

  //border: '2px solid red'
};

const StyledSelect = styled(Select)({
  borderRadius: "0px",
  background: "white",
  height: "36px",
  boxShadow: "inset 1px 1.5px 5px rgba(22, 31, 41, 0.2)",
  width: "160px",

  //border: '2px solid black'
});
//**props

type props = {
  title: string;

  // userName: string
  // fields: object[];
  // onChange: (fields: object[]) => void;
  // style: React.CSSProperties;
};

const InputComponent = () => {
  const [videoState, setVideoState] = useState<object>(userVideos);

  /* Handle all Changes */
  const onChangeHandler = (e: any) => {
    console.log("e", e);
    setVideoState({ ...videoState, [e.target.name]: e.target.value });

    console.log(videoState);

    // setUserName({userName: e.target.value})

    //post req
    // axios
    //post
  };

  /* Handle all Changes End */

  return (
    <>
      <Grid>
        <StyledGrid>
          <Typography variant='h4' display='flex' style={typographyStyle}>
            Authorized Downloader
          </Typography>
          <Item style={itemStyle}>
            <InputBase
              placeholder='Search and Filter'
              style={{ fontSize: "10px" }}
              onChange={onChangeHandler}
              name='userName'
            />
            <SearchIcon />
          </Item>
        </StyledGrid>
      </Grid>

      <Grid>
        <StyledGrid>
          <Typography variant='h4' display='flex' style={typographyStyle}>
            Code Creation period
          </Typography>
          <FormControl sx={{ minWidth: 120 }} size='small'>
            <StyledSelect>
              <label style={radioBtnContainerStyle}>Today</label>
              <label style={radioBtnContainerStyle}>Last 7 Days</label>
              <label style={radioBtnContainerStyle}>Last 15 Days</label>
              <label style={radioBtnContainerStyle}>Last 30 Days</label>
              <label style={radioBtnContainerStyle}>Last 60 Days</label>
              <label style={radioBtnContainerStyle}>Last 90 Days</label>

              <Grid sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <label style={radioBtnContainerStyle}>Custom Range</label>
                <Radio />
              </Grid>
            </StyledSelect>
          </FormControl>
        </StyledGrid>
      </Grid>

      <Grid>
        <StyledGrid>
          <Typography variant='h4' display='flex' style={typographyStyle}>
            Status
          </Typography>
          <FormControl sx={{ minWidth: 120 }} size='small'>
            <StyledSelect>
              <label style={radioBtnContainerStyle}>Today</label>
              <label style={radioBtnContainerStyle}>Last 7 Days</label>
              <label style={radioBtnContainerStyle}>Last 15 Days</label>
              <label style={radioBtnContainerStyle}>Last 30 Days</label>
              <label style={radioBtnContainerStyle}>Last 60 Days</label>
              <label style={radioBtnContainerStyle}>Last 90 Days</label>

              <Grid sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <label style={radioBtnContainerStyle}>Custom Range</label>
                <Radio />
              </Grid>
            </StyledSelect>
          </FormControl>
        </StyledGrid>
      </Grid>
    </>
  );
};

export default InputComponent;
