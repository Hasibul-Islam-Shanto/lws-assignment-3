/* eslint-disable react/prop-types */
import { useContext } from "react";
import deleteSvg from "../assets/delete.svg";
import editSvg from "../assets/edit.svg";
import { TaskContext } from "../context/TaskProvider";
import { formattedDate } from "../helper/helper";

const Card = (props) => {
  const { setIsModalOpen, dispatch, setTask } = useContext(TaskContext);
  const { id, title, description, date, taskType } = props.task;

  const handleDeleteTask = () => {
    dispatch({
      type: "delete",
      id: id,
    });
  };

  const handleEditPopup = () => {
    setTask({
      id,
      title,
      description,
      date,
      taskType,
    });
    setIsModalOpen(true);
  };

  return (
    <>
      <div>
        <div className="mb-4 rounded-lg bg-gray-800 p-4">
          <div className="flex justify-between">
            <h4 className="mb-2 flex-1 font-semibold text-indigo-500">
              {title}
            </h4>

            <div className="flex gap-2">
              <img
                src={deleteSvg}
                alt="delete-icon"
                className="h-4 w-4 cursor-pointer"
                onClick={handleDeleteTask}
              />
              <img
                src={editSvg}
                alt="edit-icon"
                className="h-4 w-4 cursor-pointer"
                onClick={handleEditPopup}
              />
            </div>
          </div>
          <p className="mb-2 text-sm text-zinc-200">{description}</p>

          <p className="mt-6 text-xs text-zinc-400">{formattedDate(date)}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
