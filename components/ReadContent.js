import {Component} from 'react'
import {Table} from 'react-bootstrap'

// App.css 파일에 추가 코딩 요망
class ReadContent extends Component{
  render(){
    return(
      <div className="mytable">
        <Table bordered hover size ="sm">
          <tbody>
            <tr>
              <td>이름</td>
              <td className="tbcontent">{this.props.currcontent.name}</td>
            </tr>
            <tr>
              <td>나이</td>
              <td className="tbcontent">{this.props.currcontent.age}</td>
            </tr>
            <tr>
              <td>설명</td>
              <td className="tbcontent">{this.props.currcontent.desc}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default ReadContent;
