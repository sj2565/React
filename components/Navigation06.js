import React, {Component} from 'react'
class Navigation extends Component{
  render(){
      var lists = [];   // 비어있는 배열
      var data = this.props.data;  // App에 있는 contents데이터가 들어온다
      var i = 0;
      while(i < data.length){   // 데이터에 접근할땐 대괄호 i
        var litag = <li key={data[i].id}><a href={"/content/"+data[i].id}>{data[i].tilte}({data[i].desc})</a></li>;
        lists.push(litag);
        i = i + 1;
      }

      return(
        <nav>
          <ul>
            {lists}
          </ul>
        </nav>
    );
  }
}
export default Navigation ;
