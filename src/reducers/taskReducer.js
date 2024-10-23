const taskReducer = (state, action) => {
  switch (action.type) {
    case "added": {
      const newTask = {
        id: action.id,
        title: action.title,
        description: action.description,
        date: action.date,
        taskType: action.taskType,
      };
      return {
        ...state,
        allTasks: [...state.allTasks, newTask],
        tasks: [...state.tasks, newTask],
      };
    }
    case "edit": {
      const updatedTasks = state.tasks.map((item) => {
        if (item.id === action.updatedTask.id) {
          return action.updatedTask;
        } else {
          return item;
        }
      });
      return {
        ...state,
        allTasks: updatedTasks,
        tasks: updatedTasks,
      };
    }
    case "delete": {
      const updatedTasks = state.tasks.filter((item) => item.id !== action.id);
      return {
        ...state,
        allTasks: updatedTasks,
        tasks: updatedTasks,
      };
    }
    case "search": {
      if (action.query === "") {
        return {
          ...state,
          tasks: state.allTasks,
        };
      }
      const query = action.query.toLowerCase();
      const filteredTasks = state.allTasks.filter((task) =>
        task.title.toLowerCase().includes(query)
      );
      return {
        ...state,
        tasks: filteredTasks,
      };
    }
    default:
      return state.allTasks;
  }
};
export default taskReducer;
