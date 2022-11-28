import { TrashIcon } from "@heroicons/react/20/solid";
import React from "react";

const ActivityCard = (props) => {
  return (
    <div className="h-56 bg-white shadow-xl rounded-xl">
      <div className="p-5">
        <p className="text-lg font-bold">{props.title}</p>
        <div className="flex justify-between text-[#888888]">
          <p>Tanggal Aktifitas {props.created_at}</p>
          <TrashIcon className="w-5 h-5" onClick={props.onClickDelete} />
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
