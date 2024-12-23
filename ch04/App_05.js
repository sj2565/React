import React, {Component} from 'react'
import Counter from './components/Counter'
import NewCounter from './components/NewCounter'

// counter01 파일
// class App extends Component{
//   render(){
//     return(
//       <div className="App">
//         <br/>
//         <Counter />
//         <NewCounter />
//         <br/>
//         <div align="center">
//           <button>10으로 초기화</button>
//         </div>
//       </div>
//     );
//   }
// }
//
// export default App;

// // counter02파일
// class App extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       count : 10  // count의 값을 임의로 10 시작
//     }
//   }
//
//   render(){
//     return(
//       <div className="App">
//         <br/>
//         <Counter count={this.state.count}/>
//         <NewCounter />
//         <br/>
//         <div align="center">
//           <button>10으로 초기화</button>
//         </div>
//       </div>
//     );
//   }
// }
//
// export default App;

// counter03파일
// class App extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       count : 10  // count의 값을 임의로 10 시작
//     }
//     this.resetCount = this.resetCount.bind(this);
//   }
//
//   resetCount(){
//     this.setState(
//       ({count}) => ({count : count + 10})
//     );
//   }
//
//   render(){
//     return(
//       <div className="App">
//         <br/>
//         <Counter count={this.state.count}/>
//         <NewCounter />
//         <br/>
//         <div align="center">
//           <span>다음 버튼은 NewCounter에서만 동작한다. </span>
//           <br/><br/>
//           <button onClick={this.resetCount}>
//             {this.state.count + 10}으로 초기화</button>
//         </div>
//       </div>
//     );
//   }
// }
//
// export default App;

// counter04파일
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      count : 10  // count의 값을 임의로 10 시작
    }
    this.resetCount = this.resetCount.bind(this);
  }

  resetCount(){
    this.setState(
      ({count}) => ({count : count + 10})
    );
  }

  render(){
    return(
      <div className="App">
        <br/>
        <Counter count={this.state.count} />
        <NewCounter count={this.state.count} />
        <br/>
        <div align="center">
          <span>다음 버튼은 NewCounter에서만 동작한다. </span>
          <br/><br/>
          <button onClick={this.resetCount}>
            {this.state.count + 10}으로 초기화</button>
        </div>
      </div>
    );
  }
}

export default App;
