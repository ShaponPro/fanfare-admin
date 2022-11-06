import React, { useState } from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Grid from "@mui/material/Grid";
import SelectFieldsButtonComponent from "./SelectFieldsButtonComponent";
import SelectedFieldsComponent from "./SelectedFieldsComponent";

const text1 = css`
  color: #000000;
  font-family: "Open Sans", sans-serif !important;
  font-style: normal !important;
  font-weight: 600 !important;
  font-size: 14px;
  line-height: 19px;
  margin-bottom: 10px;
`;

const fullButtonGrid = css`
  padding: 0px !important;
  margin: 0px !important;
  width: 100%;
`;

const buttonGrid = css`
  padding: 0px !important;
  margin: 0px !important;
  width: 307px !important;
  margin-bottom: 5px !important;
`;

const fieldGrid = css`
  width: 100%;
  margin-top: 30px;
`;

const SelectFieldsComponent = () => {
  const [fieldsState, setFieldsState] = useState([
    {
      id: 0,
      label: "Video Details",
      isActive: false,
      childData: [
        {
          id: 0,
          label: "Select All",
          isActive: false,
        },
        {
          id: 1,
          label: "Video ID",
          isActive: false,
        },
        {
          id: 2,
          label: "Thumbnail",
          isActive: false,
        },
        {
          id: 3,
          label: "Video Title",
          isActive: false,
        },
        {
          id: 4,
          label: "File Size MB",
          isActive: false,
        },
        {
          id: 5,
          label: "Video Length",
          isActive: false,
        },
        {
          id: 6,
          label: "Video Length Group",
          isActive: false,
        },
        {
          id: 7,
          label: "Brand Tag",
          isActive: false,
        },
        {
          id: 8,
          label: "Hash Tag-1",
          isActive: false,
        },
        {
          id: 9,
          label: "Hash Tag-2",
          isActive: false,
        },
        {
          id: 10,
          label: "Description",
          isActive: false,
        },
      ],
    },
    {
      id: 1,
      label: "Music Details",
      isActive: false,
      childData: [
        {
          id: 0,
          label: "Select All",
          isActive: false,
        },
        {
          id: 1,
          label: "Music Source",
          isActive: false,
        },
        {
          id: 2,
          label: "Music ID",
          isActive: false,
        },
        {
          id: 3,
          label: "Music Creator",
          isActive: false,
        },
        {
          id: 4,
          label: "Music Rank",
          isActive: false,
        },
        {
          id: 5,
          label: "Music Upload Date",
          isActive: false,
        },
        {
          id: 6,
          label: "Music Upload Days",
          isActive: false,
        },
        {
          id: 7,
          label: "Music Permissions",
          isActive: false,
        },
        {
          id: 8,
          label: "Multiple Music",
          isActive: false,
        },
      ],
    },
    {
      id: 2,
      label: "Upload Details",
      isActive: false,
      childData: [
        {
          id: 0,
          label: "Select All",
          isActive: false,
        },
        {
          id: 1,
          label: "Upload Date",
          isActive: false,
        },
        {
          id: 2,
          label: "Upload Time",
          isActive: false,
        },
        {
          id: 3,
          label: "Upload Period",
          isActive: false,
        },
        {
          id: 4,
          label: "Upload Days",
          isActive: false,
        },
        {
          id: 5,
          label: "Uploaded Country",
          isActive: false,
        },
        {
          id: 6,
          label: "Uploaded IP",
          isActive: false,
        },
        {
          id: 7,
          label: "Device ID",
          isActive: false,
        },
        {
          id: 8,
          label: "Device Type",
          isActive: false,
        },

        {
          id: 9,
          label: "Device Version",
          isActive: false,
        },

        {
          id: 10,
          label: "Device OS",
          isActive: false,
        },

        {
          id: 11,
          label: "Expiry Date",
          isActive: false,
        },

        {
          id: 12,
          label: "Expiry Status",
          isActive: false,
        },
      ],
    },
    {
      id: 3,
      label: "User Details",
      isActive: false,
      childData: [
        {
          id: 0,
          label: "Select All",
          isActive: false,
        },
        {
          id: 1,
          label: "User Name",
          isActive: false,
        },
        {
          id: 2,
          label: "User ID",
          isActive: false,
        },
        {
          id: 3,
          label: "Fanfare ID",
          isActive: false,
        },
        {
          id: 4,
          label: "User Created Date",
          isActive: false,
        },
        {
          id: 5,
          label: "User Created Time",
          isActive: false,
        },
        {
          id: 6,
          label: "Level",
          isActive: false,
        },
        {
          id: 7,
          label: "User Days",
          isActive: false,
        },
      ],
    },
    {
      id: 4,
      label: "View Details",
      isActive: false,
      childData: [
        {
          id: 0,
          label: "Select All",
          isActive: false,
        },
        {
          id: 1,
          label: "Total Views",
          isActive: false,
        },
        {
          id: 2,
          label: "Total Watch Time",
          isActive: false,
        },
        {
          id: 3,
          label: "Less 30% View",
          isActive: false,
        },
        {
          id: 4,
          label: "31-50% View",
          isActive: false,
        },
        {
          id: 5,
          label: "51-70% View",
          isActive: false,
        },
        {
          id: 6,
          label: "71-90% View",
          isActive: false,
        },
        {
          id: 7,
          label: "Full Video View",
          isActive: false,
        },
        {
          id: 8,
          label: "Average Daily Views",
          isActive: false,
        },
        {
          id: 9,
          label: "Total Watch Time",
          isActive: false,
        },
        {
          id: 10,
          label: "Average Watch Time",
          isActive: false,
        },
      ],
    },
    {
      id: 5,
      label: "Engagement Details",
      isActive: false,
      childData: [
        {
          id: 0,
          label: "Select All",
          isActive: false,
        },
        {
          id: 1,
          label: "Total Likes",
          isActive: false,
        },
        {
          id: 2,
          label: "Total Comments",
          isActive: false,
        },
        {
          id: 3,
          label: "Total Shares",
          isActive: false,
        },
        {
          id: 4,
          label: "Downloads Auto",
          isActive: false,
        },
        {
          id: 5,
          label: "Downloads With Code",
          isActive: false,
        },
        {
          id: 6,
          label: "Admin Download",
          isActive: false,
        },
      ],
    },
    {
      id: 6,
      label: "Score & Ranking",
      isActive: false,
      childData: [
        {
          id: 0,
          label: "Select All",
          isActive: false,
        },
        {
          id: 1,
          label: "1 minute Watch Time Score",
          isActive: false,
        },
        {
          id: 2,
          label: "Watch Time Score",
          isActive: false,
        },
        {
          id: 3,
          label: "Total Engagement Scores",
          isActive: false,
        },
        {
          id: 4,
          label: "Daily Engagement Scores",
          isActive: false,
        },
        {
          id: 5,
          label: "Contest Score",
          isActive: false,
        },
        {
          id: 6,
          label: "Daily Contest Score",
          isActive: false,
        },
        {
          id: 7,
          label: "All Time Ranking Score",
          isActive: false,
        },
        {
          id: 8,
          label: "All Time Ranking",
          isActive: false,
        },
        {
          id: 9,
          label: "Trending Score",
          isActive: false,
        },
        {
          id: 10,
          label: "Trending Ranking",
          isActive: false,
        },
        {
          id: 11,
          label: "Active Monetization Score",
          isActive: false,
        },
        {
          id: 12,
          label: "Monetization Ranking",
          isActive: false,
        },
      ],
    },
    {
      id: 7,
      label: "AD & Monetization",
      isActive: false,
      childData: [
        {
          id: 0,
          label: "Select All",
          isActive: false,
        },
        {
          id: 1,
          label: "Total Awareness Days",
          isActive: false,
        },
        {
          id: 2,
          label: "Total Product Days",
          isActive: false,
        },
        {
          id: 3,
          label: "Active Awareness Days",
          isActive: false,
        },
        {
          id: 4,
          label: "Active Product Days",
          isActive: false,
        },
        {
          id: 5,
          label: "Total Monetization (Till Yesterday)",
          isActive: false,
        },
        {
          id: 6,
          label: "Active Daily Monetization",
          isActive: false,
        },
        {
          id: 7,
          label: "Active Monetization Start Date",
          isActive: false,
        },
        {
          id: 8,
          label: "Active Monetization End Date",
          isActive: false,
        },
        {
          id: 9,
          label: "Active Monetization Days",
          isActive: false,
        },
        {
          id: 10,
          label: "AD Reach",
          isActive: false,
        },
        {
          id: 11,
          label: "Awareness Click",
          isActive: false,
        },
        {
          id: 12,
          label: "Traffic Generation",
          isActive: false,
        },
      ],
    },
    {
      id: 8,
      label: "Video Contest",
      isActive: false,
      childData: [
        {
          id: 0,
          label: "Select All",
          isActive: false,
        },
        {
          id: 1,
          label: "Contest ID",
          isActive: false,
        },
        {
          id: 2,
          label: "Contest Title",
          isActive: false,
        },
        {
          id: 3,
          label: "Contest Tag",
          isActive: false,
        },
        {
          id: 4,
          label: "Contest Winning Position",
          isActive: false,
        },
        {
          id: 5,
          label: "Contest Publisher",
          isActive: false,
        },
      ],
    },
    {
      id: 9,
      label: "Others",
      isActive: false,
      childData: [
        {
          id: 0,
          label: "Select All",
          isActive: false,
        },
        {
          id: 1,
          label: "Right Selling Status",
          isActive: false,
        },
        {
          id: 2,
          label: "Last Activity Date",
          isActive: false,
        },
        {
          id: 3,
          label: "Last Activity Time",
          isActive: false,
        },
        {
          id: 4,
          label: "Current Status",
          isActive: false,
        },
        {
          id: 5,
          label: "Action",
          isActive: false,
        },
        {
          id: 6,
          label: "Last Pushed to",
          isActive: false,
        },
        {
          id: 7,
          label: "Last Pushed Date",
          isActive: false,
        },
      ],
    },
  ]);

  return (
    <>
      <Grid container item lg={12} md={12} sm={12} xs={12} css={fieldGrid}>
        <Grid container css={text1}>
          Select Fields
        </Grid>

        <Grid container item lg={12} md={12} sm={12} xs={12} css={fullButtonGrid}>
          {fieldsState.map(eachFieldsState => {
            const label = eachFieldsState.label;
            const isActive = eachFieldsState.isActive;

            return (
              <Grid container item lg={12 / 5} md={4} sm={12} xs={12} key={eachFieldsState.id} css={buttonGrid}>
                <SelectFieldsButtonComponent
                  label={label}
                  isActive={isActive}
                  fieldsState={fieldsState}
                  setFieldsState={setFieldsState}
                ></SelectFieldsButtonComponent>
              </Grid>
            );
          })}
        </Grid>

        {fieldsState.map(eachFieldsState => {
          return (
            <Grid container item lg={12} md={12} sm={12} xs={12} key={eachFieldsState.id}>
              {eachFieldsState.isActive && (
                <SelectedFieldsComponent
                  fieldsState={fieldsState}
                  setFieldsState={setFieldsState}
                  childData={eachFieldsState.childData}
                ></SelectedFieldsComponent>
              )}
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default SelectFieldsComponent;
