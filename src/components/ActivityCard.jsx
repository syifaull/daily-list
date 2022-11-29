import { TrashIcon } from "@heroicons/react/20/solid";
import React from "react";

const ActivityCard = (props) => {
  let date = new Date(props.created_at).toLocaleDateString(
    {},
    { day: "2-digit", month: "long", year: "numeric" }
  );
  let print = date.replace(",", "").split(" ");
  return (
    <div className="p-5 bg-white shadow-xl rounded-xl" data-cy="activity-item">
      <div className="h-44" onClick={props.onClickTodo}>
        <p data-cy="activity-item-title" className="text-lg font-bold">
          {props.title}
        </p>
      </div>
      <div className="flex justify-between text-[#888888]">
        <p data-cy="activity-item-date">
          {print[1]} {print[0]} {print[2]}
        </p>
        <div
          data-cy="activity-item-delete-button"
          onClick={props.onClickDeleteToDo}
        >
          <TrashIcon className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
