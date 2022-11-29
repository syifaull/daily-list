import { TrashIcon } from "@heroicons/react/20/solid";
import React from "react";

const ActivityCard = (props) => {
  let date = new Date(props.created_at).toLocaleDateString(
    {},
    { day: "2-digit", month: "long", year: "numeric" }
  );
  let print = date.replace(",", "").split(" ");
  return (
    <div
      className="h-56 bg-white shadow-xl rounded-xl"
      onClick={props.onClickTodo}
    >
      <div className="p-5">
        <p className="text-lg font-bold">{props.title}</p>
        <div className="flex justify-between text-[#888888]">
          <p>
            {print[1]} {print[0]} {print[2]}
          </p>
          <TrashIcon className="w-5 h-5" onClick={props.onClickDelete} />
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
