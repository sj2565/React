import {Component} from 'react'
import {Button} from 'react-bootstrap'

class DjangoWidget extends Component{
  render(){
    return(
      <div align="center">
        <Button variant="outline-primary" onClick={
          function(e){
            e.preventDefault();
            this.props.onChangePage('readdata');
          }.bind(this)
        }>
          목록 보기
        </Button>{' '}

        <Button variant="outline-warning" onClick={
          function(e){
            e.preventDefault();
            this.props.onChangePage('chart');
          }.bind(this)
        }>
          차트
        </Button>{' '}

      </div>
    );
  }
}

export default DjangoWidget;
