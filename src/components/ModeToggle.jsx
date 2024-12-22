import React, { useEffect, useState } from "react";

export const ModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
const handleModeToggle=()=>
{
    setIsDarkMode(prev=>!prev);
    document.body.classList.toggle("dark");
    localStorage.setItem("theme",!isDarkMode?'dark':'light')
}

  return (
    <button
      onClick={() => handleModeToggle()}
      className="flex items-center p-2 rounded-full  hover:ring-2 hover:ring-gray-300 dark:hover:ring-gray-500 transition-all duration-300"
      aria-label="Toggle Dark Mode"
    >
      {isDarkMode ? (
        <span className="text-sm font-medium ">🌙 In Dark Mode</span>
      ) : (
        <span className="text-sm font-medium ">☀️ In Light Mode</span>
      )}
    </button>
  );
};
