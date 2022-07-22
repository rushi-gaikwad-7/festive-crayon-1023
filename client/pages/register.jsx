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
import { useSelector } from "react-redux";

const theme = createTheme();

export default function Register() {
    const { auth } = useSelector((state) => state);
    // console.log("auth: ", auth);

    const router = useRouter();

    React.useEffect(() => {
        if (auth.access_token) {
            router.push("/");
        }
    }, [auth, router]);

    return (
        <ThemeProvider theme={theme}>
            <Container
                component="main"
                maxWidth="xs"
                sx={{ minHeight: "100vh" }}
            >
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
