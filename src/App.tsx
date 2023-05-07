import { useState } from "react";
import { Header } from "./header";
import { Hero } from "./hero";
import { Skills } from "./skills/skills";
import { Projects } from "./projects/projects";

function App() {
  const [isDarkModeEnable, setDarkMode] = useState(true);

  function onToggleDarkMode() {
    setDarkMode(!isDarkModeEnable);
  }

  return (
    <main
      className={`font-poppins ${
        isDarkModeEnable ? "dark bg-gray-900" : "bg-white"
      }`}
    >
      <section className="min-h-screen min-w-screen max-w-screen-xl mx-auto md:px-10 px-6 bg-white dark:bg-gray-900">
        <Header onToggleDarkMode={onToggleDarkMode} />
        <Hero />
        <Skills />
        <Projects />
      </section>
    </main>
  );
}

export default App;
