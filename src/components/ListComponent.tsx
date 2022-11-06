import * as React from "react";

// ** MUI Imports
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import usePagination from "@mui/material/usePagination";
import TableHead from "@mui/material/TableHead";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";

// ** Components
import SearchComponent from "./SearchComponent";

//styled Component
const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
        background: "rgba(22, 31, 41, 0.07)",
        borderBottom: "2px solid white",
        borderLeft: "2px solid white",
        color: "black",
        textTransform: "none",
    },

    [`&.${tableCellClasses.body}`]: {
        fontSize: 12,
        border: "2px solid white",
    },
}));

const StyledSelect = styled(Select)({
    background: "white",
    borderRadius: "0px",
    height: "36px",
    width: "80px",
    margin: "3px",
    boxShadow: "inset 1px 1.5px 5px rgba(22, 31, 41, 0.2)",
});

const StyledMenuItem= styled(MenuItem)({
border:'2px solid red', 
margin:'5px'
});

const StyledGrid = styled(Grid)({
    display: "flex",
    margin: "10px",
});

const StyledTableRow = styled(TableRow)(() => ({
    "&:nth-of-type(even)": {
        background: "rgba(22, 31, 41, 0.07)",
    },
    "&:nth-of-type(odd)": {
        //border: '2px solid black',
        background: "rgba(22, 31, 41, 0.03)",
    },

    // hide last border
    "&:last-child td, &:last-child th": {
        //border:'2px solid blue'
    },
}));

const StyledSelectReport = styled(Select)({
    borderRadius: "20px",
    background: "white",
    height: "36px",
    width: "126px",
    boxShadow: "inset 1px 1.5px 5px rgba(22, 31, 41, 0.2)",

    "& .MuiSelect-select": {
        transition: "0s !important",
    },
});

const List = styled("ul")({
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
});

function UsePagination() {
    const { items } = usePagination({
        count: 10,
    });

    return (
        <nav>
            <List>
                {items.map(({ page, type, selected, ...item }, index) => {
                    let children = null;
                    if (type === "start-ellipsis" || type === "end-ellipsis") {
                        children = "…";
                    } else if (type === "page") {
                        children = (
                            <button
                                type="button"
                                style={{
                                    border: "none",
                                    outline: "none",
                                    background: "#F3F3F4",
                                    color: "#009EFA",
                                    fontWeight: selected ? "bold" : undefined,
                                }}
                                {...item}
                            >
                                {page}
                            </button>
                        );
                    } else {
                        children = (
                            <button
                                type="button"
                                {...item}
                                style={{
                                    border: "none",
                                    outline: "none",
                                    color: "#009EFA",
                                    background: "#F3F3F4",
                                }}
                            >
                                {type}
                            </button>
                        );
                    }

                    return <li key={index}>{children}</li>;
                })}
            </List>
        </nav>
    );
}

export default function ListComponent({
    rowsData,
    columns,
}: {
    rowsData: object[];
    columns: object[];
}) {

    const data = rowsData;

    return (
        <Box maxWidth={"xl"} sx={{ background: "#F3F3F4" }}>
            <Grid sx={{ padding: "10px" }}>
                <StyledGrid>
                    <Grid
                        lg={2}
                        xs={12}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <Typography>Show</Typography>
                        <StyledSelect>
                            <StyledMenuItem value={10}>10</StyledMenuItem>
                            <StyledMenuItem value={20}>20</StyledMenuItem>
                            <StyledMenuItem value={30}>30</StyledMenuItem>
                        </StyledSelect>
                        <Typography>entries</Typography>
                    </Grid>
                    <Grid
                        lg={8}
                        xs={12}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <SearchComponent />
                    </Grid>
                    <Grid
                        lg={2}
                        xs={12}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-end",
                        }}
                    >
                        <StyledSelectReport displayEmpty>
                            <Button variant="text" sx={{ m: 3 }}>
                                Report
                            </Button>
                        </StyledSelectReport>
                    </Grid>
                </StyledGrid>
                <Grid sx={{ margin: "10px" }}>
                    <TableContainer
                        component={Paper}
                        sx={{ borderRadius: "0px" }}
                    >
                        <Table sx={{ textAlign: "center" }}>
                            <TableHead
                                sx={{
                                    display: "table-header-group",
                                    whiteSpace: "nowrap",
                                }}
                            >
                                <StyledTableRow>
                                    {columns.map((col: any) => (
                                        <StyledTableCell key={col.videoID}>
                                            {col?.header || ""}
                                        </StyledTableCell>
                                    ))}
                                </StyledTableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((row: any) => (
                                    <StyledTableRow key={row?.videoID || ""}>
                                        <StyledTableCell
                                            component="th"
                                            scope="row"
                                        >
                                            {row?.videoID || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <img
                                                height={120}
                                                width={80}
                                                src="/images/avatars/images1.jpg"
                                                alt="this is image"
                                            />
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.videoTitle || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.fileSize || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.videoLength || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.userName || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.userID || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.fanfareID || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.userCreatedDate || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.uploadData || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.uploadDays || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.uploadCountry || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.uploadedIP || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.deviceType || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.videoLengthGroup || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.totalViews || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.totalWatchTime || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.totalLikes || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.totalComments || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.totalShares || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.downloads || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.contestID || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.contestTitle || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.contestWinningPosition || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.allTimeRankingScore || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.trendingScore || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.activeAwarenessDays || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.activeProductdays || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.totalMonitization || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.activeDailyMonetization || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.awarenessClick || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.addReach || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.trafficGeneration || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.rightSellingStatus || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.lastActivityDate || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.lastActivityTime || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.currentSatus || ""}
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <StyledGrid>
                    <Grid
                        lg={3}
                        xs={12}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <Typography variant={"body2"}>
                            Showing 1 to 20 of 167,328 entries
                        </Typography>
                    </Grid>
                    <Grid
                        lg={7}
                        xs={12}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-end",
                        }}
                    >
                        <UsePagination />
                    </Grid>
                    <Grid
                        lg={2}
                        xs={12}
                        sx={{
                            alignItems: "center",
                            justifyContent: "flex-end",
                        }}
                        display={{ lg: "flex", xs: "none" }}
                    >
                        <span>
                            <input
                                type="text"
                                style={{
                                    width: "119px",
                                    height: "36px",
                                    padding: "10px",
                                    background: "#FFFFFF",
                                    border: "1px solid black",
                                }}
                                placeholder="jump to page"
                            />
                            <button
                                style={{
                                    background: "#009EFA",
                                    border: "none",
                                    borderRadius: "3px",
                                    width: "45px",
                                    height: "36px",
                                    padding: "10px",
                                    color: "white",
                                    marginLeft: "10px",
                                }}
                            >
                                Go
                            </button>
                        </span>{" "}
                    </Grid>
                </StyledGrid>
            </Grid>
        </Box>
    );
}

ListComponent.defaultProps = {
    rowsData: [
        {
            videoID: "62b956a760a6af7b2e98cae1",
            thumbnail: "url",
            videoTitle: "Beautiful Henna Design",
            fileSize: 24.44,
            videoLength: 0.4,
            userName: "Nimul Islam",
            userID: "124345579866",
            fanfareID: "xyz2022",
            userCreatedDate: "6/26/2021",
            uploadData: "1:05:11 PM",
            uploadDays: 410,
            uploadCountry: "Bangladesh",
            uploadedIP: "103.103.34.34",
            deviceID: "d8c1a9b3ca05740d",
            deviceType: "android",
            videoLengthGroup: "31s-60s",
            totalViews: 220,
            totalWatchTime: 6160,
            totalLikes: 50,
            totalComments: 10,
            totalShares: 15,
            downloads: 55,
            contestID: "VC123547",
            contestTitle: "Talent's Wolrd",
            contestWinningPosition: "1st",
            allTimeRankingScore: 1700,
            trendingScore: 415,
            activeAwarenessDays: 0,
            activeProductdays: 3,
            totalMonitization: 5000,
            activeDailyMonetization: 100,
            addReach: 5000,
            awarenessClick: 1000,
            trafficGeneration: 1500,
            rightSellingStatus: "Proccesing",
            lastActivityDate: "6/27/2022",
            lastActivityTime: "1:05:00 PM",
            currentSatus: "Published",
        },
    ],
    columns: [
        {
            field: "videoID",
            header: "Video ID",
        },
        {
            field: "thumbnail",
            header: "Thumbnail",
        },
        {
            field: "videoTitle",
            header: "Video Title",
        },
        {
            field: "fileSize",
            header: "File Size(MB)",
        },
        {
            field: "videoLength",
            header: "Video Length",
        },
        {
            field: "userName",
            header: "User Name",
        },
        {
            field: "userID",
            header: "User ID",
        },
        {
            field: "fanfareID",
            header: "Fanfare ID",
        },
        {
            field: "userCreatedDate",
            header: "User Created Date",
        },
        {
            field: "uploadData",
            header: "Upload Data",
        },
        {
            field: "uploadDays",
            header: "Upload Days",
        },
        {
            field: "uploadCountry",
            header: "Upload Country",
        },
        {
            field: "uploadedIP",
            header: "Uploaded IP",
        },
        {
            field: "deviceType",
            header: "Device Type",
        },
        {
            field: "videoLengthGroup",
            header: "Video Length Group",
        },
        {
            field: "totalViews",
            header: "Total Views",
        },
        {
            field: "totalWatchTime",
            header: "Total Watch Time",
        },
        {
            field: "totalLikes",
            header: "Total Likes",
        },
        {
            field: "totalComments",
            header: "Total Comments",
        },
        {
            field: "totalShares",
            header: "Total Shares",
        },
        {
            field: "downloads",
            header: "Downloads",
        },
        {
            field: "contestID",
            header: "Contest ID",
        },
        {
            field: "contestTitle",
            header: "Contest Title",
        },
        {
            field: "contestWinningPosition",
            header: "Contest Winning Position",
        },
        {
            field: "allTimeRankingScore",
            header: "All Time Ranking Score",
        },
        {
            field: "trendingScore",
            header: "Tranding Score",
        },
        {
            field: "activeAwarenessDays",
            header: "Active Awareness Days",
        },
        {
            field: "activeProductdays",
            header: "Active Product Days",
        },
        {
            field: "totalMonitization",
            header: "Total Monetization (Till Yestarday)",
        },
        {
            field: "activeDailyMonetization",
            header: "Active Daily Monetization",
        },
        {
            field: "addReach",
            header: "ADD Reach",
        },
        {
            field: "awarenessClick",
            header: "Awareness Click",
        },
        {
            field: "trafficGeneration",
            header: "Traffic Generation",
        },
        {
            field: "rightSellingStatus",
            header: "Right Selling Status",
        },
        {
            field: "lastActivityDate",
            header: "Last Activity Date",
        },
        {
            field: "lastActivityTime",
            header: "Last Activity Time",
        },
        {
            field: "currentSatus",
            header: "Current Status",
        },
    ],
};
