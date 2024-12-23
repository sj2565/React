import React, {Component} from 'react'

class App extends Component{
  render(){
    return(
      <header>
        <h1>{this.props.greeting}</h1>
        {this.props.hello}
      </header>
    );
  }
}

export default App;
