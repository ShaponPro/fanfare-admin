/* eslint-disable @typescript-eslint/no-unused-vars */

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
import ListComponent from "src/components/ListComponent";
import { FilterComponent } from "src/components/FilterComponent";
import { allData } from "src/@fake-db/table/allData";
import UserVideosCustomizedComponent from "./list-videos/customize/index";

import { useQuery } from "@apollo/client";

import { GET_VIDEO_LIST } from "../../graphql/Queries";
import { useEffect, useState } from "react";

const tabs = [
  {
    key: "regular",
    title: "Regular",
  },
  {
    key: "monetization",
    title: "Active Monetization",
  },
  {
    key: "trending",
    title: "Trending",
  },
  {
    key: "customized",
    title: "Customized",
  },
];

const row = {
  videoID: "62b956a760a6af7b2e98cae1",
  thumbnail: "url",
  videoTitle: "Beautiful Henna Design",
  fileSize: 24.44,
  videoLength: 0.40,
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
}

const AnalyticsCongratulations = () => {
  const [activeTab, setActiveTab] = useState<string>("");
  const [videos, setVideos] = useState<object[]>([]);

  /**
   * Graph Ql Query
   */
  const { error, loading, data } = useQuery(GET_VIDEO_LIST, {
    variables: {
      endIndex: 10,
      startIndex: 1,
    },
  });


  // check for errors
  if (error) {
    return <p>:( an error happened</p>;
  }

  console.log("data", loading,error, data);

  const formatData = (data: any): object[] => {
    let newData = [row];
    if(data.length > 0) {
      newData = data.map((item: any) => {
        return {
          ...row,
          ...item,
          videoID: item?._id ?? row.videoID,
          videoTitle: item?.title ?? row.videoTitle,
        }
      })
    }
    return newData;
  }

  useEffect(() => {
    if(loading) return;
    if(error) return;
    if(data && data?.allVideos && data.allVideos.length){
      setVideos(formatData(data.allVideos));
    }
  }, [loading, error, data])

  /**
   * Handle on tab change
   */
  const filterChangeHandler = (key: string) => {
    console.log("key", key);
  };

  const tabChangeHandler = (key: string) => {
    console.log("key", key);
    setActiveTab(key);
  };

  const columns = [
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
  ];

  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={12}>
          <Typography variant='h5' sx={{ mb: 4.5 }}>
            <Box component='span' sx={{ fontWeight: "bold" }}>
              User Videos
            </Box>
          </Typography>
        </Grid>
      </Grid>
      <Card sx={{ position: "relative" }}>
        <CardContent sx={{ p: theme => `${theme.spacing(6.75, 7.5)} !important` }}>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={12}>
              <TabbarComponent options={tabs} activekey={"regular"} onChange={tabChangeHandler} />
            </Grid>
            {activeTab === "customized" ? (
              <>
                <Grid item xs={12} sm={12}>
                  <UserVideosCustomizedComponent />
                </Grid>
              </>
            ) : (
              <>
                <Grid item xs={12} sm={12}>
                  <FilterComponent />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <ListComponent rowsData={videos} columns={columns} />
                </Grid>
              </>
            )}
          </Grid>
        </CardContent>
      </Card>
    </ApexChartWrapper>
  );
};

export default AnalyticsCongratulations;
