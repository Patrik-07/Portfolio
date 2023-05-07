import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { IconDefinition, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type InputProps = {
  link: string;
  iconDefinition: IconDefinition;
};

const IconButton = ({ link, iconDefinition }: InputProps) => {
  return (
    <a
      className="dark:hover:text-white hover:text-slate-400"
      href={link}
      target="_blank"
    >
      <FontAwesomeIcon icon={iconDefinition}></FontAwesomeIcon>
    </a>
  );
};

export const Hero = () => {
  return (
    <>
      <div className="text-center px-4">
        <div className="pt-8 pb-4">
          <span className="sm:text-5xl text-4xl text-teal-800 font-medium dark:text-white">
            Hi! I'm{" "}
          </span>
          <span className="sm:text-5xl text-4xl text-teal-500 font-medium dark:text-slate-400">
            Patrik{" "}
          </span>
          <span className="sm:text-5xl text-4xl text-teal-800 font-medium dark:text-white">
            Santa
          </span>
        </div>
        <h1 className="text-2xl py-2 dark:text-white">Software developer</h1>
        <p className="text-md py-5 leading-8 max-w-xl mx-auto dark:text-white">
          I'm an enthusiastic, creative, people-oriented early career IT
          student. I would like to use and improve the knowledge I have gained
          from my studies and my own projects on the field of full stack
          software development.
        </p>
      </div>
      <div className="py-5 text-5xl flex justify-center gap-8 text-gray-700 dark:text-slate-400">
        <IconButton
          link="https://www.linkedin.com/in/patrik-santa-7520a0241"
          iconDefinition={faLinkedin}
        />
        <IconButton
          link="https://github.com/Patrik-07"
          iconDefinition={faGithub}
        />
        <IconButton
          link="mailto:patrik.santa07@gmail.com"
          iconDefinition={faEnvelope}
        />
      </div>
      <div className="relative mx-auto py-8 sm:w-[340px] sm:h-[340px] w-[300px] h-[300px] drop-shadow-xl">
        <img src="/assets/img/me_circle.png" />
      </div>
    </>
  );
};
