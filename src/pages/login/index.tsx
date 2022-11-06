import { useState, ReactNode } from "react";

import Link from "next/link";

// ** MUI Components
import Button, { ButtonProps } from "@mui/material/Button";
import MuiLink from "@mui/material/Link";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Box, { BoxProps } from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import { styled } from "@mui/material/styles";
import FormHelperText from "@mui/material/FormHelperText";
import InputAdornment from "@mui/material/InputAdornment";
import Typography from "@mui/material/Typography";
import MuiFormControlLabel, { FormControlLabelProps } from "@mui/material/FormControlLabel";

// ** Icons Imports
import EyeOutline from "mdi-material-ui/EyeOutline";
import EyeOffOutline from "mdi-material-ui/EyeOffOutline";

// ** Third Party Imports
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// ** Hooks
import { useAuth } from "src/hooks/useAuth";
// import useBgColor from "src/@core/hooks/useBgColor";
import { useSettings } from "src/@core/hooks/useSettings";

// ** Layout Import
import BlankLayout from "src/@core/layouts/BlankLayout";

// ** Styled Components

const Wrapper = styled(Box)<BoxProps>(({ }) => ({
  width: "100%",
}));

const BoxWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  flexGrow: 1,
  width: "100%",
  [theme.breakpoints.down("md")]: {
    maxWidth: 400,
  },
}));

const CustomButton = styled(Button)<ButtonProps>(({ }) => ({
  width: "250px",
  height: "68px",
  marginBottom: "50px",
  background: "linear-gradient(360deg, #AE061A -64.72%, #FF5407 100%)",
  borderRadius: "5px",
}));

// const CustomTextField = styled(TextField)<TextFieldProps>(({ theme }) => ({
//   borderRadius: '0',
//   background:'#2D353E',
//   width: 500 ,
//   height:'74px' ,
//   border:'none',
//  }))

const FormControlLabel = styled(MuiFormControlLabel)<FormControlLabelProps>(({ theme }) => ({
  "& .MuiFormControlLabel-label": {
    fontSize: "0.875rem",
    color: theme.palette.text.secondary,
  },
}));

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(5).required(),
});

const defaultValues = {
  password: "admin",
  email: "admin@materialize.com",
};

interface FormData {
  email: string;
  password: string;
}

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // ** Hooks
  const auth = useAuth();
  // const theme = useTheme();
  // const bgClasses = useBgColor();
  // const { settings } = useSettings();

  // ** Vars
  // const { skin } = settings;

  const {
    control,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    const { email, password } = data;
    auth.login({ email, password }, () => {
      setError("email", {
        type: "manual",
        message: "Email or Password is invalid",
      });
    });
  };

  return (
    <Box className='content-right'>
      <Wrapper>
        <Box
          sx={{
            p: 7,
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#161F29",
          }}
        >
          <BoxWrapper>
            <Box
              sx={{
                top: 30,
                left: 40,
                display: "flex",
                position: "absolute",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img width={210} height={62} src='https://i.ibb.co/QvVTdGf/ff-logo.png' alt='' />
            </Box>
            <Box sx={{ mb: 6, textAlign: "center", marginBottom: "70px" }}>
              <Typography variant='h4' sx={{ color: "#FFFFFF", fontWeight: 700 }}>
                Brand Dashboard
              </Typography>
            </Box>

            {/* <Alert icon={false} sx={{ py: 3, mb: 6, ...bgClasses.primaryLight, '& .MuiAlert-message': { p: 0 } }}>
              <Typography variant='caption' sx={{ mb: 2, display: 'block', color: 'primary.main' }}>
                Admin: <strong>admin@materialize.com</strong> / Pass: <strong>admin</strong>
              </Typography>
              <Typography variant='caption' sx={{ display: 'block', color: 'primary.main' }}>
                Client: <strong>client@materialize.com</strong> / Pass: <strong>client</strong>
              </Typography>
            </Alert> */}

            <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
              <Box sx={{ textAlign: "center", mb: 6 }}>
                <FormControl color='secondary'>
                  <Controller
                    name='email'
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { value, onChange, onBlur } }) => (
                      <OutlinedInput
                        sx={{
                          background: "#2D353E",
                          width: "100%",
                          height: "74px",
                          borderRadius: "none",
                          color: "white",
                          marginRight: "300px",
                        }}
                        autoFocus
                        value={value}
                        onBlur={onBlur}
                        onChange={onChange}
                        error={Boolean(errors.email)}
                        placeholder='Email'
                      />
                    )}
                  />
                  {errors.email && <FormHelperText sx={{ color: "error.main" }}>{errors.email.message}</FormHelperText>}
                </FormControl>
              </Box>

              <Box sx={{ textAlign: "center" }}>
                <FormControl color='secondary'>
                  <Controller
                    name='password'
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { value, onChange, onBlur } }) => (
                      <OutlinedInput
                        sx={{
                          background: "#2D353E",
                          width: "100%",
                          height: "74px",
                          borderRadius: "none",
                          color: "white",
                          marginRight: "260px",
                        }}
                        value={value}
                        onBlur={onBlur}
                        placeholder='Password'
                        onChange={onChange}
                        id='auth-login-v2-password'
                        error={Boolean(errors.password)}
                        type={showPassword ? "text" : "password"}
                        endAdornment={
                          <InputAdornment position='end'>
                            <IconButton
                              edge='end'
                              onMouseDown={e => e.preventDefault()}
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? <EyeOutline /> : <EyeOffOutline />}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    )}
                  />
                  {errors.password && (
                    <FormHelperText sx={{ color: "error.main" }} id=''>
                      {errors.password.message}
                    </FormHelperText>
                  )}
                </FormControl>
              </Box>
              <Box
                sx={{
                  color: "#FFFFFF",
                  marginTop: '10px',
                  textAlign: 'end',
                  width: '63%'
                }}
              >
                <Link passHref href='/forgot-password'>
                  <Typography component={MuiLink} sx={{ color: "#FFFFFF", fontWeight: "700", fontSize: "16px", }}>
                    Forgot Password?
                  </Typography>
                </Link>
              </Box>
              <Box sx={{ textAlign: "center", py: 5 }}>
                <FormControlLabel
                  label='Remember Me'
                  control={<Checkbox color='secondary' sx={{ color: "#FFFFFF" }} />}
                  sx={{ "& .MuiFormControlLabel-label": { color: "#FFFFFF" } }}
                />
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <CustomButton variant='contained' type='submit' sx={{ fontWeight: 700 }}>
                  Sign In
                </CustomButton>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Typography variant='subtitle1' sx={{ my: 4, color: "rgba(255, 255, 255, 0.7) ", fontWeight: 400 }}>
                  Have you not yet registered?
                </Typography>
                <Typography>
                  <Link passHref href='/register'>
                    <Typography
                      variant='subtitle1'
                      component={MuiLink}
                      sx={{ color: "#0F60FF", fontWeight: 700, textDecoration: "underline" }}
                    >
                      Register Now
                    </Typography>
                  </Link>
                </Typography>
              </Box>
            </form>
          </BoxWrapper>
        </Box>
      </Wrapper>
    </Box>
  );
};

LoginPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>;

LoginPage.guestGuard = true;

export default LoginPage;
