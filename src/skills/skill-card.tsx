import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type InputProps = {
  title: string;
  text: string;
  children: React.ReactNode[];
  iconDefinition: IconDefinition;
};

export const SkillCard = ({
  title,
  text,
  children,
  iconDefinition,
}: InputProps) => {
  return (
    <div className="flex flex-col items-center bg-slate-100 dark:bg-slate-200 rounded-3xl px-12 pt-5 pb-7 h-full lg:w-full md:w-3/4 w-11/12 drop-shadow-md">
      <h1 className="text-2xl p-2 font-bold text-gray-700">{title}</h1>
      <div className="text-center">
        <FontAwesomeIcon
          className="text-4xl text-gray-700 dark:text-gray-700 pt-1 pb-3"
          icon={iconDefinition}
        />
        <p className="pb-2">{text}</p>
        <div className="flex justify-center items-center pt-2 gap-4">
          {children.map((child) => (
            <div className="h-8 w-8">{child}</div>
          ))}
        </div>
      </div>
    </div>
  );
};
