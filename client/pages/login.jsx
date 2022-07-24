import * as React from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Image from "next/image";
import LoginForm from "../components/auth/LoginForm";
import ImgLoader from "../utils/ImageLoader";
import { useSelector, useDispatch } from "react-redux";
import Router, { useRouter } from "next/router";
import { refreshToken } from "../redux/action/auth.action";

const theme = createTheme();

const Login = () => {
  const dispatch = useDispatch();

  const { auth, alert } = useSelector((state) => state);

  const router = useRouter();

  React.useEffect(() => {
    dispatch(refreshToken());
    if (auth.access_token) {
      router.push("/");
    }
  }, [auth, router, dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" sx={{ minHeight: "100vh" }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{
              background: "#fff",
              width: "200px",
              height: "100px",
            }}
          >
            <Image
              src="https://www.landmarkgroup.com/int/sites/default/files/Brand-logo/New%20Max%20Logo-%20Eng%20With%20Outline_1.png"
              loader={ImgLoader}
              alt="logo"
              layout="fill"
            />
          </Avatar>
          <Typography component="h1" variant="h4">
            Sign in
          </Typography>

          <LoginForm />
        </Box>
      </Container>
    </ThemeProvider>
  );
};
export default Login;
