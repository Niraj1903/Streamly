import { CgProfile } from "react-icons/cg";

const Comment = ({ data }) => {
  return (
    <div className="flex gap-3 w-full py-3">
      <div>
        <CgProfile className="w-10 h-10 text-gray-600" />
      </div>

      <div className="w-full">
        <div className="flex items-center gap-2">
          <p className="text-sm font-semibold text-gray-900">{data.name}</p>
          <span className="text-xs text-gray-500">• 1 day ago</span>
        </div>

        <p className="text-sm text-gray-800 mt-1">{data.text}</p>

        <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
          <button className="hover:text-black">👍</button>
          <button className="hover:text-black">👎</button>
          <button className="hover:text-black font-medium">Reply</button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
