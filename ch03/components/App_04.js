import React, {Component} from 'react'

// Heading은 클래스 이름, Heading01은 파일 이름
import Heading from './components/Heading01';
import Navigation from './components/Navigation01';
import Closing from './components/Closing01';

class App extends Component{
  render(){
    return(
      <div className="App">
      <Heading greeting ="인사말" hello="졸려"/>
      <Navigation subject01="짜장면" subject02="우동" subject03="탕수육" />
      </div>
    );
  }
}

export default App;
