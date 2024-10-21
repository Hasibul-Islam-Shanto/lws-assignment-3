import sidebarLogo from "../assets/lws-logo-en.svg";
import { sidebardata } from "../data/sidebarData";

const Sidebar = () => {
  return (
    <>
      <aside className="hidden w-64 bg-gray-800 p-6 lg:block h-screen">
        <div className="mb-8 flex items-center">
          <div className="flex items-center justify-center rounded-full text-xl font-bold">
            <img src={sidebarLogo} className="mx-auto h-10 text-center" />
          </div>
        </div>
        <button className="mb-8 w-full rounded-md bg-green-500 py-2 text-white">
          + New Project
        </button>
        <nav>
          <ul className="space-y-4">
            {sidebardata.map(({ id, title, icon, link }) => (
              <li key={id}>
                <a href={link} className="flex items-center gap-x-2">
                  <img src={icon} alt={title} className="h-5 w-5" />
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
