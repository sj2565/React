import React, {Component} from 'react'

class Heading extends Component{
  render(){
    return(     // return안에 html형식의 문서를 작성하고 꼭 <div>태그로 안 묶어도 됨, 열고 닫기만 잘하면 됨
      <header>
        <h1>{this.props.greeting}</h1>
        {this.props.hello}
      </header>
    );
  }
}

class App extends Component{
  render(){
    return(       // 위의 Heading 클래스를 가져온다
      <div className="App">
        <Heading greeting="인사 말씀" hello="안녕ㅎ"> </Heading>
        <Navigation subject01="java" subject02="python" subject03="react"></Navigation>
        <Closing closing="맺음말" comment="안녕히 가세요"></Closing>
      </div>
    );
  }
}

class Navigation extends Component{
  render(){
    return(
      <nav>
        <ul>
          <li><a href="1.html">{this.props.subject01}</a></li>
          <li><a href="2.html">{this.props.subject02}</a></li>
          <li><a href="3.html">{this.props.subject03}</a></li>
        </ul>
      </nav>
    );
  }
}

class Closing extends Component{
  render(){
    return(
      <article>
        <h2>{this.props.closing}</h2>
        {this.props.comment}
      </article>
    );
  }
}

export default App;
