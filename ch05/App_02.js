import styled, {ThemeProvider} from 'styled-components'
import Button from './components/Button_02'

// 테두리 사각형 영역
const AppBlock = styled.div`
  width:512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

// ThemeProvider: "theme" prop is required.
// ThemeProvider는 theme 속성 값이 필수이다.

function App(){
  return(
    <ThemeProvider theme={{palette:{blue:'#228be6', gray:'#495057', pink:'#f06595'}}}>
      <AppBlock>
        <Button>버튼(Button)</Button>
        <Button color="gray"> 버튼(Button)</Button>
        <Button color="pink"> 버튼(Button)</Button>
      </AppBlock>
    </ThemeProvider>
  );
}

export default App;
