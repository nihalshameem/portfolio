import dynamic from "next/dynamic";
import React from "react";

const NavBar = dynamic(() => import("./NavBar"), {
  loading: () => <p>loading...</p>,
  ssr: false,
});

export default NavBar;
