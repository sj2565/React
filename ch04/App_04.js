import React, {Component} from 'react'
import MemberList from './components/MemberList'
import Fruit from './components/Fruit'

class App extends Component{
  render(){
    return(
      <div className="App">
        <MemberList />
        <hr/>
        <Fruit />
      </div>
    );
  }
}

export default App;
