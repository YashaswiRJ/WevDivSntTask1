import React, { useState } from "react";
function CreatingSegment(props) {
  const [makers, setMakers] = useState({
    subject: "",
    matter: "",
  });
  function respondChange() {
    const { name, value } = event.target;
    setMakers((prev) => {
      return { ...prev, [name]: value };
    });
  }
  function respondClick() {
    event.preventDefault();
    props.onCheck(makers);
    setMakers({
      subject: "",
      matter: "",
    });
  }
  return (
    <div className="CreatingSegment">
      <form>
        <input
          placeholder="Title"
          name="subject"
          onChange={respondChange}
          value={makers.subject}
        />
        <br />
        <textarea
          name="matter"
          onChange={respondChange}
          value={makers.matter}
          placeholder="Description"
          rows="3"
        />
        <button onClick={respondClick}>Add</button>
      </form>
    </div>
  );
}
export default CreatingSegment;
