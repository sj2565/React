import React, {Component} from 'react';
import {Button, Dropdown} from 'react-bootstrap';

  class Control extends Component{
    render(){
      return(
        <div align="center">
          <Button variant="outline-primary" onClick={ // create모드 수정
            function(e){
              e.preventDefault();
              this.props.onChangePage('create');
            }.bind(this)
          }>
            생성
          </Button>{' '}

          <Button variant="outline-warning" onClick={ // update모드 수정
            function(e){
              e.preventDefault();
              this.props.onChangePage('update');
            }.bind(this)
          }>
            수정
          </Button>{' '}

          <Button variant="outline-danger" onClick={ // delete모드 수정
            function(e){
              e.preventDefault();
              this.props.onChangePage('delete');
            }.bind(this)
          }>
            지우기
          </Button>{' '}

          <br/><br/>
          <Dropdown>
            <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
              Change Mode
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1" onClick={
                function(e){
                  e.preventDefault(); //이벤트 전파방지
                  this.props.onChangePage('read');
                }.bind(this)
              }>읽기
              </Dropdown.Item>

              <Dropdown.Item href="#/action-2" onClick={
                function(e){
                  e.preventDefault(); //이벤트 전파방지
                  this.props.onChangePage('welcome');
                }.bind(this)
              }>웰컴
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      );
    }

  }

  export default Control;
