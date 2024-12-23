import React, {Component} from 'react'

class MemberList extends Component{
  render(){
    const members = [
      {id : 'yun', name:'융재', age:3, address:'이쁘니동'},
      {id : 'geul', name:'정구리', age:1, address:'기요미동'}
    ];
    const result = members.map(saram =>
      <tr key={saram.id}>
        <td>{saram.name}</td>
        <td>{String(saram.age)}</td>
        <td>{saram.address}</td>
      </tr>
    );

    return(
      <div align="center">
        <table border = "1">
        <tbody>
            <tr>
              <th>이름</th>
              <th>나이</th>
              <th>주소</th>
            </tr>
            {result}
          </tbody>
        </table>
      </div>
    );
  }
}

  export default MemberList;
