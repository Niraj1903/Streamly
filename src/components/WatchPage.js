import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-100">
      <div className="flex flex-col lg:flex-row gap-4 px-6 pt-4">
        {/* Video + comments */}
        <div className="flex-1 flex flex-col">
          <div className="w-full bg-black rounded-xl overflow-hidden aspect-video">
            <iframe
              className="w-full h-full"
              width="1000"
              height="600"
              src={"https://www.youtube.com/embed/" + searchParams.get("v")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          <div className="mt-5 bg-white rounded-xl p-4 shadow-sm">
            <CommentContainer />
          </div>
        </div>

        {/* Live chat sidebar */}
        <div className="w-full lg:w-[360px] xl:w-[420px]">
          <LiveChat />
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
