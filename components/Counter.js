import React, {Component} from 'react'

// counter 01파일
// class Counter extends Component{
//   render(){
//     return(
//       <div className="Counter" align="center">
//         Counter 현재 카운트 : 0
//         &nbsp;&nbsp;&nbsp;
//         <button>카운트 증가</button>
//         <br/><br/>
//       </div>
//     );
//   }
// }
//
// export default Counter;

// // counter 02파일
// class Counter extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       count: props.count
//     }
//   }
//
//   render(){
//     return(
//       <div className="Counter" align="center">
//         Counter 현재 카운트 : {this.state.count}
//         &nbsp;&nbsp;&nbsp;
//         <button>카운트 증가</button>
//         <br/><br/>
//       </div>
//     );
//   }
// }
//
// export default Counter;

// counter 03파일
// App.js 파일에서 넘어온 count 값을 이용하여 초기화.
// increaseCount 함수 바인딩하기
// button onClick 속성 추가하기
class Counter extends Component{
  constructor(props){ // 생성자 신규 추가
    super(props);
    this.state = {
      count: props.count  // 상위 컴포넌트에서 넘겨진 count를 사용.
    }
    this.increaseCount = this.increaseCount.bind(this);
  }
  increaseCount(){
		this.setState(({count}) => ({count : count + 1}));
	}

  render(){
    return(
      <div className="Counter" align="center">
        Counter 현재 카운트 : {this.state.count}
        &nbsp;&nbsp;&nbsp;
        <button onClick={this.increaseCount}>카운트 증가</button>
        <br/><br/>
      </div>
    );
  }
}

export default Counter;
