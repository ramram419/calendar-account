import React from "react";
import './css/Todolist.css';

class Todolist extends React.Component {
	render() {
		return (
			<div className="body">
				<div className="title">TO Do List</div>
				<section className="form-add">
					{this.props.form}
				</section>
				<section className="todo-item">
					{this.props.children}
				</section>
			</div>
		);
	}
}

export default Todolist;