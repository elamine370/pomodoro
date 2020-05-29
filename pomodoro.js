class Pomodoro extends React.Component{
  constructor(props){
    super(props);
    const sessionLength = {min: 25,
      sec: 0}
    this.state = {
      breakLength: 5,
      sessionLength: sessionLength,
      sessionProcessed: sessionLength
    }
    this.intervalId;
    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }

  decrement(id){
    switch(id){
      case "break-decrement":
        this.setState((state)=>({breakLength: state.breakLength - 1}));
        break;
      case "session-decrement":
        this.setState((state)=>({sessionLength: {min: state.sessionLength.min - 1, sec: state.sessionLength.sec}}));
        this.setState(state=>({sessionProcessed: state.sessionLength}));
        break;
    }
  }
  increment(id){
    // I should add the update of sessionProcessed according to sessionLength when incrementing and decrementing
    switch(id){
      case "break-increment":
        this.setState((state)=>({breakLength: state.breakLength + 1}));
        break;
      case "session-increment":
        this.setState((state)=>({sessionLength: {min: state.sessionLength.min + 1, sec: state.sessionLength.sec}}));
        this.setState(state=>({sessionProcessed: state.sessionLength}));
        break;
    }
  }
  handleTime(){
    //this.setState((state)=>{sessionLength:{sec: state.sessionLength.sec - 1}});
    this.setState(state=>({sessionProcessed: {...state.sessionProcessed, sec: state.sessionProcessed.sec - 1}}));

    if(this.state.sessionProcessed.min != 0){
      if(this.state.sessionProcessed.sec == -1){
        this.setState(state=>({sessionProcessed: {...state.sessionProcessed, sec: 59}}));
        this.setState((state)=>({sessionProcessed:{...state.sessionProcessed, min: state.sessionProcessed.min - 1}}));
      }
    }
    else if(this.state.sessionProcessed.sec === 0){
      this.pause();
      let audio = new Audio()
      setTimeout(()=>{
        this.setState(state=>({sessionProcessed: state.sessionLength}))},3000);
    }
  }
  play(){
    //this.setState((state)=>({sessionProcessed:{...state.sessionProcessed, sec: state.sessionProcessed.sec - 1}}));
    if(typeof this.intervalId === 'undefined'){
      console.log('intervalId is undefined')
      this.intervalId = setInterval(this.handleTime.bind(this),1000);
      console.log(this.intervalId);
      this.setState({intervalId: this.intervalId});
    }
  }
  pause(){
    clearInterval(this.state.intervalId);
    this.intervalId = undefined;
  }
  render(){
    return(
      <div class="ml-5">
        <h1>Test</h1>
        <div id="break-label">Break Length</div>
        <div><i id="break-decrement" class="fas fa-angle-down" onClick={this.decrement.bind(this,"break-decrement")}></i> <strong id="break-length">{this.state.breakLength}</strong> <i id="break-increment" class="fas fa-angle-up" onClick={this.increment.bind(this,"break-increment")}></i></div>
        <div id="session-label"><i id="session-decrement" ></i>Session Length<i id="session-increment"></i></div>
        <div><i id="session-decrement" class="fas fa-angle-down" onClick={this.decrement.bind(this,"session-decrement")}></i> <strong id="session-length">{this.state.sessionLength.min}</strong> <i id="session-increment" class="fas fa-angle-up" onClick={this.increment.bind(this,"session-increment")}></i></div>
        <div>Session</div>
        <div><strong id="session">{this.state.sessionProcessed.min}:{this.state.sessionProcessed.sec}</strong></div>
        <div><i id="play" class="fa fa-play" onClick={this.play}></i> <i id="pause" class="fa fa-pause" onClick={this.pause}></i></div>
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


<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
<div id="root"></div>
