import React, {Component} from 'react'
import Heading from './components/Heading06'
import Navigation from './components/Navigation06'
import Closing from './components/Closing06'

class App extends Component{
  constructor(props){
    super(props);
    // hehehe hohoho
    this.state = {
      mode:"hehehe",
      heading:{
        greeting:'good morning', // good morning을 전달하기 위해선 this.state.heading.greeting
        hello:'hello everyone'
      },
      contents:[
        {id:1, title:'김유신', desc:'신라의 장군'},
        {id:2, title:'이순신', desc:'무찌르자~~일본군'},
        {id:3, title:'윤봉길', desc:'도시락 폭탄'}
      ],
      closing:{closing: '맺음말', comment:'ㅇ'}
    }
  }

  render(){
    var _closing, _comment;   // 임시 변수
    if(this.state.mode === 'hehehe'){
      _closing = this.state.closing.closing
      _comment = this.state.closing.comment;
    }else if(this.state.mode === 'hohoho'){
      _closing = this.state.closing[0].title;
      _comment = this.state.closing[0].desc;
    }

    return(       // 위의 greeting과 꼭 이름 같을 필요 없음
      <div className="App">
        <Heading
          greeting={this.state.heading.greeting}
          hello = {this.state.heading.hello} />
        <Navigation data={this.state.contents}></Navigation>
        <Closing closing = {_closing} comment={_comment} />
      </div>
    );
  }
}

export default App;
