import React from "react";
import './css/todoform.css';

class Todoform extends React.Component {
	render() {
		return (
			<div className="form">
        <input value={this.props.value} onChange={this.props.onChange} onKeyPress={this.props.onKeypress} />
        <div className="button" onClick={this.props.onCreate}>
          추가
        </div>
      </div>
		);
	}
}

export default Todoform;