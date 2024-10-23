import { useContext } from "react";
import { TaskContext } from "../context/TaskProvider";
import { getNextId } from "../helper/helper";

const Modal = () => {
  const { setIsModalOpen, tasks, task, setTask, dispatch, resetTaskField } =
    useContext(TaskContext);
  console.log("🚀 ~ Modal ~ tasks:", task);
  const handleChange = (event) => {
    setTask({
      ...task,
      [event.target.name]: event.target.value,
    });
  };

  const handleCreateTask = (event) => {
    event.preventDefault();

    if (!task.title || !task.description || !task.date || !task.taskType) {
      alert("You should fill up all the fields");
      return;
    }

    const id = getNextId();

    dispatch({
      type: "added",
      id: id,
      title: task.title,
      description: task.description,
      date: task.date,
      taskType: task.taskType,
    });

    resetTaskField();
    setIsModalOpen(false);
  };

  const handleUpdateTask = (event) => {
    event.preventDefault();

    if (!task.title || !task.description || !task.date || !task.taskType) {
      alert("You should fill up all the fields");
      return;
    }
    const updatedTask = {
      type: "edit",
      id: task.id,
      title: task.title,
      description: task.description,
      date: task.date,
      taskType: task.taskType,
    };
    dispatch({ type: "edit", updatedTask });
    resetTaskField();
    setIsModalOpen(false);
  };

  const alreadyExistTask = tasks && tasks.find((item) => item.id === task.id);

  return (
    <>
      <div className="w-full flex min-h-screen items-center justify-center bg-gray-900 bg-opacity-90 p-4 z-10 text-white absolute top-0">
        <div className="w-full max-w-md rounded-lg bg-gray-800 shadow-xl">
          <div className="p-6">
            <h2 className="mb-6 text-2xl font-bold text-green-400">
              Create Task
            </h2>
            <form>
              <div className="mb-4">
                <label className="mb-1 block text-sm font-medium text-gray-300">
                  Task Name
                </label>
                <input
                  type="text"
                  name="title"
                  value={task.title}
                  required
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="mb-4">
                <label className="mb-1 block text-sm font-medium text-gray-300">
                  Description
                </label>
                <textarea
                  name="description"
                  required
                  onChange={handleChange}
                  rows="3"
                  value={task.description}
                  className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="mb-1 block text-sm font-medium text-gray-300">
                  Due Date
                </label>
                <input
                  type="date"
                  name="date"
                  required
                  onChange={handleChange}
                  value={task.date}
                  className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="mb-4">
                <label className="mb-1 block text-sm font-medium text-gray-300">
                  Category
                </label>
                <select
                  name="taskType"
                  required
                  onChange={handleChange}
                  value={task.taskType}
                  className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Select Type</option>
                  <option value="TODO">To-Do</option>
                  <option value="ON_PROGRESS">On Progress</option>
                  <option value="DONE">Done</option>
                  <option value="REVISED">Revised</option>
                </select>
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => {
                    resetTaskField();
                    setIsModalOpen(false);
                  }}
                  type="button"
                  className="rounded-md border border-gray-600 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  Cancel
                </button>
                {alreadyExistTask ? (
                  <button
                    type="button"
                    onClick={handleUpdateTask}
                    className="rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    Update Task
                  </button>
                ) : (
                  <button
                    type="submit"
                    onClick={handleCreateTask}
                    className="rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    Create Task
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
