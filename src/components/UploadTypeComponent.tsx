// ** React Imports
import React, { useState } from "react";

// ** MUI Imports
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MuiFormControl, { FormControlProps } from "@mui/material/FormControl";

// Styled FormControl component
const FormControl = styled(MuiFormControl)<FormControlProps>(({ theme }) => ({
  "& .MuiFormLabel-root.Mui-focused": {
    color: theme.palette.info.main,
  },
  "& .MuiInputLabel-root": {
    left: -14,
    zIndex: 0,
  },
  "& > .MuiInputBase-root": {
    marginTop: theme.spacing(4),
    "&.MuiInput-root:before, &.MuiInput-root:after": {
      border: 0,
    },
  },
  "& .MuiInputBase-input": {
    fontSize: 16,
    borderRadius: 4,
    position: "relative",
    padding: "10px 26px 10px 12px",
  },
}));

//**styles
const Label = styled("label")({
  display: "block",
  color: " #FFFFFF",
  fontSize: "16px",
  paddingTop: "6px",
  width: "40%",
});

interface Item {
  key: string;
  title: string;
}

//**props define
type props = {
  options?: Item[];
  selected?: string;
  onChange?: (field: string) => void;
  style?: React.CSSProperties;
  onClick?:(args: any) => void;
};

function UploadTypeComponent(props: props) {
  // ** State
  const [value, setValue] = useState<string>(props.selected || "");

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
    if (props.onChange) props.onChange(event.target.value as string);
  };

  return (
    <Box
      style={{
        background: "#57CE66",
        width: "100%",
        maxWidth: "550px",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "10px",
        flexDirection: "row",
        boxShadow: "1px 2px 25px rgba(87, 206, 102, 0.5)",
        borderRadius: "40px",
        padding: "15px 40px",
        ...props.style,
      }}
    >
      <Label>
        <Typography variant='subtitle1' gutterBottom>
          Upload Type
        </Typography>
      </Label>
      <FormControl style={{ width: "100%", display: "flex", alignItems: "center" }}>
        <Select
          value={value}
          input={<InputBase />}
          onChange={handleChange}
          id='demo-customized-select'
          labelId='demo-customized-select-label'
          style={{ width: "100%", backgroundColor: "#fff", maxHeight: "40px", margin: "0px", padding: "0px" }}
        >
          {props.options && props.options.length
            ? props.options.map((option, i) => (
                <MenuItem key={i} value={option?.key || ""}>
                  {option?.key === props.selected ? <em>{option?.title}</em> : option?.title}
                </MenuItem>
              ))
            : null}
        </Select>
      </FormControl>
    </Box>
  );
}

export default UploadTypeComponent;

UploadTypeComponent.defaultProps = {
  options: [
    {
      key: "user",
      title: "On behalf of User",
    },
    {
      key: "brand",
      title: "On behalf of Brand",
    },
    {
      key: "tutorial",
      title: "Tutorial",
    },
    {
      key: "youtube_crawler",
      title: "Youtube Crawler",
    },
  ],
  selected: "user",
};
