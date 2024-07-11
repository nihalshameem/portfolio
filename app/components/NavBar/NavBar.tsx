import Link from "next/link";
import React, { FC, useEffect, useState } from "react";

import { NavBarWrapper } from "./NavBar.styled";

import { MenuOutlined, MoonFilled, SunFilled } from "@ant-design/icons";
import { Button, Drawer, Flex, Menu, MenuProps } from "antd";

import { useTheme } from "@/app/contexts/ThemeContext";

type MenuItem = Required<MenuProps>["items"][number];

interface NavBarProps {}

const NavBar: FC<NavBarProps> = () => {
  const { darkMode, toggleTheme } = useTheme();

  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [current, setCurrent] = useState("");
  const items: MenuItem[] = [
    { key: "projects", label: <Link href={"/projects"}>Projects</Link> },
    { key: "about", label: <Link href={"/about"}>About</Link> },
    { key: "contact", label: <Link href={"/contact"}>Contact</Link> },
    {
      key: "theme",
      label: darkMode ? <SunFilled /> : <MoonFilled />,
      onClick: toggleTheme,
    },
  ];

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
    isMobile && onClose();
  };

  useEffect(() => {
    const updateDeviceType = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", updateDeviceType);
    updateDeviceType();

    return () => window.removeEventListener("resize", updateDeviceType);
  }, []);

  return (
    <NavBarWrapper>
      {isMobile ? (
        <div className="mobile-menu">
          <Flex justify="flex-start" gap={30} align="center">
            <Button type="text" icon={<MenuOutlined />} onClick={showDrawer} />
            <h5 className="logo">
              <Link href={"/"}>Nihal Shameem</Link>
            </h5>
          </Flex>

          <Drawer
            title="Explore"
            placement="left"
            onClose={onClose}
            open={visible}
          >
            <Menu
              mode="vertical"
              items={items}
              key={"menu2"}
              onClick={onClick}
            />
          </Drawer>
        </div>
      ) : (
        <div className="desktop-menu">
          <Flex justify="space-between" align="center">
            <h5 className="logo">
              <Link href={"/"}>Nihal Shameem</Link>
            </h5>
            <Menu
              onClick={onClick}
              selectedKeys={[current]}
              mode="horizontal"
              items={items}
              className="nav-elements"
              key={"menu1"}
            />
          </Flex>
        </div>
      )}
    </NavBarWrapper>
  );
};

export default NavBar;
