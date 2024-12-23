import React, {Component} from 'react'
import {Button, InputGroup, FormControl} from 'react-bootstrap'

class UpdateContent extends Component{
  constructor(props){
    super(props);
    this.state = {
      id:this.props.data.id,
      name:this.props.data.name,
      age:this.props.data.age,
      desc:this.props.data.desc
    };

    this.inputFormHandler = this.inputFormHandler.bind(this);
  }

  inputFormHandler(e){
    // 수정 중인 항목에 대한 name 속성과 value 값을 출력해 본다.
    // 해당 속성에 대한 값을 변경한다.
    console.log('e.target.name : ' +e.target.name);
    console.log('e.target.value : ' +e.target.value);

    // 해당 항목이 수정된 값으로 변경된다.
    this.setState({[e.target.name]:e.target.value});

  }

  render(){
    return(
      <article className="updateForm">
        <h2>수정하기</h2>
        <form action="#" method="post" onSubmit={
          function(e){
            e.preventDefault();
            this.props.onUpdateData(
              this.state.id,
              this.state.name,
              this.state.age,
              this.state.desc
            );
          }.bind(this)
        }>
          <input type="hidden" name="id" value={this.state.id} />
          <InputGroup className="mb-3">
              <InputGroup.Text id = "basic-addon1">아이디</InputGroup.Text>
              <FormControl placeholder="아이디 입력" type="text" name="id"
                aria-label="id" aria-describedby="basic-addon1"
                value={this.state.id} disabled="disabled"/>
                // id는 편집을 못하므로 onChange를 빼고 disabled추가(읽기 전용)
          </InputGroup>

          <InputGroup className="mb-3">
              <InputGroup.Text id = "basic-addon1">이름</InputGroup.Text>
              <FormControl placeholder="이름 입력" type="text" name="name"
                aria-label="name" aria-describedby="basic-addon1"
                value={this.state.name} onChange={this.inputFormHandler}/>
          </InputGroup>

          <InputGroup className="mb-3">
              <InputGroup.Text id = "basic-addon1">나이</InputGroup.Text>
              <FormControl placeholder="나이 입력" type="text" name="age"
                aria-label="age" aria-describedby="basic-addon1"
                value={this.state.age} onChange={this.inputFormHandler}/>
          </InputGroup>

          <InputGroup className="mb-3">
              <InputGroup.Text id = "basic-addon1">상세 설명</InputGroup.Text>
              <FormControl placeholder="상세 설명 입력" type="text" name="desc"
                aria-label="desc" aria-describedby="basic-addon1"
                value={this.state.desc} onChange={this.inputFormHandler}/>
          </InputGroup>

          <Button type="submit" value="수정">수정</Button>{' '}
        </form>
      </article>

    );
  }
}

export default UpdateContent;
