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
<<<<<<< HEAD
    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
=======
    this.decrementB = this.decrementB.bind(this);
>>>>>>> 9d31bd62907ea933ff92ccae3e35a2f773dcf50a
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
<<<<<<< HEAD
  decrement(id){
    switch(id){
      case "break-decrement":
        this.setState((state)=>({breakLength: state.breakLength - 1}));
        break;
      case "session-decrement":
        this.setState((state)=>({sessionLength: {min: state.sessionLength.min - 1, sec: state.sessionLength.sec}}));
        break;
    }
  }
  increment(id){
    switch(id){
      case "break-increment":
        this.setState((state)=>({breakLength: state.breakLength + 1}));
        break;
      case "session-increment":
        this.setState((state)=>({sessionLength: {min: state.sessionLength.min + 1, sec: state.sessionLength.sec}}));
        break;
    }
=======
  decrementB(str){
    alert(str);
    if(str == "break-decrement"){
      this.setState((state)=>{{breakLength: state.breakLength - 1}});
      console.log(this.state.breakLength);
    }
  }
  increment(id){

>>>>>>> 9d31bd62907ea933ff92ccae3e35a2f773dcf50a
  }
  render(){
    return(
      <div class="ml-5">
        <h1>Test</h1>
        <div id="break-label">Break Length</div>
<<<<<<< HEAD
        <div><i id="break-decrement" class="fas fa-angle-down" onClick={()=>{this.decrement("break-decrement")}}></i> <strong id="break-length">{this.state.breakLength}</strong> <i id="break-increment" class="fas fa-angle-up" onClick={()=>{this.increment("break-increment")}}></i></div>
        <div id="session-label"><i id="session-decrement" ></i>Session Length<i id="session-increment"></i></div>
        <div><i id="session-decrement" class="fas fa-angle-down" onClick={()=>{this.decrement("session-decrement")}}></i> <strong id="session-length">{this.state.sessionLength.min}</strong> <i id="session-increment" class="fas fa-angle-up" onClick={()=>{this.increment("session-increment")}}></i></div>
=======
        <div><i id="break-decrement" class="fas fa-angle-down" ></i> <strong id="break-length">{this.state.breakLength}</strong> <i id="break-increment" class="fas fa-angle-up" ></i></div>
        <div id="session-label"><i id="session-decrement" ></i>Session Length<i id="session-increment"></i></div>
        <div><i id="session-decrement" class="fas fa-angle-down"></i> <strong id="session-length">{this.state.sessionLength.min}</strong> <i id="session-increment" class="fas fa-angle-up" ></i></div>
>>>>>>> 9d31bd62907ea933ff92ccae3e35a2f773dcf50a
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
