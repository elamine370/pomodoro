class Pomodoro extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: {
      min: 25,
      sec: 0,
      }
    }
  }
  handleTime(){
    this.setState((state)=>{sessionLength:{sec: state.sessionLength.sec - 1}});
    if(this.state.sessionLength.sec == -1){

      this.state.sessionLength.sec = 59;
      this.setState((state)=>{sessionLength:{min: state.sessionLength.min - 1}})
    }
  }
  render(){
    return(
      <div>
        <h1>Test</h1>
        <div id="break-label">Break Length</div>
        <div><i id="break-decrement"></i><strong id="break-length">{this.state.breakLength}</strong><i id="break-increment"></i></div>
        <div id="session-label"><i id="session-decrement"></i>Session Length<i id="session-increment"></i></div>
        <div><i id="session-decrement"></i><strong id="session-length">{this.state.sessionLength.min}:{this.state.sessionLength.sec}</strong><i id="session-increment"></i></div>
        <div>
          <div>
            <div id="timer-label"></div>
            <div id="time-left"></div>
          </div>
        </div>
      </div>
    )
  }
}
ReactDOM.render(<Pomodoro />, document.getElementById("root"));
