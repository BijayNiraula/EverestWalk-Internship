import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DiamondIcon from "@mui/icons-material/Diamond";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import ForumIcon from "@mui/icons-material/Forum";

export default function NavLinkDropDown() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        className=" font-semibold text-[#263659] ms-4 hover:text-[#1AAFD0] transition duration-500  text-[16px]"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MoreHorizIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        className="p-0 m-0"
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <div className="  bg-[#606973] shadow-lg  py-4 m-0s">
          <MenuItem
            onClick={handleClose}
            className="text-white hover:text-[#1AAFD0] transistion duration-500 font-semibold text-[16px]"
          >
            <DiamondIcon className="me-3" /> Bubble
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            className="text-white hover:text-[#1AAFD0] transistion duration-500 font-semibold"
          >
            <MenuBookIcon className="me-3" /> Blog
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            className="text-white hover:text-[#1AAFD0] transistion duration-500 font-semibold  text-[16px]"
          >
            <CurrencyBitcoinIcon className="me-3 " /> Crypto Solution
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            className="text-white hover:text-[#1AAFD0] transistion duration-500 font-semibold  text-[16px]"
          >
            <ForumIcon className="me-3" /> Forum
          </MenuItem>
        </div>
      </Menu>
    </div>
  );
}
