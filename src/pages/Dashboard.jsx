import axios from "axios";
import React, { useEffect, useState } from "react";
import ActivityCard from "../components/ActivityCard";
import ButtonTambah from "../components/ButtonTambah";
import activityempty from "../images/activity-empty-state.png";

const Dashboard = () => {
  const [activity, setActivity] = useState([]);
  const [totalActivity, setTotalActivity] = useState([]);

  const getActivity = async () => {
    await axios
      .get(
        "https://todo.api.devcode.gethired.id/todo-items?activity_group_id=1001"
      )
      .then((response) => {
        setActivity(response.data.data);
        setTotalActivity(response.data.total);
      })
      .catch((error) => {
        alert("error", error);
      });
  };

  useEffect(() => {
    getActivity();
  }, []);

  const handleDeleteActivity = async (id) => {
    await axios
      .delete(`https://todo.api.devcode.gethired.id/todo-items/${id}`)
      .then((res) => {
        getActivity();
      })
      .catch((err) => {
        alert("error");
      });
  };

  return (
    <>
      <div className="md:px-4 lg:px-44">
        <div className="flex justify-between pt-11">
          <p data-cy="activity-title" className="font-bold text-4xl">
            Activity
          </p>
          <ButtonTambah data-cy="activity-add" />
        </div>
        <div className="activity-container pt-14">
          {totalActivity === 0 ? (
            <div className="flex justify-center" data-cy="activity-empty-state">
              <img
                src={activityempty}
                alt="activity-empty-state-img"
                style={{ width: "500px" }}
              />
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-5">
              {activity.map((todo, index) => {
                return (
                  <div key={index}>
                    <ActivityCard
                      title={todo.title}
                      created_at={todo.created_at}
                      onClickDelete={() => handleDeleteActivity(todo.id)}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
