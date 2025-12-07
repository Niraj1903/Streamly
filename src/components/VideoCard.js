const VideoCard = ({ info }) => {
  if (!info) return null; //early return
  const { snippet, statistics } = info;
  const { thumbnails, title } = snippet;
  const { likeCount } = statistics;

  return (
    <>
      <div className="w-full cursor-pointer">
        <div className="overflow-hidden rounded-xl">
          <img
            className="w-full h-44 object-cover rounded-xl transition-transform duration-150 hover:scale-[1.03]"
            alt="ThumbNail"
            src={thumbnails.medium.url}
          />
        </div>

        <div className="mt-3 flex gap-3">
          {/* avatar placeholder like YouTube */}
          <div className="w-9 h-9 rounded-full bg-gray-300 flex-shrink-0" />

          <div className="flex flex-col">
            <h4 className="text-sm font-semibold text-gray-900 leading-snug line-clamp-2">
              {title}
            </h4>
            <p className="text-xs text-gray-500 mt-1">{likeCount} likes</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoCard;
