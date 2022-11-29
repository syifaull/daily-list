import { PencilIcon, TrashIcon } from "@heroicons/react/20/solid";
import React from "react";

const TodoCard = (props) => {
  return (
    <>
      <div className="px-7 py-7 w-full bg-white rounded-lg shadow-lg flex justify-between mb-3">
        <div className="flex ">
          <input
            id="remember"
            type="checkbox"
            value=""
            className="w-4 h-4 bg-gray-50 rounded border border-[#C7C7C7] focus:ring-3 focus:ring-blue-300 "
          />
          <div className="w-3 h-3 bg-red-600 rounded-full ml-6"></div>
          <label for="remember" className="mx-4">
            {props.title}
          </label>
          <PencilIcon
            className="w-4 h-4 text-[#C4C4C4]"
            onClick={props.onClickEditToDo}
          />
        </div>
        <div>
          <TrashIcon
            className="w-5 h-5 text-[#888888]"
            onClick={props.onClickDeleteToDo}
          />
        </div>
      </div>
    </>
  );
};

export default TodoCard;
