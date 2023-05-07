import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type InputProps = {
  onToggleDarkMode: () => void;
};

export const Header = ({ onToggleDarkMode }: InputProps) => {
  return (
    <nav className="pt-10 pb-4 flex justify-between items-center">
      <h1 className="text-xl font-bold dark:text-white">PS</h1>
      <ul className="flex items-center">
        <li>
          <button onClick={onToggleDarkMode}>
            <FontAwesomeIcon
              icon={faMoon}
              className="cursor-pointer text-3xl mt-1 dark:text-white"
            ></FontAwesomeIcon>
          </button>
        </li>
        <li>
          <a
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-lg ml-4"
            href="/assets/PatrikSanta_Resume.pdf"
            target="_blank"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};
