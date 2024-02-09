import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import { LinkedIn } from "@mui/icons-material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import FacebookIcon from "@mui/icons-material/Facebook";
import CategoryIcon from "@mui/icons-material/Category";
import TelegramIcon from "@mui/icons-material/Telegram";
import Link from "next/link";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import EmailIcon from "@mui/icons-material/Email";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const Footer = () => {
  return (
    <Container
      maxWidth="xl"
      className="bg-[#222930]  py-4 pt-20 text-white mt-36 "
    >
      <div className=" sm:justify-between items-center sm:items-start flex-col sm:flex-row flex">
        <h3 className="sm:text-3xl text-2xl font-bold sm:w-4/6 lg:w-5/6">
          Build and monetize no-code products
        </h3>
        <div className=" sm:w-2/5 lg:w-1/5 w-4/6 flex justify-around sm:mt-0 mt-5">
          <Link
            href=""
            className="hover:text-[#1AAFD0] flex justify-center items-center  bg-slate-600 rounded-full w-11 h-11"
          >
            <GoogleIcon />
          </Link>
          <Link
            href=""
            className=" hover:text-[#1AAFD0] flex justify-center items-center bg-slate-600 rounded-full w-11 h-11"
          >
            <InstagramIcon />
          </Link>
          <Link
            href=""
            className="hover:text-[#1AAFD0] flex justify-center items-center bg-slate-600 rounded-full w-11 h-11"
          >
            <LinkedIn />
          </Link>

          <Link
            href=""
            className=" hover:text-[#1AAFD0] flex justify-center items-center bg-slate-600 rounded-full w-11 h-11"
          >
            {" "}
            <FacebookIcon />
          </Link>
        </div>
      </div>
      <div className="mt-10 lg:flex">
        <div className=" w-12/12  lg:w-4/12">
          <p className="text-xl flex font-semibold">NewsLetter</p>
          <input
            type="email"
            placeholder="Email"
            className="mt-4 font-normal rounded-lg bg-white text-black px-3  py-3 focus:outline-none"
          />
          <button className="bg-[#1AAFD0] hover:bg-[#5fbacf]  ms-3 px-2 rounded-lg  py-3">
            <KeyboardArrowRightIcon />
          </button>
          <p className=" mt-4 text-[#BCC1CC] text-sm">
            Occasional but very useful tips about building products and startup
            without
          </p>
        </div>
        <div className="lg:w-3/12 w-12/12 lg:mt-0 mt-7">
          <p className="text-xl flex font-semibold">Find us at</p>
          <div className="mt-4 lg:flex grid grid-cols-2 lg:flex-col text-[#BCC1CC]">
            <Link href="/" className="mt-2">
              <CategoryIcon className="me-1" /> Product
            </Link>
            <Link href="/" className="mt-2">
              <SettingsApplicationsIcon className="me-1" />
              Slack
            </Link>
            <Link href="/" className="mt-2">
              <TelegramIcon className="me-1" /> Telegram
            </Link>
            <Link href="/" className="mt-2">
              <EmailIcon className="me-1" /> Email us
            </Link>
          </div>
        </div>
        <div className="lg:w-3/12 w-12/12 flex flex-col lg:mt-0 mt-7">
          <Accordion className="bg-transparent text-white">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="text-white" />}
              aria-controls="panel1-content"
              className="px-0 shadow-none border-0"
              id="panel1-header"
            >
              <p className="text-xl flex font-semibold">Company</p>
            </AccordionSummary>
            <AccordionDetails>
              <div className=" flex flex-col text-[#BCC1CC]">
                <Link href="/" className="">
                  Approach
                </Link>
                <Link href="/" className="mt-2">
                  About us
                </Link>
                <Link href="/" className="mt-2">
                  Blog
                </Link>
                <Link href="/" className="mt-2">
                  Sitemap
                </Link>
                <Link href="/" className="mt-2">
                  Blogs
                </Link>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <hr className="mt-4" />
      <div className="py-4">
        <Link href="/" className="hover:text-[#1AAFD0]">
          © Zeroqode 2023. All rights reserved.
        </Link>
      </div>
    </Container>
  );
};

export default Footer;
