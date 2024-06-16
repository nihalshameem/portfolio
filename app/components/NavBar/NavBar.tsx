import React, { FC } from "react";
import { NavBarWrapper } from "./NavBar.styled";
import { Button, Flex, Skeleton, Space } from "antd";
import { MoonFilled, SunFilled } from "@ant-design/icons";
import { useTheme } from "@/app/contexts/ThemeContext";
import Link from "next/link";

interface NavBarProps {}

const NavBar: FC<NavBarProps> = () => {
  const { darkMode, toggleTheme } = useTheme();
  return (
    <NavBarWrapper>
      <Flex justify="space-between" align="center" className="content">
        <h5 className="logo">
          <Link href={"/"}>Nihal Shameem</Link>
        </h5>
        <Space size={50} className="nav-elements">
          <Link href={"/projects"}>Projects</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/contact"}>Contact</Link>
          <Button
            type="text"
            onClick={toggleTheme}
            size="large"
            icon={darkMode ? <SunFilled /> : <MoonFilled />}
          />
        </Space>
      </Flex>
    </NavBarWrapper>
  );
};

export default NavBar;
