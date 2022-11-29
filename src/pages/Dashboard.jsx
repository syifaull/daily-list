import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ActivityCard from "../components/ActivityCard";
import ButtonTambah from "../components/ButtonTambah";
import PopUpModal from "../components/PopUpModal";
import activityempty from "../images/activity-empty-state.png";

const Dashboard = () => {
  const [activity, setActivity] = useState([]);
  const [totalActivity, setTotalActivity] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const getActivity = async () => {
    await axios
      .get(
        "https://todo.api.devcode.gethired.id/activity-groups?email=syifaulya0610@gmail.com"
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
      .delete(`https://todo.api.devcode.gethired.id/activity-groups/${id}`)
      .then((res) => {
        setShowAlert(false);
        getActivity();
      })
      .catch((err) => {
        alert("error");
      });
  };

  // const closeAlert = () => setShowAlert(false)
  // const openAlert = () => setShowAlert(true)

  const handleAddActivity = () => {
    axios
      .post(
        "https://todo.api.devcode.gethired.id/activity-groups?email=syifaulya0610@gmail.com",
        {
          title: "New Activity",
          email: "syifaulya0610@gmail.com",
        }
      )
      .then((res) => {
        getActivity();
      })
      .catch((err) => {
        alert("gagal menambah aktivitas");
      });
  };

  const handleMoveTodo = (id) => {
    navigate("/list", {
      state: {
        id: id,
      },
    });
  };

  return (
    <>
      <div className="md:px-4 lg:px-44">
        <div className="flex justify-between pt-11">
          <p data-cy="activity-title" className="font-bold text-4xl">
            Activity
          </p>
          <ButtonTambah data-cy="activity-add" onClick={handleAddActivity} />
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
              {activity.map((task, index) => {
                return (
                  <div key={index}>
                    <ActivityCard
                      title={task.title}
                      created_at={task.created_at}
                      onClickAlert={() => setShowAlert(true)}
                      onClickTodo={() => handleMoveTodo(task.id)}
                    />
                    {showAlert ? (
                      <PopUpModal
                        onClickDeleteToDo={() => handleDeleteActivity(task.id)}
                        onClickCloseAlert={() => setShowAlert(false)}
                        title={task.title}
                      />
                    ) : null}
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
