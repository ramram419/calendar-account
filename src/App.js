import React from "react";
import Calendar from './component/MyCalendar';
import "./App.css"

class App extends React.Component {
  render() {
    return(
      <>
      <div className="calendar">
        <Calendar />
      </div>
      <div className="todolist">
        list
      </div>
      </>
    )
  }
}


export default App;