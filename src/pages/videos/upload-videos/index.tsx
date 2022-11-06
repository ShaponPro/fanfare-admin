// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";

// ** Styled Component Import
import ApexChartWrapper from "src/@core/styles/libs/react-apexcharts";

// ** Components
import TabbarComponent from "src/components/TabbarComponent";
import UploadTypeComponent from "src/components/UploadTypeComponent";

import YoutubeCrawler from "./YoutubeCrawler";
import OnBehalfUser from "./OnBehalfUser";
import { useState } from "react";
import OnBehalfBrand from "./OnBehalfBrand";
import Tutorial from "./Tutorial";
import DraftVideos from "./DraftVideos";

const tabs = [
    {
        key: "upload",
        title: "Upload Now",
        isActive: true,
    },
    {
        key: "drafts",
        title: "Drafts",
        isActive: false,
    },
];
const uploadOptions = [
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
];

const AnalyticsCongratulations = () => {
    const [uploadType, setUploadType] = useState<string>("default");
    

    const [active, setActive] = useState<string>("upload"); //

    /**
     * Handle on tab change
     */
    const tabChangeHandler = (key: string) => {
        console.log("key", key);
        setActive(key);
    };

    const uploadTypeChangeHandler = (key: string) => {
        setUploadType(key);
    };

  
    return (
        <ApexChartWrapper>
            <Grid container spacing={6}>
                <Grid item xs={12} md={12}>
                    <Typography variant="h3" sx={{ mb: 4.5 }}>
                        <Box component="span" sx={{ fontWeight: "bold" }}>
                            Upload a Video
                        </Box>
                    </Typography>
                </Grid>
            </Grid>
            <Card sx={{ position: "relative" }}>
                <CardContent
                    sx={{
                        p: (theme) =>
                            `${theme.spacing(9, 7.5, 9, 7.5)} !important`,
                    }}
                >
                    <Grid container spacing={6}>
                        <Grid item xs={12} sm={12}>
                            <TabbarComponent
                                options={tabs}
                                activekey={active}
                                onChange={tabChangeHandler}
                            />
                        </Grid>
                        <Grid
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            item
                            xs={12}
                            sm={12}
                        >
                            

                            {active == "upload" && (
                                <>
                                    {" "}
                                    {uploadType === "default" ? (
                                        <UploadTypeComponent
                                            options={uploadOptions}
                                            selected={uploadType}
                                            onChange={uploadTypeChangeHandler}
                                          
                                        />
                                    ) : uploadType === "user" ? (
                                        <OnBehalfUser />
                                    ) : uploadType === "brand" ? (
                                        <OnBehalfBrand />
                                    ) : uploadType === "tutorial" ? (
                                        <Tutorial />
                                    ) : uploadType === "youtube_crawler" ?(
                                        <YoutubeCrawler />
                                    ): (<UploadTypeComponent
                                      options={uploadOptions}
                                      selected={uploadType}
                                      onChange={uploadTypeChangeHandler}
                                      
                                  />) }
                                </>
                            )}
                            {active == "drafts" && <DraftVideos/>}
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </ApexChartWrapper>
    );
};

export default AnalyticsCongratulations;
