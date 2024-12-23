import styled from 'styled-components';
import Button from './components/Button_01'

const AppBlock = styled.div`
    width : 512px;
    margin : 0 auto;
    margin-top : 4rem;
    border : 1px solid black;
    padding : 1rem;
`;

function App(){
  return(
    <AppBlock>
      <Button background="pink">확인</Button>
      <Button color="green">취소</Button>
    </AppBlock>
  );
}

export default App;
