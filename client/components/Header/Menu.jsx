import Link from "next/link";
import React from "react";
import { FiHeart } from "react-icons/fi";
import { BsHandbag } from "react-icons/bs";
import styles from "../../styles/navbar.module.css";

const Menu = () => {
    return (
        <div className={styles.navbarRegister}>
            <Link href={"#"} >
                <a className={styles.link}>More</a>
            </Link>
            <Link href={"#"} >
                <a className={styles.link}>Sign Up/ Sign In</a>
            </Link>
            <Link href={"#"} >
                <a className={styles.link}>
                    <FiHeart />
                </a>
            </Link>
            <Link href={"#"} >
                <a className={styles.link}>
                    <BsHandbag />
                </a>
            </Link>
        </div>
    );
};

export default Menu;
