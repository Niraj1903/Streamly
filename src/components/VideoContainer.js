import VideoCard from "./VideoCard";
import useVideoContainer from "../utils/useVideoContainer";
import { NavLink } from "react-router-dom";

const VideoContainer = () => {
  const videos = useVideoContainer();

  return (
    <>
      <div className="px-6 pt-4 bg-gray-100 min-h-screen">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {videos?.map((item) => (
            <NavLink to={"/watch?v=" + item.id} key={item.id} className="block">
              <VideoCard info={item} />
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default VideoContainer;
