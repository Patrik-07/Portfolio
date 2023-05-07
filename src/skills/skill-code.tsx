import { SkillCard } from "./skill-card";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { JSLogo } from "../logos/js-logo";
import { ReactLogo } from "../logos/react-logo";
import { TailwindLogo } from "../logos/tailwind-logo";
import { MongoDBLogo } from "../logos/mongodb-logo";
import { VSCodeLogo } from "../logos/vscode-logo";

export const SkillCode = () => {
  return (
    <SkillCard
      title="Code"
      text="I am able to write highly scalable and reusable code. I am confident in using design patterns and have good experience in web and embedded programming."
      iconDefinition={faCode}
    >
      <JSLogo />
      <ReactLogo />
      <TailwindLogo />
      <MongoDBLogo />
      <VSCodeLogo />
    </SkillCard>
  );
};
