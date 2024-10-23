/* eslint-disable react/prop-types */
import { createContext, useReducer, useState } from "react";
import taskReducer from "../reducers/taskReducer";
import { initialState } from "../data/tasksData";
export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [{ tasks }, dispatch] = useReducer(taskReducer, initialState);
  const [task, setTask] = useState({
    id: "",
    title: "",
    description: "",
    date: "",
    taskType: "",
  });

  const resetTaskField = () => {
    setTask({
      id: "",
      title: "",
      description: "",
      date: "",
      taskType: "",
    });
  };

  return (
    <TaskContext.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        tasks,
        dispatch,
        task,
        setTask,
        resetTaskField,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
