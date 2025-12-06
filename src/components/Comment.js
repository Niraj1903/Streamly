import { CgProfile } from "react-icons/cg";

const Comment = ({ data }) => {
  return (
    <>
      <div>
        <CgProfile />
      </div>
      <div>
        <span>{data.name}</span>
        <p>{data.text}</p>
      </div>
    </>
  );
};

export default Comment;
