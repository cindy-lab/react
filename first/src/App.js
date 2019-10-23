import React, {Component} from 'react'
import Dashboard from './Dashboard';


class App extends Component{
  constructor(props){
    super(props);
    this.state={
      uname: "",
      pass:"",
      bool: false
    };
  }
  UnameHandler = (e) => {
    this.setState({uname: e.target.value})
  }
  PassHandler = (e) => {
    this.setState({pass: e.target.value})
  }
  BoolChange =(e) => {
    this.setState({bool:true})
  }
  render() {
    const {bool}=this.state;  
    if(!bool){
      return(
    <div>
      <h1>Stargaze</h1>
      login: <input type="text" onChange={this.UnameHandler}/><br/>
      password: <input type="password" onChange={this.PassHandler}/>
      <br/><button type="submit" onClick={this.BoolChange}>Login</button>
    </div>
  )
    }
    else {
      return(
        <Dashboard username={this.state.uname}/>
      )
    }
}
}
export default App
