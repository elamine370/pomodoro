class Pomodoro extends React.Component{
  constructor(props){
    super(props);
    const sessionLength = {min: 25,
      sec: 0}
    const breakLength = {min: 5, sec: 0};
    this.state = {
      breakLength: breakLength,
      breakProcessed: breakLength,
      sessionLength: sessionLength,
      sessionProcessed: sessionLength,
      actualState: 'Session'
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
        if(this.state.breakLength.min > 1){
          this.setState((state)=>({breakLength: {...state.breakLength, min: state.breakLength.min - 1}}));
          this.setState(state=>({breakProcessed: state.breakLength}));
        }
        break;
      case "session-decrement":
        if(this.state.sessionLength.min > 1){
          this.setState((state)=>({sessionLength: {min: state.sessionLength.min - 1, sec: state.sessionLength.sec}}));
          this.setState(state=>({sessionProcessed: state.sessionLength}));
        }
        break;
    }
  }
  increment(id){
    // I should add the update of sessionProcessed according to sessionLength when incrementing and decrementing
    switch(id){
      case "break-increment":
        this.setState((state)=>({breakLength: {...state.breakLength, min: state.breakLength.min + 1}}));
        this.setState(state=>({breakProcessed: state.breakLength}));
        break;
      case "session-increment":
        this.setState((state)=>({sessionLength: {min: state.sessionLength.min + 1, sec: state.sessionLength.sec}}));
        this.setState(state=>({sessionProcessed: state.sessionLength}));
        break;
    }
  }
  handleTime(str="sessionProcessed"){
    //this.setState((state)=>{sessionLength:{sec: state.sessionLength.sec - 1}});
    this.setState(state=>({[str]: {...state[str], sec: state[str].sec - 1}}));
    console.log(this.state[str]);
    if(this.state[str].min != 0){
      if(this.state[str].sec == -1){
        this.setState(state=>({[str]: {...state[str], sec: 59}}));
        this.setState((state)=>({[str]:{...state[str], min: state[str].min - 1}}));
      }
    }
    else if(this.state[str].sec === 0){
      this.pause();
      let audio = new Audio("https://fsa.zobj.net/download/bIBnqwrsx0nd2UGHZxlB0CY5m7_fS63qm7197yATvJv8eNACR5vwAcCENXoB_leOhEQQ2xAtBxPxOTqTsEWp7UFgTmhl0cv3d8T3gax9I01g3pvhT81UOeSblvfE/?a=web&c=72&f=japanese_school_bell.mp3&special=1591377532-Jumw%2F4%2FIRpGXK7TABUpBYLikBPv64u3NnDRrw3YLWOw%3D");
      audio.play();
      setTimeout(()=>{
        if(str=='breakProcessed'){
          this.setState(state=>({[str]: this.state.breakLength}));
          this.setState({actualState: 'Session'});
          this.play("sessionProcessed");
        }
        else{
          this.setState(state=>({[str]: state.sessionLength}));
          this.setState({actualState: 'Break'});
          this.play("breakProcessed");
        }

      },7000);
    }
  }
  play(actualState="sessionProcessed"){
    //this.setState((state)=>({sessionProcessed:{...state.sessionProcessed, sec: state.sessionProcessed.sec - 1}}));
    if(typeof this.intervalId === 'undefined'){
      console.log('intervalId is undefined')
      this.intervalId = setInterval(this.handleTime.bind(this,actualState),1000);
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
        <div><i id="break-decrement" class="fas fa-angle-down" onClick={this.decrement.bind(this,"break-decrement")}></i> <strong id="break-length">{this.state.breakLength.min}</strong> <i id="break-increment" class="fas fa-angle-up" onClick={this.increment.bind(this,"break-increment")}></i></div>
        <div id="session-label"><i id="session-decrement" ></i>Session Length<i id="session-increment"></i></div>
        <div><i id="session-decrement" class="fas fa-angle-down" onClick={this.decrement.bind(this,"session-decrement")}></i> <strong id="session-length">{this.state.sessionLength.min}</strong> <i id="session-increment" class="fas fa-angle-up" onClick={this.increment.bind(this,"session-increment")}></i></div>
        <div>{this.state.actualState}</div>
        <div><strong id="session">{this.state.actualState === 'Session'? this.state.sessionProcessed.min : this.state.breakProcessed.min}:{this.state.actualState === 'Session'? this.state.sessionProcessed.sec : this.state.breakProcessed.sec}</strong></div>
        <div><i id="play" class="fa fa-play" onClick={()=>{this.state.actualState === 'Session'? this.play():this.play('breakProcessed')}}></i> <i id="pause" class="fa fa-pause" onClick={this.pause}></i></div>
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
