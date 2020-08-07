import React from "react";
import Calendar from './component/MyCalendar';
import Todolist from './component/Todolist'
import "./App.css"

class App extends React.Component {
  render() {
    return(
      <>
      <div className="calendar">
        <Calendar />
      </div>
      <div className="todolist">
        <Todolist />
      </div>
      </>
    )
  }
}


export default App;