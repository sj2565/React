import React, {Component} from 'react'
import {Button, InputGroup, FormControl} from 'react-bootstrap'

class CreateContent extends Component{
  render(){
    return(
      <article className="createForm">
        <h2>등록하기</h2>
        <form action="#" method="post" onSubmit={
          function(e){
            e.preventDefault();
            console.log('name : ' +e.target.name.value);   // target속성
            this.props.onSubmit(
              e.target.name.value,
              e.target.age.value,
              e.target.desc.value
            );
          }.bind(this)
        }>
          <InputGroup className="mb-3">
              <InputGroup.Text id = "basic-addon1">이름</InputGroup.Text>
              <FormControl placeholder="이름을 입력하세요" type="text" name="name"
                aria-label="UserName" aria-describedby="basic-addon1"/>
          </InputGroup>
          <InputGroup className="mb-3">
              <InputGroup.Text id = "basic-addon1">나이</InputGroup.Text>
              <FormControl placeholder="나이를 입력하세요" type="text" name="age"
                aria-label="UserAge" aria-describedby="basic-addon1"/>
          </InputGroup>
          <InputGroup className="mb-3">
              <InputGroup.Text id = "basic-addon1">상세 설명</InputGroup.Text>
              <FormControl placeholder="상세 설명 입력하세요" type="text" name="desc"
                aria-label="UserDesc" aria-describedby="basic-addon1"/>
          </InputGroup>
          <Button type="submit" value="등록">등록</Button>{' '}
        </form>
      </article>
    );
  }
};

export default CreateContent;
