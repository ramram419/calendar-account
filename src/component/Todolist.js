import React from 'react';
import Template from './Todolist-t';
import Todoform from './todoform';
import TodoItemlist from "./TodoItemlist";


class Todolist extends React.Component {
  id = 0

  state = {
    input: '',
    todoitems: []
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  handleCreate = () => {
    const { input, todoitems } = this.state;
    this.setState({
      input: '', 
      todoitems: todoitems.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  }

  handleToggle = (id) => {
    const { todoitems } = this.state;

    const index = todoitems.findIndex(todoitem => todoitem.id === id);
    const selected = todoitems[index];

    const nextTodoitems = [...todoitems];

    nextTodoitems[index] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      todoitems: nextTodoitems
    });
  }

  handleRemove = (id) => {
    const { todoitems } = this.state;
    this.setState({
      todoitems: todoitems.filter(todoitem => todoitem.id !== id)
    });
  }


  render() {
    const { input, todoitems } = this.state;
    const { handleChange, handleCreate, handleToggle, handleRemove } = this;
    return(
        <Template form={
          <Todoform 
            value={input}
            onChange={handleChange}
            onCreate={handleCreate}
          />}>
          <TodoItemlist todoitems={todoitems} onToggle={handleToggle} onRemove={handleRemove}/>
        </Template>
    )
  }
}


export default Todolist;