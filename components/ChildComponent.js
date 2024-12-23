import React, {Component} from 'react'
import PropTypes from 'prop-types'

class ChildComponent extends Component{
  render(){               // 1. const 변수 넣어주고 this.props
    const {isCheck, salary, members, address, array, node, func} = this.props;
    const message = this.props.isCheck ? '놀러감' : '일 마무리 해';

    return(           // 3. 출력
      <div>
        <div>진위형 : {String(isCheck)}</div>
        <div>결과 메세지 : {message}</div>
        <div>급여 : {salary}</div>
        <div>객체 : {String(Object.entries(members))}</div>
        <div>주소 : {address}</div>
        <div>배열 : {array}</div>
        <div>노드(태그) : {node}</div>
        <div>함수 : {String(func)}</div>

      </div>
    );
  }
}

ChildComponent.defaultProps = {
  salary : 1234
}
        // 2. PropTypes 설정
ChildComponent.propTypes = {
  isCheck : PropTypes.bool,  // 참 거짓 진위 여부
  members : PropTypes.shape({
    name: PropTypes.string,
    age : PropTypes.number
  }),
  address : PropTypes.string.isRequired,
  array : PropTypes.arrayOf(PropTypes.number),  // arrayOf : 배열 형식에 맞게 출력
  node : PropTypes.node,
  func : PropTypes.func
}

export default ChildComponent;
