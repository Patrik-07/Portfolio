import { SkillCard } from "./skill-card";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { HungaryLogo } from "../logos/hungary-logo";
import { EnglishLogo } from "../logos/english-logo";
import { TeamworkLogo } from "../logos/teamwork-logo";

export const SkillCommunication = () => {
  return (
    <SkillCard
      title="Communication"
      text="I speak Hungarian and English. I am convinced that working together as a team is essential for achieving success."
      iconDefinition={faMessage}
    >
      <HungaryLogo />
      <EnglishLogo />
      <TeamworkLogo />
    </SkillCard>
  );
};
