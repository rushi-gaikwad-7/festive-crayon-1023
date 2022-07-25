import Router, { useRouter } from "next/router";
import React from "react";
import styles from "../styles/account.module.css";
import { useDispatch } from "react-redux";
import { logout } from "../redux/action/auth.action";
import Head from "next/head";

const account = () => {
  const router = useRouter();

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    router.push("login");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Max fashion- account</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h2>Oh no! You are leaving...</h2>
      <h3>Are you sure?</h3>
      <button className={styles.logout} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default account;
