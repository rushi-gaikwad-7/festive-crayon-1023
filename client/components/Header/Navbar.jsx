import Image from "next/image";
import React from "react";
import Search from "./search";
import Menu from "./Menu";
import Link from "next/link";
import Category from "./Categories";
import styles from "../../styles/navbar.module.css";
import ImgLoader from "../../utils/ImageLoader";
import { useSelector } from "react-redux";
// const { auth } = useSelector((state) => state);

const Navbar = () => {
  const { auth } = useSelector((state) => state);

  return (
    <nav className={styles.navDiv}>
      <Link href="/">
        <Image
          src="https://www.landmarkgroup.com/int/sites/default/files/Brand-logo/New%20Max%20Logo-%20Eng%20With%20Outline_1.png"
          loader={ImgLoader}
          alt="logo"
          priority
          width={120}
          height={60}
          style={{ cursor: "pointer" }}
        />
      </Link>

      <Category />

      <Search />

      <Menu />
    </nav>
  );
};

export default Navbar;
