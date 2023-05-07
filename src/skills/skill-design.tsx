import { SkillCard } from "./skill-card";
import { faPenRuler } from "@fortawesome/free-solid-svg-icons";
import { FigmaLogo } from "../logos/figma-logo";
import { BlenderLogo } from "../logos/blender-logo";
import { GimpLogo } from "../logos/gimp-logo";

export const SkillDesign = () => {
  return (
    <SkillCard
      title="Design"
      text="I can create elegant desings suited for all kind of projects, even in 3D. I have a strong appreciation for aesthetics and notice the details in large contexts."
      iconDefinition={faPenRuler}
    >
      <FigmaLogo />
      <BlenderLogo />
      <GimpLogo />
    </SkillCard>
  );
};
