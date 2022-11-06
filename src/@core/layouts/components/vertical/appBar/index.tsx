// ** React Imports
import { ReactNode } from "react";

// ** Type Import
import { Settings } from "src/@core/context/settingsContext";
// ** Util Import
import { hexToRGBA } from "src/@core/utils/hex-to-rgba";

// ** MUI Imports
import MuiAppBar, { AppBarProps } from "@mui/material/AppBar";
import {
    styled,
    useTheme,
} from "@mui/material/styles";
import MuiToolbar, { ToolbarProps } from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";

interface Props {
    hidden: boolean;
    settings: Settings;
    toggleNavVisibility: () => void;
    saveSettings: (values: Settings) => void;
    verticalAppBarContent?: (props?: any) => ReactNode;
}

const AppBar = styled(MuiAppBar)<AppBarProps>(({ theme }) => ({
    transition: "none",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",

    // padding: theme.spacing(0, 6),
    backgroundColor: "#FFFFFF",
    color: theme.palette.text.primary,
    minHeight: theme.mixins.toolbar.minHeight,
    [theme.breakpoints.down("sm")]: {
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
    },
}));

const Toolbar = styled(MuiToolbar)<ToolbarProps>(({ theme }) => ({
    width: "100%",
    padding: "0 !important",
    borderBottomLeftRadius: theme.shape.borderRadius,
    borderBottomRightRadius: theme.shape.borderRadius,
    minHeight: `${theme.mixins.toolbar.minHeight}px !important`,
    transition:
        "padding .25s ease-in-out, box-shadow .25s ease-in-out, backdrop-filter .25s ease-in-out",
}));

const LayoutAppBar = (props: Props) => {
    // ** Props
    const { settings, verticalAppBarContent: userVerticalAppBarContent } =
        props;

    // ** Hooks
    const theme = useTheme();
    const scrollTrigger = useScrollTrigger({
        threshold: 0,
        disableHysteresis: true,
    });

    // ** Vars
    const { skin, appBar, appBarBlur, contentWidth } = settings;

    const appBarFixedStyles = () => {
        return {
            px: `${theme.spacing(6)} !important`,
            ...(appBarBlur && { backdropFilter: "blur(8px)" }),

            backgroundColor: hexToRGBA(
                theme.palette.background.paper,
                appBarBlur ? 0.9 : 1
            ),
            ...(skin === "bordered" && {
                border: `1px solid ${theme.palette.divider}`,
                borderTopWidth: 0,
            }),
        };
    };

    if (appBar === "hidden") {
        return null;
    }

    return (
        <AppBar
            elevation={0}
            color="default"
            className="layout-navbar"
            position={appBar === "fixed" ? "sticky" : "static"}
        >
            <Toolbar className="navbar-content-container">
                {(userVerticalAppBarContent &&
                    userVerticalAppBarContent(props)) ||
                    null}
            </Toolbar>
        </AppBar>
    );
};

export default LayoutAppBar;
