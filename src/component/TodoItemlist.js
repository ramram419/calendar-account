import React from "react";
import TodoItem from "./TodoItem";

class TodoItemlist extends React.Component{

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.todoitems !== nextProps.todoitems;
  }

  render(){
    const { todoitems, onToggle, onRemove } =this.props;

    const todolist = todoitems.map(({id, text, checked }) => 
      (
        <TodoItem 
          id={id}
          text={text}
          checked={checked}
          onToggle={onToggle}
          onRemove={onRemove}
          key={id}
        />
      )
    )
    return(
      <div>
        {todolist}
      </div>
    );
  }
}

export default TodoItemlist;