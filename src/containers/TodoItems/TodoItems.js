import React, { useState } from "react";
import ToCss from "./TodoItems.module.css";
import Button from "../../components/Button/Button";
import AddTask from "../../components/AddTask/AddTask";

const TodoItems = () => {
  const [todos = [], setTodos] = useState();
  const [isShowingInputUI = false, setIsShowingInputUI] = useState();
  const [text = "", setText] = useState();
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

  return (
    <div>
      {todos.map((todo, index) => (
        <AddTask key={index} clickRemove={todo}>
          {todo}
        </AddTask>
      ))}
      {isShowingInputUI && (
        <input
          value={text}
          onChange={changeHandler}
          onKeyDown={enterHandler}
          placeholder="Yes tell me your task"
        ></input>
      )}
      {!!text && (
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

//   return (
//     <Aux>
//       {type ? <AddTask task={todos}></AddTask> : null}
//       {isShowingInputUI ? (
//         <AddInput
//           change={changeHandler}
//           enter={enterHandler}
//           task={todos}
//         ></AddInput>
//       ) : null}
//       <div className={ToCss.To}>
//         <Button click={clickHandler}>Add Items</Button>
//         <Button click={cancelHandler}>Cancel</Button>
//       </div>
//     </Aux>
//   );
