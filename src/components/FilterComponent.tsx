import { useState } from "react";

// ** MUI Imports
import { InputBase, InputAdornment, Typography, Radio } from "@mui/material";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

// ** Icons Imports
import SearchIcon from "@mui/icons-material/Search";
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

const StyledSelect = styled(Select)({
    borderRadius: "0px",
    background: "white",
    height: "36px",
    boxShadow: "inset 1px 1.5px 5px rgba(22, 31, 41, 0.2)",
    width: "160px",
});

const StyledGrid = styled(Grid)({
    display: "flex",
    alignItems: "center",
    margin: "10px",
});

const radioBtnContainerStyle = {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    transition: ".15s ease-in-out",
    margin: "0px 0px 0px 10px",
    fontSize: "12px",
};

/* Style End */

const userVideos = {
    userName: "",
    uploadedCountry: "",
    videoContest: "",
    musicCreator: "",
};

//**props

// type props = {
//     title: string;

//     // userName: string
//     // fields: object[];
//     // onChange: (fields: object[]) => void;
//     // style: React.CSSProperties;
// };

export const FilterComponent = () => {
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
        <div className="demo-space-x">
            <Grid container spacing={2}>
                <Grid item lg={3} xs={12}>
                    <StyledGrid>
                        <Typography
                            variant="h4"
                            display="flex"
                            style={typographyStyle}
                        >
                            User Id/Name
                        </Typography>
                        <Item style={itemStyle}>
                            <InputBase
                                placeholder="Search and Filter"
                                style={{ fontSize: "10px" }}
                                onChange={onChangeHandler}
                                name="userName"
                            />
                            <SearchIcon />
                        </Item>
                    </StyledGrid>
                    <StyledGrid>
                        <Typography
                            variant="h4"
                            display="flex"
                            style={typographyStyle}
                        >
                            Engagement
                        </Typography>
                        <FormControl sx={{ minWidth: 120 }} size="small">
                            <InputLabel
                                shrink={false}
                                sx={{
                                    color: "rgba(22, 31, 41, 0.25)",
                                    fontWeight: "400",
                                    fontSize: "12px",
                                }}
                            >
                                Select Item
                            </InputLabel>
                            <StyledSelect>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Likes
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Comments
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Shares
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Download
                                    </label>
                                    <Radio />
                                </Grid>
                            </StyledSelect>
                        </FormControl>
                    </StyledGrid>
                    <StyledGrid>
                        <Typography
                            variant="h4"
                            display="flex"
                            style={typographyStyle}
                        >
                            Current Status
                        </Typography>
                        <FormControl sx={{ minWidth: 120 }} size="small">
                            <InputLabel
                                shrink={false}
                                sx={{
                                    color: "rgba(22, 31, 41, 0.25)",
                                    fontWeight: "400",
                                    fontSize: "12px",
                                }}
                            >
                                Select Item
                            </InputLabel>
                            <StyledSelect>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Published
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Failed
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Uploading
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Suspended
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Deleted
                                    </label>
                                    <Radio />
                                </Grid>
                            </StyledSelect>
                        </FormControl>
                    </StyledGrid>
                </Grid>
                <Grid item lg={3} xs={12}>
                    <StyledGrid>
                        <Typography
                            variant="h4"
                            display="flex"
                            style={typographyStyle}
                        >
                            Uploaded Country
                        </Typography>
                        <Item style={itemStyle}>
                            <InputBase
                                placeholder="Search and Filter"
                                style={{ fontSize: "10px" }}
                                onChange={onChangeHandler}
                                name="uploadedCountry"
                            />
                            <SearchIcon />
                        </Item>
                    </StyledGrid>
                    <StyledGrid>
                        <Typography
                            variant="h4"
                            display="flex"
                            style={typographyStyle}
                        >
                            AD & Monetization
                        </Typography>
                        <FormControl sx={{ minWidth: 120 }} size="small">
                            <InputLabel
                                shrink={false}
                                sx={{
                                    color: "rgba(22, 31, 41, 0.25)",
                                    fontWeight: "400",
                                    fontSize: "12px",
                                }}
                            >
                                Select Item
                            </InputLabel>
                            <StyledSelect>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Awareness AD
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Product Added
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Active Awarness
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Active Product
                                    </label>
                                    <Radio />
                                </Grid>
                            </StyledSelect>
                        </FormControl>
                    </StyledGrid>
                    <StyledGrid>
                        <Typography
                            variant="h4"
                            display="flex"
                            style={typographyStyle}
                        >
                            Right Selling Status
                        </Typography>
                        <FormControl sx={{ minWidth: 120 }} size="small">
                            <InputLabel
                                shrink={false}
                                sx={{
                                    color: "rgba(22, 31, 41, 0.25)",
                                    fontWeight: "400",
                                    fontSize: "12px",
                                }}
                            >
                                Select Item
                            </InputLabel>
                            <StyledSelect>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Free
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Sold
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Processing
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Claimed
                                    </label>
                                    <Radio />
                                </Grid>
                            </StyledSelect>
                        </FormControl>
                    </StyledGrid>
                </Grid>
                <Grid item lg={3} xs={12}>
                    <StyledGrid>
                        <Typography
                            variant="h4"
                            display="flex"
                            style={typographyStyle}
                        >
                            Upload Peried{" "}
                        </Typography>
                        <FormControl sx={{ minWidth: 120 }} size="small">
                            <InputLabel
                                shrink={false}
                                sx={{
                                    color: "rgba(22, 31, 41, 0.25)",
                                    fontWeight: "400",
                                    fontSize: "12px",
                                }}
                            >
                                Select Item
                            </InputLabel>
                            <StyledSelect>
                                <label style={radioBtnContainerStyle}>
                                    Today
                                </label>
                                <label style={radioBtnContainerStyle}>
                                    Last 7 Days
                                </label>
                                <label style={radioBtnContainerStyle}>
                                    Last 15 Days
                                </label>
                                <label style={radioBtnContainerStyle}>
                                    Last 30 Days
                                </label>
                                <label style={radioBtnContainerStyle}>
                                    Last 60 Days
                                </label>
                                <label style={radioBtnContainerStyle}>
                                    Last 90 Days
                                </label>

                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Custom Range
                                    </label>
                                    <Radio />
                                </Grid>
                            </StyledSelect>
                        </FormControl>
                    </StyledGrid>
                    <StyledGrid>
                        <Typography
                            variant="h4"
                            display="flex"
                            style={typographyStyle}
                        >
                            Video Contest
                        </Typography>
                        <Item style={itemStyle}>
                            <InputBase
                                placeholder="Search and Filter"
                                style={{ fontSize: "10px" }}
                                onChange={onChangeHandler}
                                name="videoContest"
                            />
                            <InputAdornment position="end">
                                <SearchIcon />
                            </InputAdornment>
                        </Item>
                    </StyledGrid>
                </Grid>
                <Grid item lg={3} xs={12}>
                    <StyledGrid>
                        <Typography
                            variant="h4"
                            display="flex"
                            style={typographyStyle}
                        >
                            Video Length Group
                        </Typography>
                        <FormControl sx={{ minWidth: 120 }} size="small">
                            <InputLabel
                                shrink={false}
                                sx={{
                                    color: "rgba(22, 31, 41, 0.25)",
                                    fontWeight: "400",
                                    fontSize: "12px",
                                }}
                            >
                                Select Item
                            </InputLabel>
                            <StyledSelect>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Upto 30s
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        31s-60s
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        61s-180s
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        181s-300s
                                    </label>
                                    <Radio />
                                </Grid>
                            </StyledSelect>
                        </FormControl>
                    </StyledGrid>
                    <StyledGrid>
                        <Typography
                            variant="h4"
                            display="flex"
                            style={typographyStyle}
                        >
                            Music Creator
                        </Typography>
                        <Item style={itemStyle}>
                            <InputBase
                                placeholder="Search and Filter"
                                style={{ fontSize: "10px" }}
                                onChange={onChangeHandler}
                                name="musicCreator"
                            />
                            <InputAdornment position="end">
                                <SearchIcon />
                            </InputAdornment>
                        </Item>
                    </StyledGrid>
                </Grid>
            </Grid>
        </div>
    );
};
