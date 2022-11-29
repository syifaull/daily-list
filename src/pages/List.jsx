import {
  ArrowsUpDownIcon,
  ChevronLeftIcon,
  PencilIcon,
} from "@heroicons/react/20/solid";
import React from "react";
import ButtonTambah from "../components/ButtonTambah";
import TodoCard from "../components/TodoCard";

const List = () => {
  return (
    <>
      <div className="md:px-4 lg:px-44">
        <div className="flex justify-between pt-11">
          <div className="flex">
            <ChevronLeftIcon className="w-8 h-8" />
            <p data-cy="" className="font-bold text-4xl px-6">
              New Activity
            </p>
            <PencilIcon className="w-6 h-6 text-[#C4C4C4]" />
          </div>
          <div className="flex">
            <div className="border rounded-full w-14 h-14 mr-4">
              <ArrowsUpDownIcon className="w-6 h-6 text-[#888888]" />
            </div>
            <ButtonTambah data-cy="" />
          </div>
        </div>
        <div className="activity-container pt-14">
          {totalActivity === 0 ? (
            <div className="flex justify-center" data-cy="">
              <img
                src={todoempty}
                alt="todo-empty-state-img"
                style={{ width: "500px" }}
              />
            </div>
          ) : (
            <div>
              <TodoCard />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default List;
