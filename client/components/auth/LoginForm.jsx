import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useDispatch } from "react-redux";
import { login } from "../../redux/action/auth.action";

const LoginForm = () => {
    const initState = { email: "", password: "" };
    const [userLogin, setUserLogin] = useState(initState);
    const { email, password } = userLogin;

    const [typePass, setTypePass] = useState(false);

    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserLogin({
            ...userLogin,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(login(userLogin));
    };

    return (
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        autoComplete="off"
                    />
                </Grid>

                <Grid item xs={12} sx={{ position: "relative" }}>
                    <TextField
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type={typePass ? "text" : "password"}
                        id="outlined-adornment-password"
                        value={password}
                        onChange={handleChange}
                        autoComplete="off"
                    />
                    <small
                        onClick={() => {
                            setTypePass(!typePass);
                        }}
                        style={{
                            cursor: "pointer",
                            position: "absolute",
                            top: "45%",
                            right: "4%",
                            // transform: "translateY(-50%)",
                            opacity: 0.75,
                        }}
                    >
                        {typePass ? <VisibilityOff /> : <Visibility />}
                    </small>
                </Grid>
            </Grid>

            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Sign In
            </Button>

            <Grid container>
                <Grid item xs>
                    <Link href="/forgot-password">
                        <a
                            style={{
                                color: "blue",
                                textDecoration: "underline",
                                margin: "0 0.25rem",
                                color: "crimson",
                            }}
                        >
                            Forgot password?
                        </a>
                    </Link>
                </Grid>

                <Grid item>
                    <div>
                        {"Don't have an account?"}
                        <Link href="/register">
                            <a
                                style={{
                                    color: "blue",
                                    textDecoration: "underline",
                                    margin: "0 0.25rem",
                                    color: "crimson",
                                }}
                            >
                                Sign Up
                            </a>
                        </Link>
                    </div>
                </Grid>
            </Grid>
        </Box>
    );
};

export default LoginForm;
