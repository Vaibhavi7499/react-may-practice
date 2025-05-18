import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../reduxEx/userSlice";

const CompB = () => {
  const user = useSelector((state) => state?.user);
  let dispatch = useDispatch();
  console.log(user);
  return (
    <div>
      CompB
      {user?.length ? (
        user?.map((ele) => <h1>{ele}</h1>)
      ) : (
        <h2>No User Found</h2>
      )}
      <button onClick={() => dispatch(addUser("Vaibhavi"))}>Add User</button>
    </div>
  );
};

export default CompB;
