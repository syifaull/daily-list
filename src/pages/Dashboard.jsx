import React from "react";
import ButtonTambah from "../components/ButtonTambah";
import todoempty from "../images/activity-empty-state.png";

const Dashboard = () => {
  return (
    <>
      <div className="container md:px-4 lg:px-44">
        <div className="flex justify-between pt-11">
          <p data-cy="activity-title" className="font-bold text-4xl">
            Activity
          </p>
          <ButtonTambah data-cy="activity-add" />
        </div>
        <div
          className="flex justify-center pt-14"
          data-cy="activity-empty-state"
        >
          <img
            src={todoempty}
            alt="activity-empty-state-img"
            style={{ width: "500px" }}
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
