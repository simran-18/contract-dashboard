import React from "react";
import { ModeToggle } from "./ModeToggle";

export const Navbar = () => {
  return (
    <nav className=" shadow-md">
      <div className="container mx-auto p-2 flex items-center justify-between">
        <div className="text-lg font-bold ">
        Contract Management Dashboard
        </div>
        <div className="flex items-center space-x-2">       
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};
