import React, { useState, useTransition } from "react";

const HookUseTransition = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  let [isPending, startTransition] = useTransition();

  let LearnUseTransition = (e) => {
    setInput(e);
    let l = [];

    startTransition(() => {
      for (let i = 0; i < 10000; i++) {
        l.push(e);
      }
      setList(l);
    });
  };

  console.log(list);
  return (
    <div className="col-md-6 offset-md-3 mt-3">
      <input
        type="text"
        className="form-control"
        value={input}
        onChange={(e) => LearnUseTransition(e.target.value)}
        placeholder="type something"
      />
      <div>
        {isPending ? (
          <h2>Loading</h2>
        ) : (
          list.map((ele, i) => {
            return <h2 key={i}>{ele}</h2>;
          })
        )}
      </div>
    </div>
  );
};

export default HookUseTransition;
