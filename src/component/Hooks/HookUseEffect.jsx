import React, { useEffect, useState } from "react";

const HookUseEffect = () => {
  let [data, setData] = useState([]);

  let userData = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let res = await response.json();
    setData(...data, res);
  };

  useEffect(() => {
    userData();
  }, []);

  return (
    <div>
      {data.map((e) => (
        <ul>
          <li>{e?.name}</li>
          <li>{e?.address?.city}</li>
        </ul>
      ))}
    </div>
  );
};

export default HookUseEffect;
