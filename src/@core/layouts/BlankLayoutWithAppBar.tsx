// ** AppBar Imports
import AppBar from "src/@core/layouts/components/blank-layout-with-appBar";

// ** MUI Imports
import Box, { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material/styles";

// ** Types
import { BlankLayoutWithAppBarProps } from "./types";

// Styled component for Blank Layout with AppBar component
const BlankLayoutWithAppBarWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  height: "100vh",

  // For V1 Blank layout pages
  "& .content-center": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(5),
    minHeight: `calc(100vh - ${theme.spacing((theme.mixins.toolbar.minHeight as number) / 4)})`,
  },

  // For V2 Blank layout pages
  "& .content-right": {
    display: "flex",
    overflowX: "hidden",
    position: "relative",
    minHeight: `calc(100vh - ${theme.spacing((theme.mixins.toolbar.minHeight as number) / 4)})`,
  },
}));

const BlankLayoutWithAppBar = (props: BlankLayoutWithAppBarProps) => {
  // ** Props
  const { children } = props;

  return (
    <BlankLayoutWithAppBarWrapper>
      <AppBar />
      <Box
        className='app-content'
        sx={{
          overflowX: "hidden",
          position: "relative",
          minHeight: theme => `calc(100vh - ${theme.spacing((theme.mixins.toolbar.minHeight as number) / 4)})`,
        }}
      >
        {children}
      </Box>
    </BlankLayoutWithAppBarWrapper>
  );
};

export default BlankLayoutWithAppBar;