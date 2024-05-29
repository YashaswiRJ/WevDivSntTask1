import React, { useState } from "react";

function TodoList(props) {
  const [Checked, setChecked] = useState(true);
  const [visible, setVisible] = useState(false);
  function onDel() {
    props.onDelete(props.id);
  }
  function respondCheck() {
    const bool = event.target.checked;
    setChecked(!bool);
  }
  function handlePlus() {
    setVisible((prev) => {
      return !prev;
    });
  }
  return (
    <div
      className="note"
      style={{ backgroundColor: !Checked ? "#7FFF00" : "pink" }}
    >
      <h2>
        <b>{props.subject}</b>
      </h2>
      <p style={{ visibility: visible ? "visible" : "hidden" }}>
        {props.matter}
      </p>
      <button onClick={handlePlus}> + </button>
      <hr />
      <input type="checkbox" value={Checked} onChange={respondCheck} />
      <label>Task Done</label>
      <hr />
      <button onClick={onDel}>Delete</button>
    </div>
  );
}

export default TodoList;
