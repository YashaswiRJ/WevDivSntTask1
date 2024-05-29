import React, { useState } from "react";
import Heading from "./Heading";
import Footer from "./Footer";
import CreatingSegment from "./CreatingSegment";
import TodoList from "./TodoList";

function App() {
  const [todoArray, setTodoArray] = useState([
    {
      subject: "Cooking Egg",
      matter: "Break egg in pan and cook it 😎",
    },
  ]);
  function addItem(newItem) {
    setTodoArray((prev) => {
      return [...prev, newItem];
    });
  }
  function deleteFunction(id) {
    setTodoArray((prev) => {
      return prev.filter((prev, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Heading />
      <CreatingSegment onCheck={addItem} />
      {todoArray.map((each, index) => {
        return (
          <TodoList
            subject={each.subject}
            matter={each.matter}
            id={index}
            key={index}
            onDelete={deleteFunction}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
