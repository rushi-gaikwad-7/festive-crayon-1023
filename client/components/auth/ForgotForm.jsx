import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const ForgotForm = () => {
    const initState = {
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
    };
    const [resetPassword, setResetPassword] = useState(initState);

    const { oldPassword, newPassword, confirmPassword } = resetPassword;

    const [oldTypePass, setOldTypePass] = useState(false);
    const [newTypePass, setNewTypePass] = useState(false);
    const [confirmTypePass, setConfirmTypePass] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setResetPassword({
            ...resetPassword,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
       
    };

    return (
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sx={{ position: "relative" }}>
                    <TextField
                        required
                        fullWidth
                        name="oldPassword"
                        label="Old Password"
                        type={oldTypePass ? "text" : "password"}
                        id="outlined-adornment-password"
                        value={oldPassword}
                        onChange={handleChange}
                        autoComplete="off"
                    />
                    <small
                        onClick={() => {
                            setOldTypePass(!oldTypePass);
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
                        {oldTypePass ? <VisibilityOff /> : <Visibility />}
                    </small>
                </Grid>

                <Grid item xs={12} sx={{ position: "relative" }}>
                    <TextField
                        required
                        fullWidth
                        name="newPassword"
                        label="New Password"
                        type={newTypePass ? "text" : "password"}
                        id="outlined-adornment-password"
                        value={newPassword}
                        onChange={handleChange}
                        autoComplete="off"
                    />
                    <small
                        onClick={() => {
                            setNewTypePass(!newTypePass);
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
                        {newTypePass ? <VisibilityOff /> : <Visibility />}
                    </small>
                </Grid>

                <Grid item xs={12} sx={{ position: "relative" }}>
                    <TextField
                        required
                        fullWidth
                        name="confirmPassword"
                        label="Confirm New Password"
                        type={confirmTypePass ? "text" : "password"}
                        id="outlined-adornment-password"
                        value={confirmPassword}
                        onChange={handleChange}
                        autoComplete="off"
                    />
                    <small
                        onClick={() => {
                            setConfirmTypePass(!confirmTypePass);
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
                        {confirmTypePass ? <VisibilityOff /> : <Visibility />}
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

export default ForgotForm;
