import React, { useState } from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button, Grid } from "@mui/material";
import FieldTableColumnComponent from "./FieldTableColumnComponent";

const fieldButton = css`
  width: 100% !important;
  margin: 0px !important;
  padding: 0px !important;
  padding: 10px !important;
  color: #161f29 !important;
  background: rgba(22, 31, 41, 0.07);
  margin-bottom: 2px !important;
  font-family: "Open Sans", sans-serif !important;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-transform: capitalize !important;
  border-radius: 0px !important;
  justify-content: flex-start;
`;

const headerButtonGrid = css`
  width: 100% !important;
  padding: 0px !important;
  margin: 0px !important;
`;

const fieldHeaderButton = css`
  ${fieldButton};
  font-weight: 700 !important;
  justify-content: center !important;
`;

const fieldColumnGrid = css`
  padding: 0px !important;
  margin: 0px !important;
`;

const fieldTable = css`
  padding: 0px !important;
  margin: 0px !important;
`;

const FieldTableComponent = () => {
  const [selectedFieldsState] = useState([
    {
      id: 0,
      label: "Video Details",
      childData: [
        { id: 0, label: "Video ID" },
        { id: 1, label: "Thumbnail" },
        { id: 2, label: "Video Title" },
        { id: 3, label: "-" },
        { id: 4, label: "-" },
        { id: 5, label: "-" },
      ],
    },
    {
      id: 1,
      label: "Music Details",
      childData: [
        { id: 0, label: "Music Source" },
        { id: 1, label: "Music ID" },
        { id: 2, label: "Music Creator" },
        { id: 3, label: "-" },
        { id: 4, label: "-" },
        { id: 5, label: "-" },
      ],
    },
    {
      id: 2,
      label: "Upload Details",
      childData: [
        { id: 0, label: "Upload Date" },
        { id: 1, label: "Upload Time" },
        { id: 2, label: "Upload Period" },
        { id: 3, label: "-" },
        { id: 4, label: "-" },
        { id: 5, label: "-" },
      ],
    },
    {
      id: 3,
      label: "User Details",
      childData: [
        { id: 0, label: "User Name" },
        { id: 1, label: "User ID" },
        { id: 2, label: "Fanfare ID" },
        { id: 3, label: "-" },
        { id: 4, label: "-" },
        { id: 5, label: "-" },
      ],
    },
    {
      id: 4,
      label: "View Details",
      childData: [
        { id: 0, label: "Total Views" },
        { id: 1, label: "Total Watch Time" },
        { id: 2, label: "-" },
        { id: 3, label: "-" },
        { id: 4, label: "-" },
        { id: 5, label: "-" },
      ],
    },
    {
      id: 5,
      label: "Engagement Details",
      childData: [
        { id: 0, label: "Total Likes" },
        { id: 1, label: "Total Comments" },
        { id: 2, label: "Total Shares" },
        { id: 3, label: "-" },
        { id: 4, label: "-" },
        { id: 5, label: "-" },
      ],
    },
    {
      id: 6,
      label: "Score & Ranking",
      childData: [
        { id: 0, label: "Watch Time Score" },
        { id: 1, label: "Contest Score" },
        { id: 2, label: "Trending Score" },
        { id: 3, label: "-" },
        { id: 4, label: "-" },
        { id: 5, label: "-" },
      ],
    },
    {
      id: 7,
      label: "AD & Monetization",
      childData: [
        { id: 0, label: "Total Awareness Days" },
        { id: 1, label: "Total Product Days" },
        { id: 2, label: "AD Reach" },
        { id: 3, label: "-" },
        { id: 4, label: "-" },
        { id: 5, label: "-" },
      ],
    },
    {
      id: 8,
      label: "Video Contest",
      childData: [
        { id: 0, label: "-" },
        { id: 1, label: "-" },
        { id: 2, label: "-" },
        { id: 3, label: "-" },
        { id: 4, label: "-" },
        { id: 5, label: "-" },
      ],
    },
    {
      id: 9,
      label: "Others",
      childData: [
        { id: 0, label: "-" },
        { id: 1, label: "-" },
        { id: 2, label: "-" },
        { id: 3, label: "-" },
        { id: 4, label: "-" },
        { id: 5, label: "-" },
      ],
    },
  ]);

  return (
    <>
      <Grid container css={fieldTable}>
        {/* Selected Fields header Grid */}
        <Grid css={headerButtonGrid}>
          <Button variant='text' css={fieldHeaderButton} disabled>
            Selected Fields
          </Button>
        </Grid>

        {/* Selected Fields data Grid */}
        <Grid container css={fieldColumnGrid}>
          {selectedFieldsState.map(eachSelectedFieldsState => {
            const label = eachSelectedFieldsState.label;
            const childData = eachSelectedFieldsState.childData;

            return (
              <FieldTableColumnComponent
                key={eachSelectedFieldsState.id}
                label={label}
                childData={childData}
              ></FieldTableColumnComponent>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
};

export default FieldTableComponent;
