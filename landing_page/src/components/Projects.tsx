import { Container } from "@mui/material";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <Container maxWidth="xl" className="lg:mt-20 mt-10 ">
      <div className=" ">
        <h3 className="text-center text-[#515E7A] text-xl">
          <span className=" me-2 font-semibold text-black">300+</span>
          projects built with Zeroqode
        </h3>
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 justify-center">
          <ProjectCard img="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fd999c2fb1571594aedf60232928d50bd.cdn.bubble.io%2Ff1688094962283x967535007266822800%2FPartners%2520Logo%252002.webp?w=256&h=134&auto=compress&dpr=1&fit=max" />
          <ProjectCard img="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fd999c2fb1571594aedf60232928d50bd.cdn.bubble.io%2Ff1688094967375x998512706121002600%2FPartners%2520Logo%252005.webp?w=256&h=134&auto=compress&dpr=1&fit=max" />
          <ProjectCard img="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fd999c2fb1571594aedf60232928d50bd.cdn.bubble.io%2Ff1688094974460x614948937760432900%2FPartners%2520Logo%252001.webp?w=256&h=134&auto=compress&dpr=1&fit=max" />
          <ProjectCard img="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fd999c2fb1571594aedf60232928d50bd.cdn.bubble.io%2Ff1688094978495x465791605447215740%2FPartners%2520Logo%252003.webp?w=256&h=134&auto=compress&dpr=1&fit=max" />
          <ProjectCard img="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fd999c2fb1571594aedf60232928d50bd.cdn.bubble.io%2Ff1688094983309x935664608239119500%2FPartners%2520Logo%252004.webp?w=256&h=134&auto=compress&dpr=1&fit=max" />
        </div>
      </div>
    </Container>
  );
};

export default Projects;
