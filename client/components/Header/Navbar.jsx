import Image from "next/image";
import React from "react";
import { LinkA, NavDiv } from "../../styles/Navbar";
import Search from "./search";
import Menu from "./Menu";
import Link from "next/link";
import Category from "./Ctegories";

const Navbar = () => {
  return (
    <NavDiv>
      <Link href="/">
        <Image
          src="https://www.landmarkgroup.com/int/sites/default/files/Brand-logo/New%20Max%20Logo-%20Eng%20With%20Outline_1.png"
          alt="logo"
          width={120}
          height={60}
          style={{ cursor: "pointer" }}
        ></Image>
      </Link>

      {/* <Category /> */}

      <div className={`navbarCategory`}>
        <LinkA href="#" className="link">
          <div>Women</div>
          {/* <div>Hello</div> */}
        </LinkA>
        <LinkA href="#" className="link">
          <div>Men</div>
          {/* <div>Hello</div> */}
        </LinkA>
        <LinkA href="#" className="link">
          <div>Girls</div>
          {/* <div>Hello</div> */}
        </LinkA>
        <LinkA href="#" className="link">
          <div>Boys</div>
          {/* <div>Hello</div> */}
        </LinkA>
      </div>

      <Search />

      <Menu />
    </NavDiv>
  );
};

export default Navbar;