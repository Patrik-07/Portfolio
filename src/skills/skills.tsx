import { SkillCode } from "./skill-code";
import { SkillCommunication } from "./skill-communication";
import { SkillDesign } from "./skill-design";

export const Skills = () => {
  return (
    <div className="md:px-16 pt-24">
      <h1 className="text-3xl text-center dark:text-white pb-8">My Skills</h1>
      <div className="grid lg:grid-cols-3 lg:grid-rows-1 grid-cols-1 grid-rows-3 lg:gap-14 gap-10 justify-items-center">
        <SkillDesign />
        <SkillCode />
        <SkillCommunication />
      </div>
    </div>
  );
};
