import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((item) => item.app.isMenuOpen);
  if (!isMenuOpen) return null;

  return (
    <>
      <div className="w-56 bg-white h-[calc(100vh-56px)] border-r border-gray-200 px-3 pt-3 text-sm sticky top-14">
        <ul className="space-y-1">
          <NavLink to="/" className="block">
            <li className="px-3 py-2 rounded-lg hover:bg-gray-100 font-medium">
              Home
            </li>
          </NavLink>

          <li className="px-3 py-2 rounded-lg hover:bg-gray-100">Sports</li>
          <li className="px-3 py-2 rounded-lg hover:bg-gray-100">Video</li>
          <li className="px-3 py-2 rounded-lg hover:bg-gray-100">Live</li>
        </ul>

        <h1 className="mt-5 mb-2 px-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">
          Subscriptions
        </h1>
        <ul className="space-y-1">
          <li className="px-3 py-2 rounded-lg hover:bg-gray-100">Music</li>
          <li className="px-3 py-2 rounded-lg hover:bg-gray-100">Sports</li>
          <li className="px-3 py-2 rounded-lg hover:bg-gray-100">Gaming</li>
          <li className="px-3 py-2 rounded-lg hover:bg-gray-100">Movies</li>
        </ul>

        <h1 className="mt-5 mb-2 px-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">
          Watch Later
        </h1>
        <ul className="space-y-1 mb-4">
          <li className="px-3 py-2 rounded-lg hover:bg-gray-100">Music</li>
          <li className="px-3 py-2 rounded-lg hover:bg-gray-100">Sports</li>
          <li className="px-3 py-2 rounded-lg hover:bg-gray-100">Gaming</li>
          <li className="px-3 py-2 rounded-lg hover:bg-gray-100">Movies</li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
