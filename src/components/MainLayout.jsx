import CompletedTask from "./CompletedTask";
import Header from "./Header";
import Navbar from "./Navbar";
import OnProgressTask from "./OnProgressTask";
import RevisedTask from "./RevisedTask";
import Sidebar from "./Sidebar";
import ToDoTask from "./ToDoTask";
import { TaskContext } from "../context/TaskProvider";
import { useContext } from "react";
import Modal from "./Modal";

const MainLayout = () => {
  const { isModalOpen } = useContext(TaskContext);
  return (
    <>
      <div className="w-full min-h-screen bg-gray-900 text-white">
        <div className="flex h-screen">
          <Sidebar />
          <main className="flex-1 overflow-y-auto overflow-x-hidden">
            <Navbar />
            <div className="mx-auto max-w-7xl p-6">
              <Header />
              <div className="-mx-2 mb-6 flex flex-wrap">
                <ToDoTask />
                <OnProgressTask />
                <CompletedTask />
                <RevisedTask />
              </div>
            </div>
          </main>
        </div>
      </div>
      {isModalOpen && <Modal />}
    </>
  );
};

export default MainLayout;
