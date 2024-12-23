import React, {Component} from 'react'

class Fruit extends Component{
  render(){
    const fruitList = ['사과', '배', '감', '바나나'];
    const fruits = fruitList.map((item) => (
      <li key={item} >{item}&nbsp;</li>
    ));

    return(
      <div align="left">
        <div>과일 품목</div>
        <ol>
          {fruits}
        </ol>
      </div>
    );
  }
}
  export default Fruit;
