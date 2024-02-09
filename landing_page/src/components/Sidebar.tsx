import * as React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NavLink from "./NavLink";

type Anchor = "top";

export default function Sidebar() {
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const navigate = () => {
    setState({ top: false });
    toggleDrawer("top", false);
  };
  return (
    <div>
      <React.Fragment>
        <Button className="lg:hidden" onClick={toggleDrawer("top", true)}>
          <MenuIcon />
        </Button>
        <SwipeableDrawer
          anchor={"top"}
          open={state["top"]}
          onClose={toggleDrawer("top", false)}
          onOpen={toggleDrawer("top", true)}
        >
          <div className="h-screen bg-[#222931f2]">
            <div className="flex justify-between p-4">
              <img
                className="h-10 "
                src="https://d999c2fb1571594aedf60232928d50bd.cdn.bubble.io/f1687488421073x491534346898209200/Frame%201010106674.svg"
                alt=""
              />
              <button
                className="text-white"
                onClick={toggleDrawer("top", false)}
              >
                <CloseIcon />
              </button>
            </div>
            <div className="flex flex-col ps-12  items-start text-white">
              <NavLink text="Approach" url="/approach" />
              <NavLink text="Portfolio" url="/Portfolio" />
              <NavLink text="Plugins" url="/Plugins" />
              <NavLink text="FAQs" url="/FAQs" />
              <NavLink text="Abouts" url="/Abouts" />
              <NavLink text="Approach" url="/approach" />

              <Accordion className="b bg-transparent shadow-none mt-2">
                <AccordionSummary
                  expandIcon={<ArrowDropDownIcon />}
                  aria-controls="panel2-content"
                  className="p-0"
                  id="panel2-header"
                >
                  <Typography className=" mt-2 p-0 text-white hover:text-[#1AAFD0]">
                    More Options
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className=" text-white items-start flex flex-col">
                    <NavLink text="Bubble" url="/Bubble" />
                    <NavLink text="Blog" url="/Blog" />
                    <NavLink text="Crypto Solution" url="/Crypto Solution" />
                    <NavLink text="Forum" url="/approach" />
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
