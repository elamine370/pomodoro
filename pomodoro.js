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
    this.decrementB = this.decrementB.bind(this);
  }
  componentDidMount(){
    document.addEventListener
  }

  handleTime(){
    this.setState((state)=>{sessionLength:{sec: state.sessionLength.sec - 1}});
    if(this.state.sessionLength.sec == -1){
      this.setState({sessionLength: {sec: 59}});
    }
    this.setState((state)=>{sessionLength:{min: state.sessionLength.min - 1}})
  }
  decrementB(str){
    alert(str);
    if(str == "break-decrement"){
      this.setState((state)=>{{breakLength: state.breakLength - 1}});
      console.log(this.state.breakLength);
    }
  }
  increment(id){

  }
  render(){
    return(
      <div class="ml-5">
        <h1>Test</h1>
        <div id="break-label">Break Length</div>
        <div><i id="break-decrement" class="fas fa-angle-down" ></i> <strong id="break-length">{this.state.breakLength}</strong> <i id="break-increment" class="fas fa-angle-up" ></i></div>
        <div id="session-label"><i id="session-decrement" ></i>Session Length<i id="session-increment"></i></div>
        <div><i id="session-decrement" class="fas fa-angle-down"></i> <strong id="session-length">{this.state.sessionLength.min}</strong> <i id="session-increment" class="fas fa-angle-up" ></i></div>
        <div>Session</div>
        <div><strong id="session">{this.state.sessionLength.min}:{this.state.sessionLength.sec}</strong></div>
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
