import * as React from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ImgLoader from "../utils/ImageLoader";
import Image from "next/image";
import RegisterForm from "../components/auth/RegisterForm";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { refreshToken } from "../redux/action/auth.action";
import Head from "next/head";

const theme = createTheme();

export default function Register() {
  const dispatch = useDispatch();

  const { auth } = useSelector((state) => state);

  const router = useRouter();

  React.useEffect(() => {
    dispatch(refreshToken());
    if (auth.access_token) {
      router.push("/");
    }
  }, [auth, router, dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Max fashion- register</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container component="main" maxWidth="xs" sx={{ minHeight: "100vh" }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
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
            Sign Up
          </Typography>

          <RegisterForm />
        </Box>
      </Container>
    </ThemeProvider>
  );
}
