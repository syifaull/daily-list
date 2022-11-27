import { PlusIcon } from "@heroicons/react/20/solid";
import React from "react";

const ButtonTambah = (props) => {
  return (
    <>
      <button
        className="bg-[#16abf8] text-white py-3 px-5 flex rounded-full"
        onClick={props.onClick}
      >
        <PlusIcon className="h-6 w-6 mr-1" />
        <p className="text-lg font-semibold">Tambah</p>
      </button>
    </>
  );
};

export default ButtonTambah;
