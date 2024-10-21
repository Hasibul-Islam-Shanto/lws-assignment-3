import barSvg from "../assets/bar.svg";
import notificaitonSvg from "../assets/notification.svg";
import emailSvg from "../assets/email.svg";

const Navbar = () => {
  return (
    <>
      <header className="flex items-center justify-between bg-gray-800 p-4">
        <button className="lg:hidden">
          <img src={barSvg} alt="bar-icon" className="h-5 w-5" />
        </button>
        <div className="mx-4 flex-1">
          <input
            type="text"
            placeholder="Search here"
            className="w-full max-w-xl rounded-full bg-gray-700 px-4 py-2 text-white focus:outline-none"
          />
        </div>
        <div className="flex items-center">
          <button className="relative mr-4">
            <img
              src={notificaitonSvg}
              alt="notification-icon"
              className="h-5 w-5"
            />
            <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500"></span>
          </button>
          <button className="relative mr-4">
            <img src={emailSvg} alt="email-icon" className="h-5 w-5" />
            <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500"></span>
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
