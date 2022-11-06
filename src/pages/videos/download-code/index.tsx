// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";

// ** Styled Component Import
import ApexChartWrapper from "src/@core/styles/libs/react-apexcharts";

// ** Components
import TabbarComponent from "../../../../src/components/TabbarComponent";
import DownloadCodeCodeList from "src/views/videos/downloadCodeCodeList/downloadCodeCodeListComponents/index";
import { useState } from "react";
import DownloadCodeGenerateCode from "src/views/videos/downloadCodeCodeList/downloadCodeGenerateCodeComponents/index";

const tabs = [
  {
    key: "generateCode",
    title: "Generate Code",
  },
  {
    key: "codeList",
    title: "Code List",
  },
];

const AnalyticsCongratulations = () => {
  const [active, setActive] = useState<string>(""); //
  /**
   * Handle on tab change
   */
  const tabChangeHandler = (key: string) => {
    console.log("key", key);
    setActive(key);
  };

  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={12}>
          <Typography variant='h3' sx={{ mb: 4.5 }}>
            <Box component='span' sx={{ fontWeight: "bold" }}>
              Download Code
            </Box>
          </Typography>
        </Grid>
      </Grid>
      <Card sx={{ position: "relative" }}>
        <CardContent sx={{ p: theme => `${theme.spacing(9, 7.5, 9, 7.5)} !important` }}>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={12}>
              <TabbarComponent options={tabs} activekey={active} onChange={tabChangeHandler} />
            </Grid>

            {active == "codeList" && <DownloadCodeCodeList></DownloadCodeCodeList>}

            {active == "generateCode" && <DownloadCodeGenerateCode></DownloadCodeGenerateCode>}

          </Grid>
        </CardContent>
      </Card>
    </ApexChartWrapper>
  );
};

export default AnalyticsCongratulations;
