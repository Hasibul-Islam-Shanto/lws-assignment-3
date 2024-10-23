import sortSvg from "../assets/sort.svg";
import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskProvider";
import Card from "./Card";

const OnProgressTask = () => {
  const { tasks } = useContext(TaskContext);
  const [isSort, setIsSort] = useState(false);

  const onProgressTasks = tasks
    ?.filter((item) => item.taskType === "ON_PROGRESS")
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const onProgressTasksForLowerToHigherDate = tasks
    ?.filter((item) => item.taskType === "ON_PROGRESS")
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  const taskContent = isSort
    ? onProgressTasksForLowerToHigherDate
    : onProgressTasks;

  return (
    <>
      <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
        <div className="rounded-lg bg-yellow-500 p-4">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-lg font-semibold">
              On Progress ({(onProgressTasks && onProgressTasks?.length) || 0})
            </h3>
            <img
              src={sortSvg}
              alt="sort-icon"
              className="h-5 w-5 cursor-pointer"
              onClick={() => setIsSort(!isSort)}
            />
          </div>

          {taskContent && taskContent.length === 0 && (
            <p className="mb-4 rounded-lg bg-gray-800 p-4">
              Task List is empty!
            </p>
          )}

          {taskContent &&
            taskContent?.map((item) => <Card key={item.id} task={item} />)}
        </div>
      </div>
    </>
  );
};

export default OnProgressTask;
