import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <>
      <div className="flex-1 bg-gray-100 min-h-screen">
        <ButtonList />
        <div className="px-6 pt-6">
          <VideoContainer />
        </div>
      </div>
    </>
  );
};

export default MainContainer;
