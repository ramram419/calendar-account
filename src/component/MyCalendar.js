import React from 'react';
import $ from 'jquery';
import Calendar from '@toast-ui/react-calendar';
import './css/MyCalendar.css';
import 'tui-calendar/dist/tui-calendar.css';
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';
import prevarrow from './img/back.png';
import nextarrow from './img/next.png';
import moment from 'moment';

$(document).ready(function() {
  $(".show").click(function() {
    $(".show").removeClass("on");
    $(this).addClass("on");
  })
})

class MyCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      today: moment(),
      date:moment()
    }
  }
  calendarRef = React.createRef();

  componentDidMount = () => {
    var newdate = moment(this.state.today);
    this.setState({
      today: newdate,
      date: newdate
    })
  }

  handleClickNextButton = () => {
    var newnow = moment(this.state.date).add(1,'M');
    var newdate = moment(newnow);
    this.setState({
      date: newdate
    });
    const calendarInstance = this.calendarRef.current.getInstance();
    calendarInstance.next();
  }

  handleClickPrevButton = () => {
    var newnow = moment(this.state.date).subtract(1,'M');
    var newdate = moment(newnow);
    this.setState({
      date: newdate
    });
    const calendarInstance = this.calendarRef.current.getInstance();
    calendarInstance.prev();
  }

  weekChangeButton = () => {
    const calendarInstance = this.calendarRef.current.getInstance();
    calendarInstance.changeView('week',true);
  }

  monthChangeButton = () => {
    const calendarInstance = this.calendarRef.current.getInstance();
    calendarInstance.changeView('month',true);
  }
  
  render(){
    return(
      <>
      <div className="header">
        <button onClick={this.handleClickPrevButton} className="prev"><img src={prevarrow} alt="prevarrow"></img></button>
        {<p>{this.state.date.format('YYYY.MM')}</p>}
        <button onClick={this.handleClickNextButton} className="next"><img src={nextarrow} alt="nextarrow"></img></button>
        <button onClick={this.weekChangeButton} className="show">WEEK</button>
        <button onClick={this.monthChangeButton} className="show on">MONTH</button>
      </div>
     
      <Calendar                    
        height="750px"                  
        ref={this.calendarRef}                    
        onBeforeCreateSchedule={this.beforeCreateSchedule}                    
        onBeforeUpdateSchedule={this.beforeUpdateSchedule}                    
        onBeforeDeleteSchedule={this.beforeDeleteSchedule}                    
        disableDblClick={true}                    
        disableClick={false}                    
        isReadOnly={false}                    
        // schedules={this.state.scheduleItem} 
        timezones={[{ timezoneOffset: 540,                        
          displayLabel: 'GMT+09:00',                        
          tooltip: 'Seoul'                        
        }]}                    
        useDetailPopup={true}                    
        useCreationPopup={true}                    
        view={"month"}                    
        month={{                        
          daynames: ['일', '월', '화', '수', '목', '금', '토'],                          
          isAlways6Week : true                    
        }} 
        week={{                        
          daynames: ['일', '월', '화', '수', '목', '금', '토']               
        }}                   
        onClickSchedule={this.clickSchedule}                
      />
      </>
    )
  }
}

export default MyCalendar;