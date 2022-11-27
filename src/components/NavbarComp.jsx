import React from "react";

const NavbarComp = () => {
  return (
    <>
      <div
        data-cy="header-background"
        className="h-28 bg-[#16abf8] flex items-center md:px-4 lg:px-44 shadow-md"
      >
        <p data-cy="header-title" className="text-white font-bold text-2xl ">
          TO DO LIST APP
        </p>
      </div>
    </>
  );
};

export default NavbarComp;
