import { FaUserCircle } from "react-icons/fa";

const ChatMessage = ({ name, message }) => {
  return (
    <>
      <div className="flex align-middle">
        <span>
          <FaUserCircle />
        </span>
        <span>{name}</span>
        <span>{message}</span>
      </div>
    </>
  );
};
export default ChatMessage;
