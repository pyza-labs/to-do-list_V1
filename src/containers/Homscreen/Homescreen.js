import React, { useState } from "react";
import ToCss from "./Homescreen.module.css";
import Button from "../../components/Button/Button";
import Todo from "../../components/Todo/Todo";

const TodoItems = () => {
  const [todos = [], setTodos] = useState();
  const [isShowingInputUI = false, setIsShowingInputUI] = useState();
  const [text = "", setText] = useState();
  const [isEditTodo = false, setIsEditTodo] = useState();

  const clickHandler = event => {
    setIsShowingInputUI(true);
    if (text) {
      setTodos(todos.concat(text));
      setText("");
    }
  };

  const cancelHandler = () => {
    setIsShowingInputUI(false);
  };

  const changeHandler = event => {
    setText(event.target.value);
  };

  const enterHandler = event => {
    if (event.key === "Enter") {
      if (text) {
        setTodos(todos.concat(text));
        setText("");
      }
    }
  };

  const editHandler = boolVal => {
    setIsEditTodo(boolVal);
    console.log(boolVal);
  };

  // const editSaveHandler = () => {
  //   let arrayTodo = [...todos];
  //   if (text) {
  //     arrayTodo.splice(index, 1, text);
  //     console.log(index);
  //     setTodos(arrayTodo);
  //     setText("");
  //     let arrayEdit = [...editTodo];
  //     arrayEdit.splice(index, 0, false);
  //     setEditTodo(arrayEdit);
  //   }
  // };

  return (
    <div>
      {todos.map((todo, arrIndex) => (
        <Todo
          key={arrIndex}
          clickRemove={todo}
          todo={todo}
          clickEdit={editHandler}
        ></Todo>
      ))}
      {isShowingInputUI && !isEditTodo && (
        <input
          value={text}
          onChange={changeHandler}
          onKeyDown={enterHandler}
          placeholder="Yes tell me your task"
        ></input>
      )}
      {!!text && !isEditTodo && (
        <div className={ToCss.To}>
          <Button click={clickHandler}>Add task</Button>
          <Button click={cancelHandler}>Cancel</Button>
        </div>
      )}
      {!isShowingInputUI && !text && (
        <Button click={() => setIsShowingInputUI(true)} classes={!text}>
          Add task
        </Button>
      )}
    </div>
  );
};
export default TodoItems;
