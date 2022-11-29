import {
  ArrowsUpDownIcon,
  ChevronLeftIcon,
  PencilIcon,
} from "@heroicons/react/20/solid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ButtonTambah from "../components/ButtonTambah";
import PopUpModal from "../components/PopUpModal";
import TodoCard from "../components/TodoCard";
import todoempty from "../images/todo-empty-state.png";

const List = () => {
  const [toDo, setToDo] = useState([]);
  const [totalToDo, setTotalToDo] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

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

  const handleDeleteToDo = async (id) => {
    await axios
      .delete(`https://todo.api.devcode.gethired.id/todo-items/${id}`)
      .then((res) => {
        getToDo();
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
            <div data-cy="todo-back-button">
              <Link to="/">
                <ChevronLeftIcon className="w-8 h-8" />
              </Link>
            </div>

            <p data-cy="todo-title" className="font-bold text-4xl px-6">
              {location.state.title}
            </p>
            <PencilIcon
              data-cy="todo-title-edit-button"
              className="w-6 h-6 text-[#C4C4C4]"
            />
          </div>
          <div className="flex">
            <button className="border flex rounded-full w-14 h-14 mr-4">
              <ArrowsUpDownIcon className="w-6 h-6 text-[#888888] m-auto" />
            </button>

            <ButtonTambah data-cy="todo-add-button" />
          </div>
        </div>
        <div className="activity-container pt-14">
          {totalToDo === 0 ? (
            <div className="flex justify-center" data-cy="todo-empty-state">
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
                    <TodoCard
                      key={index}
                      title={task.title}
                      onClickAlert={() => setShowAlert(true)}
                    />
                    {showAlert ? (
                      <PopUpModal
                        onClickDeleteToDo={() => handleDeleteToDo(task.id)}
                        onClickCloseAlert={() => setShowAlert(false)}
                        title={task.title}
                      />
                    ) : null}
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
