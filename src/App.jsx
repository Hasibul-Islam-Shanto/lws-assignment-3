import MainLayout from "./components/MainLayout";
import TaskProvider from "./context/TaskProvider";

const App = () => {
  return (
    <TaskProvider>
      <MainLayout />
    </TaskProvider>
  );
};

export default App;
