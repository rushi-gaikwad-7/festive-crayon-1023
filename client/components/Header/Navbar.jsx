import Image from "next/image";
import React from "react";
import Search from "./search";
import Menu from "./Menu";
import Link from "next/link";
import Category from "./Categories";
import styles from "../../styles/navbar.module.css";

const Navbar = () => {
    return (
        <nav className={styles.navDiv}>
            <Link href="/">
                <Image
                    src="https://www.landmarkgroup.com/int/sites/default/files/Brand-logo/New%20Max%20Logo-%20Eng%20With%20Outline_1.png"
                    alt="logo"
                    width={120}
                    height={60}
                    style={{ cursor: "pointer" }}
                ></Image>
            </Link>

            <Category />

            <Search />

            <Menu />
        </nav>
    );
};

export default Navbar;
