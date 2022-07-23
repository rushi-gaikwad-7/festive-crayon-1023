import Link from "next/link";
import React from "react";
import { LinkA } from "./Navbar";
import { FiSearch, FiHeart } from "react-icons/fi";
import { BsHandbag } from "react-icons/bs";
import styles from "../../styles/navbar.module.css";
import { useSelector } from "react-redux";

const Menu = () => {
    const { auth } = useSelector((state) => state);

    return (
        <div className={styles.navbarRegister}>
            <Link href={"#"}>
                <a className={styles.link}>More</a>
            </Link>
            {!auth.access_token ? (
                <Link href={"/login"}>
                    <a className={styles.link}>Sign Up/ Sign In</a>
                </Link>
            ) : (
                <Link href={"/account"}>
                    <a className={styles.link}>{auth.user.firstName}</a>
                </Link>
            )}
            <Link href={"#"}>
                <a className={styles.link}>
                    <FiHeart />
                </a>
            </Link>
            <Link href={"/Cart"}>
                <a className={styles.link}>
                    <BsHandbag />
                </a>
            </Link>
        </div>
    );
};

export default Menu;
