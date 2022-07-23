import Router, { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/action/auth.action";

const account = () => {
  const router = useRouter();

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    router.push("login");
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default account;
