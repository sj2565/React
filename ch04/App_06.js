import React from 'react'
import styled from 'styled-components'

const RoundedRectangle = styled.div`
  position:absolute;
  left : 100px;
  top : 30px;
  width : 5rem;
  height : 5rem;
  background : black;
  border-radius:5%;
`;

function App(){
  return(
    <RoundedRectangle />
  );
}

export default App;
