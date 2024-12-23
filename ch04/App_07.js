import React from 'react'
import styled, {css} from 'styled-components'

const RoundedRectangle = styled.div`
  // position:absolute;
  // props.background || 'black'은
  // background가 입력이 되지 않으면, 'black'으로 설정.
  left : 100px;
  top : 30px;
  width : 5rem;
  height : 5rem;        //props,background가 안들어오면 블랙으로 하고, 들어오면 블루!
  background : ${props => props.background || 'black'};
  border-radius:5%;
  ${props => props.huge && css `width: 10rem; height:10rem;`}
`;

function App(){
  return(
    <table>
      <tr>
        <td><RoundedRectangle background="#FF69B4" huge/></td>
        <td><RoundedRectangle huge/></td>
        <td><RoundedRectangle background="#EEEEE0"/></td>
      </tr>
    </table>
  );
}

export default App;
