import { useEffect } from "react";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  useEffect(() => {
    const Interval = setInterval(() => console.log("API Polling"), 2000);
    return () => clearInterval(Interval);
  }, []);
  return (
    <>
      <div>Live Chat</div>
      <ChatMessage name={"Niraj"} message={"This is Live Chat "} />
      <ChatMessage name={"Niraj"} message={"This is Live Chat "} />
      <ChatMessage name={"Niraj"} message={"This is Live Chat "} />
      <ChatMessage name={"Niraj"} message={"This is Live Chat "} />
    </>
  );
};

export default LiveChat;
