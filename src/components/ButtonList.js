import Button from "./Button";

const list = [
  "Cricket",
  "Podcasts",
  "News",
  "Live",
  "Music",
  "Mixes",
  "Watched",
  "New",
  "Films",
  "Guitar",
  "Presentation",
  "Movies",
  "Comedy",
];

const ButtonList = () => {
  return (
    <>
      <div
        className="
          w-full 
          flex gap-3 
          px-4 py-3 
          bg-white 
          border-b border-gray-200 
          sticky top-14 z-20 
          overflow-x-auto 
          scrollbar-none
        "
      >
        {list.map((item) => (
          <Button key={item} name={item} />
        ))}
      </div>
    </>
  );
};

export default ButtonList;
