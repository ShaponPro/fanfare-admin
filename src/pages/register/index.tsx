import { ReactNode, useState, Fragment, MouseEvent } from "react";

// ** Next Imports
import Link from "next/link";

// ** MUI Components
import InputBase from "@mui/material/InputBase";
import Button, { ButtonProps } from "@mui/material/Button";
import Box, { BoxProps } from "@mui/material/Box";
// import useMediaQuery from "@mui/material/useMediaQuery";
import { styled, useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Card, { CardProps } from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import Grid, { GridProps } from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
// import BrandLogo from "public/images/logo/brandlogo.png";
// import CoverImage from "public/images/logo/coverImage.png";

//** import Icon
import SendIcon from "@mui/icons-material/Send";

//** import component
import NabBarComponent from "src/components/NabBarComponent";

// ** Third Party Imports
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

// ** Layout Import
import BlankLayout from "src/@core/layouts/BlankLayout";

// ** Hooks
import { useAuth } from "src/hooks/useAuth";
import { useSettings } from "src/@core/hooks/useSettings";

const defaultValues = {
  email: "",
  username: "",
  password: "",
  terms: false,
};
interface FormData {
  email: string;
  terms: boolean;
  username: string;
  password: string;
}

// ** Styled Components

const BoxContainer = styled(Grid)<GridProps>(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  padding: "20px",
  margin: "20px",
  gap: "20px",
  width: "98%",
  [theme.breakpoints.up("md")]: {
    minWidth: "40%",
  },
  [theme.breakpoints.up("sm")]: {
    minWidth: "20%",
  },
  height: "100%",
  background: " #ffffff",
  boxShadow: "2px 5px 20px rgba(22, 31, 41, 0.1)",
  borderRadius: "10px",
}));

const RightWrapper = styled(Grid)<GridProps>(({ theme }) => ({
  width: "50%",
  [theme.breakpoints.up("md")]: {
    minWidth: "25%",
  },
  [theme.breakpoints.up("sm")]: {
    minWidth: "25%",
  },
}));

const LeftWrapper = styled(Grid)<GridProps>(({ theme }) => ({
  width: "50%",
  [theme.breakpoints.up("md")]: {
    minWidth: "25%",
  },
  [theme.breakpoints.up("sm")]: {
    minWidth: "25%",
  },
}));

const BoxWrapper = styled(Box)<BoxProps>(({  }) => ({
  background: " #f3f3f4",
  padding: "20px",
  borderRadius: "5px",
  marginTop: "25px",
}));

const CardWrapper = styled(Card)<CardProps>(({  }) => ({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
  alignItems: "center",
  padding: "20px",
  width: "100%",
  height: "190px",
  background: "#f3f3f4",
  borderRadius: "5px",
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  borderRadius: "0",
  width: "100%",
  height: "39px",
  padding: "5px",
  boxShadow: " inset 1px 1.5px 5px rgba(22, 31, 41, 0.2)",
}));

const SubmitButton = styled(Button)<ButtonProps>(({  }) => ({
  height: "42px",
  background: "#57ce66",
  borderRadius: "3px",
  border: "none",
  color: "white",
  padding: "10px",
}));

const CancleButton = styled(Button)<ButtonProps>(({  }) => ({
  height: "42px",
  background: "#F3F3F4",
  borderRadius: "3px",
  border: "none",
  padding: "10px",
  color: "rgba(22, 31, 41, 0.5)",
}));

const Register = () => {
  // ** States

  // ** Hooks
  // const theme = useTheme();
  const { register } = useAuth();
  const { settings } = useSettings();

  // ** Vars
  // const { skin } = settings;
  const schema = yup.object().shape({
    password: yup.string().min(5).required(),
    username: yup.string().min(3).required(),
    email: yup.string().email().required(),
    terms: yup.bool().oneOf([true], "You must accept the privacy policy & terms"),
  });

  const { setError, handleSubmit } = useForm({
    defaultValues,
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    const { email, username, password } = data;
    register({ email, username, password }, err => {
      if (err.email) {
        setError("email", {
          type: "manual",
          message: err.email,
        });
      }
      if (err.username) {
        setError("username", {
          type: "manual",
          message: err.username,
        });
      }
    });
  };

  return (
    <>
      <NabBarComponent />

      <BoxContainer>
        {/***** Left side Container */}
        <LeftWrapper>
          {/*****Card 1 */}
          <CardWrapper sx={{ display: "flex" }}>
            <Typography component='div' variant='h5'>
              <b>Brand Logo*</b>
            </Typography>
            <CardContent>
              {/* <CardMedia component='img' sx={{ width: 120 }} image={BrandLogo.src} alt='Brand Logo' /> */}
              <Typography
                variant='caption'
                color='text.secondary'
                sx={{ fontWeight: 400, color: "rgba(48, 48, 48, 0.5)" }}
              >
                Recommended image size 150px X 150px and max 150kb
              </Typography>
            </CardContent>
          </CardWrapper>
          {/*****Card 1 End*/}

          <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
            <BoxWrapper>
              <Grid item xs={12} md={6}>
                <Typography variant='subtitle1' sx={{ fontWeight: 600 }}>
                  *Brand Name
                </Typography>
                <Item>
                  <InputBase placeholder='Search and Filter' style={{ fontSize: "13px" }} />
                </Item>
              </Grid>

              <Grid item xs={12} md={6} sx={{ marginTop: "10px" }}>
                <Typography variant='subtitle1' sx={{ fontWeight: 600 }}>
                  Parent Brand Name
                </Typography>
                <Item>
                  <InputBase placeholder='Type parent brand name' style={{ fontSize: "13px" }} />
                </Item>
              </Grid>

              <Grid item xs={12} md={6} sx={{ marginTop: "10px" }}>
                <Typography variant='subtitle1' sx={{ fontWeight: 600 }}>
                  Company Name
                </Typography>
                <Item>
                  <InputBase placeholder='Type company name' style={{ fontSize: "13px" }} />
                </Item>
              </Grid>

              <Grid item xs={12} md={6} sx={{ marginTop: "10px" }}>
                <Typography variant='subtitle1' sx={{ fontWeight: 600 }}>
                  Company Address
                </Typography>
                <Item>
                  <InputBase placeholder='Type company address' style={{ fontSize: "13px" }} />
                </Item>
              </Grid>

              <Grid item xs={12} md={6} sx={{ marginTop: "10px" }}>
                <Typography variant='subtitle1' sx={{ fontWeight: 600 }}>
                  Description
                </Typography>
                <Item>
                  <InputBase placeholder='Type description' style={{ fontSize: "13px" }} />
                </Item>
              </Grid>
            </BoxWrapper>

            <BoxWrapper>
              <Grid item xs={12} md={6}>
                <Typography variant='subtitle1' sx={{ fontWeight: 600 }}>
                  Business Name
                </Typography>
                <Item sx={{ display: "flex", gap: 3 }}>
                  <InputBase placeholder='Type business name' style={{ fontSize: "13px" }} />
                </Item>
              </Grid>

              <Grid item xs={12} md={6} sx={{ marginTop: "10px" }}>
                <Typography variant='subtitle1' sx={{ fontWeight: 600 }}>
                  Upload TIN
                </Typography>
                <Item sx={{ display: "flex", gap: 3 }}>
                  <Button variant='outlined' component='label' size='small' color='secondary'
                  sx={{fontSize:"13px", backgroundColor:'#F3F3F4',color:'black', textTransform:'capitalize'}}>
                    Choose File
                    <input type='file' hidden />
                  </Button>
                  <InputBase placeholder=' No File Chosen' style={{ fontSize: "13px" }} />
                </Item>

                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Box></Box>
                  <Typography
                    variant='caption'
                    color='text.secondary'
                    sx={{ fontWeight: 400, color: "rgba(48, 48, 48, 0.5)", paddingTop: "10px" }}
                  >
                    Recommended image format pdf and max 500kb
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} md={6} sx={{ marginTop: "10px" }}>
                <Typography variant='subtitle1' sx={{ fontWeight: 600 }}>
                  Upload BIN
                </Typography>
                <Item sx={{ display: "flex", gap: 3 }}>
                  <Button variant='outlined' component='label' size='small' color='secondary'
                   sx={{fontSize:"13px", backgroundColor:'#F3F3F4',color:'black', textTransform:'capitalize'}}>
                    Choose File
                    <input type='file' hidden />
                  </Button>
                  <InputBase placeholder=' No File Chosen' style={{ fontSize: "13px" }} />
                </Item>

                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Box></Box>
                  <Typography
                    variant='caption'
                    color='text.secondary'
                    sx={{ fontWeight: 400, color: "rgba(48, 48, 48, 0.5)", paddingTop: "10px" }}
                  >
                    Recommended image format pdf and max 500kb
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} md={6} sx={{ marginTop: "10px" }}>
                <Typography variant='subtitle1' sx={{ fontWeight: 600 }}>
                  Upload NID
                </Typography>
                <Item sx={{ display: "flex", gap: 3 }}>
                  <Button variant='outlined' component='label' size='small' color='secondary'
                  sx={{fontSize:"13px", backgroundColor:'#F3F3F4',color:'black', textTransform:'capitalize'}}>
                    Choose File
                    <input type='file' hidden />
                  </Button>
                  <InputBase placeholder='  No File Chosen' style={{ fontSize: "13px" }} />
                </Item>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Box></Box>
                  <Typography
                    variant='caption'
                    color='text.secondary'
                    sx={{ fontWeight: 400, color: "rgba(48, 48, 48, 0.5)", paddingTop: "10px" }}
                  >
                    Recommended image format pdf and max 500kb
                  </Typography>
                </Box>
              </Grid>
            </BoxWrapper>
          </form>
        </LeftWrapper>
        {/***** Left side Container end****/}

        {/***** Right side Container */}
        <RightWrapper>
          {/*****Card 2 */}
          <CardWrapper sx={{ display: "flex" }}>
            <Typography component='div' variant='h5'>
              <b>Cover Image</b>
            </Typography>
            <CardContent>
              {/* <CardMedia component='img' sx={{ width: 200 }} image={CoverImage.src} alt='Brand Logo' /> */}
              <Typography
                variant='caption'
                color='text.secondary'
                sx={{ fontWeight: 400, color: "rgba(48, 48, 48, 0.5)" }}
              >
                Recommended image size 500px X 263px and max 300kb
              </Typography>
            </CardContent>
          </CardWrapper>
          {/*****Card 2  End*/}

          <BoxWrapper>
            <Grid item xs={12} md={6}>
              <Typography variant='subtitle1' sx={{ fontWeight: 600 }}>
                Website
              </Typography>
              <Item>
                <InputBase placeholder='Type web address' style={{ fontSize: "13px" }} />
              </Item>
            </Grid>

            <Grid item xs={12} md={6} sx={{ marginTop: "10px" }}>
              <Typography variant='subtitle1' sx={{ fontWeight: 600 }}>
                Social Media URL
              </Typography>
              <Item>
                <InputBase placeholder='Type social media address' style={{ fontSize: "13px" }} />
              </Item>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box></Box>
                <Typography variant='caption' color='text.secondary' sx={{ fontWeight: 400, color: "black",paddingTop: "10px" }}>
                  Max 5 Categories
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6} sx={{ marginTop: "10px" }}>
              <Typography variant='subtitle1' sx={{ fontWeight: 600 }}>
                Category
              </Typography>
              <Item>
                <InputBase placeholder='Type category' style={{ fontSize: "13px" }} />
              </Item>
            </Grid>

            <Grid item xs={12} md={6} sx={{ marginTop: "10px" }}>
              <Typography variant='subtitle1' sx={{ fontWeight: 600 }}>
                Preferred Hashtag
              </Typography>
              <Item>
                <InputBase placeholder='Type preferred hashtag' style={{ fontSize: "13px" }} />
              </Item>
            </Grid>

            <Grid item xs={12} md={6} sx={{ marginTop: "10px" }}>
              <Typography variant='subtitle1' sx={{ fontWeight: 600 }}>
                Preferred Brand Tag
              </Typography>
              <Item>
                <InputBase placeholder='Type preferred brand tag' style={{ fontSize: "13px" }} />
              </Item>
            </Grid>

            <Grid item xs={12} md={6} sx={{ marginTop: "10px" }}>
              <Typography variant='subtitle1' sx={{ fontWeight: 600 }}>
                Contact Name
              </Typography>
              <Item>
                <InputBase placeholder='Type contact name' style={{ fontSize: "13px" }} />
              </Item>
            </Grid>

            <Grid item xs={12} md={6} sx={{ marginTop: "10px" }}>
              <Typography variant='subtitle1' sx={{ fontWeight: 600 }}>
                Contact Number
              </Typography>
              <Item>
                <InputBase placeholder='Type contact number' style={{ fontSize: "13px" }} />
              </Item>
            </Grid>

            <Grid item xs={12} md={6} sx={{ marginTop: "10px" }}>
              <Typography variant='subtitle1' sx={{ fontWeight: 600 }}>
                Email*
              </Typography>
              <Item>
                <InputBase placeholder='Type email address' style={{ fontSize: "13px" }} />
              </Item>
            </Grid>
          </BoxWrapper>

          {/***** Button Box ****/}
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box></Box>
            <Box
              sx={{
                display: "flex",
                gap: 3,
                alignItems: "end",
                height: "180px",
              }}
            >
              <Link passHref href='/login'>
                <CancleButton>Cancel</CancleButton>
              </Link>
              <Link passHref href='/createBrand'>
                <SubmitButton startIcon={<SendIcon />}>Submit</SubmitButton>
              </Link>
            </Box>
          </Box>
        </RightWrapper>
        {/***** Right side Container End*/}
      </BoxContainer>
    </>
  );
};

Register.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>;

Register.guestGuard = true;

export default Register;
