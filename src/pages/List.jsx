import {
  ArrowsUpDownIcon,
  ChevronLeftIcon,
  PencilIcon,
} from "@heroicons/react/20/solid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ButtonTambah from "../components/ButtonTambah";
import TodoCard from "../components/TodoCard";
import todoempty from "../images/todo-empty-state.png";

const List = () => {
  const [toDo, setToDo] = useState([]);
  const [totalToDo, setTotalToDo] = useState([]);
  const location = useLocation();

  const getToDo = async () => {
    await axios
      .get(
        `https://todo.api.devcode.gethired.id/todo-items?activity_group_id=${location.state.id}`
      )
      .then((response) => {
        setToDo(response.data.data);
        setTotalToDo(response.data.total);
      });
  };

  useEffect(() => {
    getToDo();
  }, []);

  const handleDeleteToDo = async () => {
    await axios
      .delete("https://todo.api.devcode.gethired.id/todo-items/7068")
      .then((res) => {
        getToDo();
        alert("apakah anda yakin akan menghapusnya?");
      })
      .catch((err) => {
        alert("gagal menghapus");
      });
  };

  return (
    <>
      <div className="md:px-4 lg:px-44">
        <div className="flex justify-between pt-11">
          <div className="flex">
            <Link to="/">
              <ChevronLeftIcon className="w-8 h-8" />
            </Link>

            <p data-cy="" className="font-bold text-4xl px-6">
              New Activity
            </p>
            <PencilIcon className="w-6 h-6 text-[#C4C4C4]" />
          </div>
          <div className="flex">
            <div className="border flex rounded-full w-14 h-14 mr-4">
              <ArrowsUpDownIcon className="w-6 h-6 text-[#888888] m-auto" />
            </div>
            <ButtonTambah data-cy="" />
          </div>
        </div>
        <div className="activity-container pt-14">
          {totalToDo === 0 ? (
            <div className="flex justify-center" data-cy="">
              <img
                src={todoempty}
                alt="todo-empty-state-img"
                style={{ width: "500px" }}
              />
            </div>
          ) : (
            <>
              {toDo.map((task, index) => {
                return (
                  <div>
                    <TodoCard key={index} title={task.title} />
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default List;
