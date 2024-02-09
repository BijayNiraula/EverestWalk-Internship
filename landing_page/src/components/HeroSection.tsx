import React from "react";
import { Container } from "@mui/material";
import { Rating } from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import Link from "next/link";
const HeroSection = () => {
  return (
    <Container maxWidth="xl" className="lg:mt-12 mt-8">
      <div className=" flex lg:flex-row flex-col-reverse">
        <div className=" lg:w-5/12 w-11/12 lg:mt-0 lg:pt-10 pt-5 ">
          <h1 className=" lg:text-6xl text-3xl sm:text-5xl font-bold text-[#263659]">
            Web, mobile & AI applications built{" "}
            <span className="text-[#1AAFD0]">without code</span>
          </h1>
          <p className="mt-3 text-[#263659] text-xl lg-mt-0 ">
            With 300+ completed projects and over 60 team members, Zeroqode is
            the largest no-code agency in the world!
          </p>
          <p className="mt-4 text-xl flex items-center text-[#263659]">
            Excellent{" "}
            <Rating name="read-only" className="ms-6" value={5} readOnly />
          </p>
          <p className="flex items-center text-sm text-[#515E7A]">
            Based on{" "}
            <Link href="/reviews">
              {" "}
              <u className="ms-1 me-1 "> 80 reviews </u>{" "}
            </Link>{" "}
            on{" "}
            <img
              className="ms-3"
              src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fd999c2fb1571594aedf60232928d50bd.cdn.bubble.io%2Ff1686230615636x103197934870141950%2Fimage-23.webp?w=128&h=50&auto=compress&dpr=1&fit=max"
              alt=""
            />
          </p>
          <div className="mt-5 ">
            <button className="bg-[#1AAFD0] py-5 px-10 w-full lg:w-max  rounded-md font-bold text-white">
              <RocketLaunchIcon className="me-3 " />
              Get Started
            </button>
          </div>
        </div>
        <div className=" lg:w-7/12 w-12/12  ">
          <img
            height="400"
            width="400"
            className="w w-screen"
            src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fd999c2fb1571594aedf60232928d50bd.cdn.bubble.io%2Ff1687428153320x250320446152964670%2Fm3.webp?w=384&h=300&auto=compress&dpr=2&fit=max"
            alt=""
          />
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
