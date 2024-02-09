import { Container } from "@mui/material";
import OurWorkCard from "./OurWorkCard";

const OurWorks = () => {
  return (
    <Container maxWidth="xl" className="mt-12">
      <div>
        <h3 className="text-4xl font-bold text-center text-[#263659]">
          Our work
        </h3>
        <p className="fo text-xl px-4 text-center mt-3 text-[#263659]">
          Every project is a unique endeavor. See what we have accomplished so
          far!
        </p>
        <div className=" mt-9 grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-6 ">
          <OurWorkCard
            link="/a"
            title="Mojju"
            description="Mojju, a venture powered by the professional team at Zeroqode, is at the... "
            img1="https://d999c2fb1571594aedf60232928d50bd.cdn.bubble.io/f1701158557190x701718075709237100/mojjulogo.svg"
            img2="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fd999c2fb1571594aedf60232928d50bd.cdn.bubble.io%2Ff1706773668872x736219889192519800%2FMojju-Preview-NEW-2024.webp?w=512&h=371&auto=compress&dpr=1&fit=max"
          />{" "}
          <OurWorkCard
            link="/b"
            title="Metla"
            description="An all-in-one crypto frontend for managing coins, NFTs, DeFi activity and a lot more -... "
            img1="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fd999c2fb1571594aedf60232928d50bd.cdn.bubble.io%2Ff1687487539169x801439643284312400%2FFrame%25201010106608d.webp?w=192&h=192&auto=compress&dpr=1&fit=max"
            img2="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fd999c2fb1571594aedf60232928d50bd.cdn.bubble.io%2Ff1687487531852x690923474442815900%2FFrame%25201010106593.webp?w=512&h=371&auto=compress&dpr=1&fit=max"
          />{" "}
          <OurWorkCard
            link="/a"
            title="Neurai"
            description="Zeroqode's AI Kit Template, developed for Rapid Dev, is a practical tool for... "
            img1="https://d999c2fb1571594aedf60232928d50bd.cdn.bubble.io/f1701168865085x570334865806676900/logo%201.svg"
            img2="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fd999c2fb1571594aedf60232928d50bd.cdn.bubble.io%2Ff1706774433125x322879716819181500%2Fsimplify-small-preview-1.webp?w=512&h=371&auto=compress&dpr=1&fit=max"
          />{" "}
        </div>
      </div>
    </Container>
  );
};

export default OurWorks;
