import { useContext } from "react";
import { userContext } from "../context/UserContext";

const ContextApi = () => {
  let { userName, changeName } = useContext(userContext);

  return (
    <div style={{margin:" 20px 400px" }}>
      <h2>{userName}</h2>
      <button className="btn btn-outline-secondary" onClick={changeName}>
        ChangeName
      </button>
    </div>
  );
};

export default ContextApi;
