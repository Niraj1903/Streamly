import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generate, makeid } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const allChat = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const Interval = setInterval(() => {
      dispatch(
        addMessage({
          name: `${generate()} : `,
          message: makeid(30),
        })
      );
    }, 1000);

    return () => clearInterval(Interval);
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLiveMessage("");

    dispatch(
      addMessage({
        name: "Niraj",
        message: liveMessage,
      })
    );
  };

  return (
    <div className="w-full h-[70vh] bg-white border border-gray-200 rounded-xl shadow-sm flex flex-col">
      <div className="px-3 py-2 border-b border-gray-200 text-sm font-semibold">
        Live chat
      </div>

      <div className="flex-1 flex flex-col-reverse overflow-y-auto px-3 py-2 text-sm">
        {allChat.map((c, index) => (
          <ChatMessage key={index} name={c.name} message={c.message} />
        ))}
      </div>

      <form
        onSubmit={handleSubmit}
        className="px-3 py-2 border-t border-gray-200 flex items-center gap-2"
      >
        <input
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
          className="
            flex-1 
            px-3 py-2 
            border border-gray-300 
            rounded-full 
            text-xs 
            focus:outline-none 
            focus:ring-1 
            focus:ring-blue-500 
            focus:border-blue-500
          "
          placeholder="Say something..."
        />

        <button
          className="
            px-4 py-2 
            text-xs font-medium 
            bg-blue-600 
            text-white 
            rounded-full 
            hover:bg-blue-700 
            active:scale-95 
            transition
          "
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
