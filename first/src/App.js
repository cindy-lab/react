import React, {Component} from 'react'

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      uname: "",
      pass:""
    };
  }
  UnameHandler = (e) => {
    this.setState({uname: e.target.value})
  }
  PassHandler = (e) => {
    this.setState({pass: e.target.value})
  }
  render() {
    const {uname, pass}=this.state;
  return(
    <div>
      <h1>Stargaze</h1>
      <h2>{uname}</h2>
      <h2>{pass}</h2>
      login: <input type="text" onChange={this.UnameHandler}/><br/>
      password: <input type="password" onChange={this.PassHandler}/>
    </div>
  )
}
}
export default App
