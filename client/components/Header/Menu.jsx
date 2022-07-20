import Link from "next/link";
import React from "react";
import { LinkA } from "../../styles/Navbar";
import { FiSearch, FiHeart } from "react-icons/fi";
import { BsHandbag } from "react-icons/bs";

const Menu = () => {
  return (
    <div className={`navbarRegister`}>
      {/* <ul> */}
      <LinkA href={"#"} className="link">
        <div>More</div>
      </LinkA>
      <LinkA href={"#"} className="link">
        <div>Sign Up/ Sign In</div>
      </LinkA>
      <LinkA href={"#"} className="link">
        <div>
          <FiHeart />
        </div>
      </LinkA>
      <LinkA href={"#"} className="link">
        <div>
          <BsHandbag />
        </div>
      </LinkA>
      {/* </ul> */}
    </div>
  );
};

export default Menu;
