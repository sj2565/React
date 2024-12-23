import React, {Component} from 'react'

class StateManager extends Component{
  constructor(props){
    super(props);
    // second : 타이머가 동작할 시간
    this.state = {
      name:'강감찬', age:20, second:3000
    }

    // 함수 바인딩하기
    this.changeInfo = this.changeInfo.bind(this);

    // setTimeout(function, miliseconds, ...); setTimeout안에 함수가 들어감, 그 다음은 밀리초(1000)
    // 지정된 시간 miliseconds 경과 후에 function을 동작 시킨다.
    setTimeout(this.changeInfo, this.state.second);   // this.state.second : 3000(3초)
  }

  changeInfo(){
    const newage = 10; // second초 후에 더 할 나이 수
    const {age} = this.state;
    //console.log('age : ' +age);
    this.setState({name:'강호동', age:newage +age});
  }

  render(){
    return(
      <div>
        {this.state.second/1000}초 후에 데이터가 변경이 된다.
        <br/><br/>
        <button onClick={this.changeInfo}>클릭</button>
        <br/>
        <table border="1" align="center">
          <tbody>
            <tr>
              <td>이름</td>
              <td>{this.state.name}</td>
            </tr>
            <tr>
              <td>나이</td>
              <td>{this.state.age}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default StateManager;
