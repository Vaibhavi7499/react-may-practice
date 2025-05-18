import React, { useState } from "react";
import "./userform.scss";
import { v4 as uuidv4 } from "uuid";

const UserForm = () => {
  let [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  let [id, setId] = useState("");
  let [userlist, setUserlist] = useState([]);

  console.log(user);
  console.log(userlist);

  const deleteUser = (id) => {
    let filteredUser = userlist.filter((e) => {
      return e.id !== id;
    });
    setUserlist(filteredUser);
  };

  const updateUser = (obj) => {
    setUser({
      name: obj.name,
      email: obj.email,
      password: obj.password,
    });

    setId(obj.id);
  };

  let addUser = () => {
    if (id) {
      let newUser = userlist.map((e) => {
        if (e?.id === id) {
          return {
            ...e,
            name: user.name,
            email: user.email,
            password: user.password,
          };
        } else {
          return e;
        }
      });
      setUserlist(newUser)
      setUser("")
      setId("")
    } else {
        setUserlist([...userlist,user])
    }
  };
  return (
    <>
      <div className="main-div">
        <div>
          <label>Enter user name :</label>
          <input type="text" value={user?.name} onChange={(e) => setUser({ ...user, name: e.target.value, id: uuidv4()})} />
        </div>
        <div>
          <label>Enter email :</label>
          <input
            className="email"
            type="text"
            value={user?.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div>
          <label>Enter password :</label>
          <input
            type="text"
            value={user?.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        <div>
          <button
            className="btn btn-primary"
            onClick={addUser}
          >
           {id ? "Update User" : "Add User"} 
          </button>
        </div>
      </div>
      <div className="col-md-4 subtag">
        {userlist.map((e) => (
          <ol class="list-group list-group-numbered">
            <li class="list-group-item d-flex">
              <div class=" me-auto">
                <div class="fw-bold">{e?.name}</div>
              </div>
              <span>
                <button
                  className="btn btn-success"
                  onClick={() => updateUser(e)}
                >
                  Update
                </button>{" "}
                <button
                  className="btn btn-danger"
                  onClick={() => deleteUser(e?.id)}
                >
                  Delete
                </button>
              </span>
            </li>
          </ol>
        ))}
      </div>
    </>
  );
};

export default UserForm;
