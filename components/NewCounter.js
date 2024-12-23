import React, {Component} from 'react'

// // counter01 파일
// class NewCounter extends Component{
//   render(){
//     return(
//       <div className="Counter" align="center">
//         NewCounter 현재 카운트 : 0
//         &nbsp;&nbsp;&nbsp;
//         <button>카운트 증가</button>
//         <br/><br/>
//       </div>
//     );
//   }
// }
//
// export default NewCounter;

// counter04
// constructor 생성자 구현
// increaseCount 함수 구현
// 생명 주기 관련 getDerivedStateFromProps 함수 구현
// 함수 바인딩 button onClick
class NewCounter extends Component{
	constructor(props){
		super(props);
		this.state = {} ;
		this.increaseCount = this.increaseCount.bind(this) ;
	}

	static getDerivedStateFromProps(props, state) { // 두개의 매개변수
		// getDerivedStateFromProps 함수는 상위 컴포넌트에서 전달 받은
		// 프로퍼티를 사용하여 현재 컴포넌트에 반영하는 역할
		// props는 상위 컴포넌트에서 전달된 값
		// state는 해당 컴포넌트의 state 값

		const { count } = props;
		return {
			// 프로퍼티에서 전달된 count값을 보관한다
			// count 프로퍼티가 변경되지 않으면 기존 state값으로 설정한다.
			// 초기 카운트값을 변경된 프로퍼티에서 값으로 설정한다.
			count,
			newCount:   // count와 state.count값 비교
			count === state.count ? state.newCount : count,
		};
	 }

	increaseCount(){
		this.setState(({ newCount }) => ({ newCount: newCount + 1 }));
	}

	render(){
		return(
			<div className="App" align="center">
				NewCounter 현재 카운트 : {this.state.newCount}
				&nbsp;&nbsp;&nbsp;
				<button onClick={this.increaseCount}>카운트 증가</button>
				<br/>
			</div>
		);
	}
}

export default NewCounter;
