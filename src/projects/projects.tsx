import { FigmaLogo } from "../logos/figma-logo";
import { ProjectCard } from "./project-card";

export const Projects = () => {
  return (
    <div className="md:px-16 pt-20">
      <h1 className="text-3xl text-center dark:text-white pb-8">Projects</h1>
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-14 gap-10 justify-items-center">
        <ProjectCard title="SneakerShop" imgSrc="\assets\img\sneakerShop.png">
          <FigmaLogo />
          <FigmaLogo />
        </ProjectCard>
        <ProjectCard title="SneakerShop" imgSrc="\assets\img\sneakerShop.png">
          <FigmaLogo />
          <FigmaLogo />
        </ProjectCard>
      </div>
    </div>
  );
};
