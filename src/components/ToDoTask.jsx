import { useContext, useState } from "react";
import sortSvg from "../assets/sort.svg";
import Card from "./Card";
import { TaskContext } from "../context/TaskProvider";

const ToDoTask = () => {
  const { tasks } = useContext(TaskContext);

  const [isSort, setIsSort] = useState(false);

  const todoTasks = tasks
    ?.filter((item) => item.taskType === "TODO")
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const todoTasksForLowerToHigherDate = tasks
    ?.filter((item) => item.taskType === "TODO")
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  const taskContent = isSort ? todoTasksForLowerToHigherDate : todoTasks;

  return (
    <>
      <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
        <div className="rounded-lg bg-indigo-600 p-4">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-lg font-semibold">
              To-Do ({(todoTasks && todoTasks?.length) ?? 0})
            </h3>
            <img
              src={sortSvg}
              alt="sort-icon"
              className="h-5 w-5 cursor-pointer"
              onClick={() => setIsSort(!isSort)}
            />
          </div>

          {todoTasks && todoTasks.length === 0 && (
            <p className="mb-4 rounded-lg bg-gray-800 p-4">
              No todo available.
            </p>
          )}

          {taskContent &&
            taskContent?.map((item) => <Card key={item.id} task={item} />)}
        </div>
      </div>
    </>
  );
};

export default ToDoTask;
