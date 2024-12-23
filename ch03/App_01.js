import React, {Component} from 'react'
import './App.css';

 class App extends Component{
//   // render 함수가 사용자 정의 컴포넌트를 만들어 준다.
//   render(){
//     console.log('클래스 방식 jsx 실습');
//     return(
//       <div>
//         <span>하하하</span>
//         <div>안녕하세요</div>
//         <img src="http://localhost:3000/abcd.jpg" alt="dd" width="300" height="300"></img>
//         <div>반갑습니다.</div>
//       </div>
//     );
//   }
// }
//
// export default App;

function App(){
  console.log('함수형 방식(초간단 JSX 실습)');
  return (
    <div className="App">
          <div>함수형 방식(초간단 JSX 실습).</div>
        <img src="http://localhost:3000/abcd.jpg" alt="dd" width="300" height="300/>
        <div>안녕하세요</div>
    </div>
  );
}

export default App;
