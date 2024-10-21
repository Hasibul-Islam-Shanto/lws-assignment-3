import sortSvg from "../assets/sort.svg";
import deleteSvg from "../assets/delete.svg";
import editSvg from "../assets/edit.svg";

const RevisedTask = () => {
  return (
    <>
      <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
        <div className="rounded-lg bg-rose-500 p-4">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-lg font-semibold">Revise (1)</h3>
            <img src={sortSvg} alt="sort-icon" className="h-5 w-5" />
          </div>
          <div className="mb-4 rounded-lg bg-gray-800 p-4">
            <div className="flex justify-between">
              <h4 className="mb-2 font-semibold text-rose-500">
                Content Writer
              </h4>
              <div className="flex gap-2">
                <img src={deleteSvg} alt="delete-icon" className="h-4 w-4" />
                <img src={editSvg} alt="edit-icon" className="h-4 w-4" />
              </div>
            </div>
            <p className="mb-2 text-sm text-zinc-200">
              Make Promotional Ads for Instagram fastos
            </p>

            <p className="mt-6 text-xs text-zinc-400">February 20, 2024</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RevisedTask;
