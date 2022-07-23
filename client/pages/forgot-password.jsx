import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Image from "next/image";
import ImgLoader from "../utils/ImageLoader";
import ForgotForm from "../components/auth/ForgotForm";

const theme = createTheme();

const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
};

const Login = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get("email"),
            password: data.get("password"),
        });
    };

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
                        Change Password
                    </Typography>

                    {/* <RegisterForm /> */}
                    <ForgotForm />
                </Box>
            </Container>
        </ThemeProvider>
    );
};
export default Login;
