import React from "react";

const Todolist = (props) => {
    return <>
        <div className="todo_list">
            <i class=" fa fa_time" aria-hidden="true" />
        <li>{props.text}</li>
        </div>
        </>
}
export default Todolist;
