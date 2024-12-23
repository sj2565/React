import React, {Component} from 'react'
import { ListGroup } from 'react-bootstrap';

// App.css 파일에 추가 코딩 요망
class Navigation extends Component{
   render(){
      // 넘겨진 data라는 배열을 반복문을 사용하여 처리합니다.
      var data = this.props.data; // 배열
      var i = 0; // 카운터 변수
      var lists = [];   //empty array

      while(i < data.length) {
         var item = <ListGroup.Item key={data[i].id}>
                         <a href={"/content/"+data[i].id} onClick={
                                 function(id, e){
                                    e.preventDefault();
                                    this.props.onChangePage(id) ;
                                 }.bind(this, data[i].id)
                               }>
                                 {data[i].name}({data[i].age})
                              </a>
                              {' '}{data[i].desc}
                           </ListGroup.Item>;
         lists.push(item)
      i = i + 1;
    }

      return (
         <nav>
          <ListGroup>
            {lists}
          </ListGroup>
      </nav>
      );
   }
}

export default Navigation;
