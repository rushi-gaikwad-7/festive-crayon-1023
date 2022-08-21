import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useDispatch } from "react-redux";
import { register } from "../../redux/action/auth.action";

const RegisterForm = () => {
    const initState = {
        firstName: "",
        lastName: "",
        number: "",
        email: "",
        password: "",
    };

    const [userRegister, setUserRegister] = useState(initState);
    const { firstName, lastName, number, email, password } = userRegister;

    const [typePass, setTypePass] = useState(false);

    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserRegister({
            ...userRegister,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(register(userRegister));
       
    };

    return (
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        name="firstName"
                        required
                        fullWidth
                        id="firstName"
                        value={firstName}
                        onChange={handleChange}
                        autoComplete="off"
                        label="First Name"
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        value={lastName}
                        onChange={handleChange}
                        autoComplete="off"
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        // inputProps={{ maxLength: 12 }}
                        onInput={(e) => {
                            e.target.value = Math.max(
                                0,
                                parseInt(e.target.value)
                            )
                                .toString()
                                .slice(0, 10);
                        }}
                        id="number"
                        type="text"
                        label="Mobile Number"
                        name="number"
                        value={number}
                        onChange={handleChange}
                        autoComplete="off"
                    />
                </Grid>

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
                Sign Up
            </Button>

            <Grid container justifyContent="flex-end">
                <Grid item>
                    <div>
                        Already have an account?
                        <Link href="/login">
                            <a
                                style={{
                                    color: "blue",
                                    textDecoration: "underline",
                                    margin: "0 0.25rem",
                                    color: "crimson",
                                }}
                            >
                                Sign in
                            </a>
                        </Link>
                    </div>
                </Grid>
            </Grid>
        </Box>
    );
};

export default RegisterForm;
