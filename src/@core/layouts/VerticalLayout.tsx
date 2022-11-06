// ** React Imports
import { useState } from "react";

// ** Icons Imports
import ArrowUp from "mdi-material-ui/ArrowUp";
// ** Components
import Customizer from "src/@core/components/customizer";
import ScrollToTop from "src/@core/components/scroll-to-top";
// ** Type Import
import { LayoutProps } from "src/@core/layouts/types";
// ** Styled Component
import DatePickerWrapper from "src/@core/styles/libs/react-datepicker";
import SideBarContentComponents from "src/components/SideBarContentComponents";
import SideBarHover from "src/components/SideBarHover";
// ** Theme Config Import
import themeConfig from "src/configs/themeConfig";

// ** MUI Imports
import Box, { BoxProps } from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import { styled } from "@mui/material/styles";

import Footer from "./components/shared-components/footer";
import AppBar from "./components/vertical/appBar";
import Navigation from "./components/vertical/navigation";
import VerticalNavGroup
    from "./components/vertical/navigation/VerticalNavGroup";

const VerticalLayoutWrapper = styled("div")({
    height: "100%",
    display: "flex",
    marginTop: "0px !important",
});

const MainContentWrapper = styled(Box)<BoxProps>({
    flexGrow: 1,
    minWidth: 0,
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column",
});

const ContentWrapper = styled("main")(({ theme }) => ({
    flexGrow: 1,
    width: "100%",
    padding: theme.spacing(6),
    transition: "padding .25s ease-in-out",
    [theme.breakpoints.down("sm")]: {
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
    },
}));

const VerticalLayout = (props: LayoutProps) => {
    // ** Props
    const [isClicked, setIsClicked] = useState(false);

    // console.log(isClicked);

    // const verticalNavItems = [
    //     { title: 'Videos', children: [{name: 'video 1', path: '/video1'}] },
    //     { title: 'Brands', children: [{name: 'Brands 1', path: '/b1'}] },
    //     { title: 'Ad', children: [{name: 'Ad 1', path: '/a1'}] },
    //   ];

    // const avengers = characters.filter(character => character.team === 'Avengers');
    // , isClicked, titlestring

    const { hidden, settings, children, scrollToTop } = props;

    const { item, parent } = VerticalNavGroup;

    // ** Vars
    const { skin, navHidden, contentWidth } = settings;
    const { navigationSize, disableCustomizer, collapsedNavigationSize } =
        themeConfig;
    const navWidth = navigationSize;
    const navigationBorderWidth = skin === "bordered" ? 1 : 0;
    const collapsedNavWidth = collapsedNavigationSize;

    // ** States
    const [navHover, setNavHover] = useState<boolean>(false);
    const [navVisible, setNavVisible] = useState<boolean>(false);

    // ** Toggle Functions
    const toggleNavVisibility = () => setNavVisible(!navVisible);

    return (
        <>
            {/* AppBar Component */}
            <AppBar toggleNavVisibility={toggleNavVisibility} {...props} />

            <VerticalLayoutWrapper className="layout-wrapper">
                {/* Navigation Menu */}
                {navHidden &&
                themeConfig.layout === "vertical" &&
                !(navHidden && settings.lastLayout === "horizontal") ? null : (
                    <Navigation
                        navWidth={navWidth}
                        navHover={navHover}
                        navVisible={navVisible}
                        setNavHover={setNavHover}
                        setNavVisible={setNavVisible}
                        collapsedNavWidth={collapsedNavWidth}
                        toggleNavVisibility={toggleNavVisibility}
                        navigationBorderWidth={navigationBorderWidth}
                        {...props}
                    />
                )}{" "}
                <SideBarContentComponents>
                    {navHover ? <SideBarHover /> : null}
                </SideBarContentComponents>
                <MainContentWrapper className="layout-content-wrapper">
                    {/* <Button
                        style={{ color: "red" }}
                        onClick={() => setIsClicked(!isClicked)}
                    >
                        click here
                    </Button>
                    {isClicked ? <p>lorem</p> : null} */}

                    {/* Content */}
                    <ContentWrapper
                        className="layout-page-content"
                        sx={{
                            ...(contentWidth === "boxed" && {
                                mx: "auto",
                                "@media (min-width:1440px)": { maxWidth: 1440 },
                                "@media (min-width:1200px)": {
                                    maxWidth: "100%",
                                },
                            }),
                        }}
                    >
                        {children}
                    </ContentWrapper>

                    {/* Footer Component */}
                    <Footer {...props} />

                    {/* Portal for React Datepicker */}
                    <DatePickerWrapper sx={{ zIndex: 11 }}>
                        <Box id="react-datepicker-portal"></Box>
                    </DatePickerWrapper>
                </MainContentWrapper>
            </VerticalLayoutWrapper>

            {/* Customizer */}
            {disableCustomizer || hidden ? null : <Customizer />}

            {/* Scroll to top button */}
            {scrollToTop ? (
                scrollToTop(props)
            ) : (
                <ScrollToTop className="mui-fixed">
                    <Fab size="small" aria-label="scroll back to top">
                        <ArrowUp />
                    </Fab>
                </ScrollToTop>
            )}
        </>
    );
};

export default VerticalLayout;
