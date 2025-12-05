import { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatmessage = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const Interval = setInterval(() => {
      dispatch(
        addMessage({
          name: "Niraj",
          message: "Lorem ipsum dolor sit amet",
        })
      );
    }, 2000);
    return () => clearInterval(Interval);
  }, []);
  return (
    <>
      <div>Live Chat</div>
      {chatmessage.map((c) => (
        <ChatMessage name={c.name} message={c.message} />
      ))}
    </>
  );
};

export default LiveChat;
