"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import LogoutIcon from "@mui/icons-material/Logout";
import NavLink from "./NavLink";
import NavLinkDropDown from "./NavLinkDropDown";
import LoginModal from "./LoginModal";
import Sidebar from "./Sidebar";

const pages = [
  { text: "Approach", url: "/approach" },
  { text: "Portfolio", url: "/portfolio" },
  { text: "Plugins", url: "/plugins" },
  { text: "FAQs", url: "/faqs" },
  { text: "Abouts", url: "/abouts" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="sticky"
      className=" shadow-none bg-white"
      color="transparent"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <div className="sm:h-12 h-8 sm:w-1/4 w-1/6 ">
            <img
              className="h-12 hidden sm:block "
              src="https://d999c2fb1571594aedf60232928d50bd.cdn.bubble.io/f1687180652660x261162500672784450/Zeroqode%20Logo%20Bold%20b.svg"
              alt=""
            />
            <img
              className="h-10 sm:hidden"
              src="https://d999c2fb1571594aedf60232928d50bd.cdn.bubble.io/f1687488421073x491534346898209200/Frame%201010106674.svg"
              alt=""
            />
          </div>

          <Box
            className=" justify-center items-center lg:flex hidden lg:w-2/4"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            {pages.map((page) => (
              <NavLink text={page.text} url={page.url} />
            ))}
            <NavLinkDropDown />
          </Box>
          <div className="flex  items-center justify-end w-5/6 sm:w-3/4 lg:w-1/4 ">
            <LoginModal />
            <button className="ms-4 font-semibold px-3 border-2 sm:px-5 py-2 sm:py-2 lg:py-3 rounded-lg border-[#1AAFD0] sm:text-[16px] text-[12px] hover:bg-[#e0f7fc]">
              Get Started
            </button>
            <Sidebar />
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
