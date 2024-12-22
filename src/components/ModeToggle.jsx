import React, { useEffect, useState } from "react";

export const ModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
const handleModeToggle=()=>
{
    setIsDarkMode(prev=>!prev);
    document.body.classList.toggle("dark");
}

  return (
    <button
      onClick={() => handleModeToggle()}
      className="flex items-center p-2 rounded-full  hover:ring-2 hover:ring-gray-300 dark:hover:ring-gray-500 transition-all duration-300"
      aria-label="Toggle Dark Mode"
    >
      {isDarkMode ? (
        <span className="text-sm font-medium ">🌙</span>
      ) : (
        <span className="text-sm font-medium ">☀️</span>
      )}
    </button>
  );
};