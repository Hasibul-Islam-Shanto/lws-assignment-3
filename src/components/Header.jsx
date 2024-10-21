import addSvg from "../assets/add.svg";
const Header = () => {
  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Projectify</h2>
        <div className="flex space-x-2">
          <button className="flex items-center rounded-md gap-x-2 bg-gray-700 px-4 py-2 text-white">
            <img src={addSvg} alt="add-icon" />
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
