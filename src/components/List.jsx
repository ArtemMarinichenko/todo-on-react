import React from "react";
import Task from "./Task";

const List = ({arr, remove, actual}) => {
  const task = arr.map((el) => {
    const {id, ...elProps} = el;
    return  (<Task text={el.title} 
                  {...elProps}
                  key={id} 
                  remove={() => remove(id)}
                  marked={() => actual(id)}
             />)
  })
  return (
    <div>
      {task}
    </div>
  )
}

export default List;