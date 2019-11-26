import React, { useState } from "react";
import AddCss from "./Todo.module.css";
import Button from "../Button/Button";
import DateTimePicker from "react-datetime-picker";

// import { check, checkMark } from "../../assets/assets";
// import check2 from "../../assets/div_svg.svg";
const Todo = props => {
  const [classes = AddCss.Add, setClasses] = useState();
  const [editTodo = false, setEditTodo] = useState();
  // const [text = "", setText] = useState(); Used this But not need as  don't need to render this onScreen
  const [editedTodoString = props.todo, setEditedTodoString] = useState();
  // const [editDate = false, setEditDate] = useState();
  const [date = new Date(), setDate] = useState();

  let text = "";

  const editClickHandler = () => {
    if (text) {
      setEditedTodoString(text);
      // text = ""; This will be automatically set to null as components are rerendered
      setEditTodo(false);
      props.clickEdit(false);
    }
  };

  const cancelHandler = () => {
    setEditTodo(false);
    props.clickEdit(false);
  };

  const editChangeHandler = event => {
    text = event.target.value;
  };

  const editEnterHandler = () => {};

  //Passing editTodo bool value to parent(Homescreen) from child(Todo)
  // props.clickEdit(editTodo);

  const editTodoHandler = () => {
    setEditTodo(true);
    props.clickEdit(true);
  };

  const dateTimeHandler = date => {
    setDate(date);
  };

  let todoRender = (
    <div className={classes}>
      <div
        className={AddCss.checkbox}
        onClick={() => setClasses(AddCss.strikeDisplay)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z" />
        </svg>
      </div>

      {editedTodoString}

      <div className={AddCss.editTools}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          onClick={editTodoHandler}
        >
          <path d="M64 368v80h80l235.727-235.729-79.999-79.998L64 368zm377.602-217.602c8.531-8.531 8.531-21.334 0-29.865l-50.135-50.135c-8.531-8.531-21.334-8.531-29.865 0l-39.468 39.469 79.999 79.998 39.469-39.467z" />
        </svg>

        <DateTimePicker
          onChange={dateTimeHandler}
          value={date}
          className={AddCss.date}
          calendarClassName={AddCss.date}
          clearIcon={null}
          format="dd-MM-y"
        ></DateTimePicker>

        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          onClick={dateTimeHandler}
        >
          <path d="M368.005 272h-96v96h96v-96zm-32-208v32h-160V64h-48v32h-24.01c-22.002 0-40 17.998-40 40v272c0 22.002 17.998 40 40 40h304.01c22.002 0 40-17.998 40-40V136c0-22.002-17.998-40-40-40h-24V64h-48zm72 344h-304.01V196h304.01v212z" />
        </svg> */}
      </div>
    </div>
  );
  return editTodo ? (
    <div>
      <input
        className={AddCss.editInput}
        onChange={editChangeHandler}
        onKeyDown={editEnterHandler}
      ></input>
      <div className={AddCss.Add}>
        <Button click={editClickHandler}>Save</Button>
        <Button click={cancelHandler}>Cancel</Button>
      </div>
    </div>
  ) : (
    todoRender
  );
};
export default Todo;
