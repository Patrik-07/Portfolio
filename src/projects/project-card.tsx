import { useEffect, useRef, useState } from "react";
import ReactCardFlip from "react-card-flip";

type InputProps = {
  title: string;
  imgSrc: string;
  children: React.ReactNode[];
};

function useOutsideAlerter(ref: React.RefObject<HTMLElement>) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

export const ProjectCard = ({ title, imgSrc, children }: InputProps) => {
  const [isFlipped, setFlipped] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useOutsideAlerter(wrapperRef);

  return (
    <div ref={wrapperRef}>
      <ReactCardFlip
        containerClassName="flex flex-col items-center md:w-3/4 w-11/12 drop-shadow-md"
        isFlipped={isFlipped}
        flipDirection="horizontal"
      >
        <button
          onClick={() => setFlipped(!isFlipped)}
          className="flex flex-col items-center bg-slate-100 dark:bg-slate-200 rounded-3xl pt-5 h-full lg:w-full md:w-3/4 w-11/12"
        >
          <h1 className="text-2xl pb-3 font-bold text-gray-700">{title}</h1>
          <img src={imgSrc} className="rounded-b-3xl " />
        </button>

        <button
          onClick={() => setFlipped(!isFlipped)}
          className="flex flex-col items-center bg-slate-100 dark:bg-slate-200 rounded-3xl pt-5 min-h-full lg:w-full md:w-3/4 w-11/12"
        >
          <h1 className="text-2xl pb-2 font-bold text-gray-700">{title}</h1>
          <div className="flex justify-center items-center pt-2 pb-4 gap-4">
            {children.map((child) => (
              <div className="h-8 w-8">{child}</div>
            ))}
          </div>
        </button>
      </ReactCardFlip>
    </div>
  );
};
