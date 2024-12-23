import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  /* padding-top : 1rem; */
  padding-right: 1rem;

  /* 크기 */
  height: 2.25rem;
  font-size: 1rem;

  /* 색상 */      /* prop.background에 색을 넣어줬으면 넣어준 색 , 안 넣어줬으면 #228be6색  */
  background: ${props => props.background || '#228be6'};

  /* hover는 mousein + mouseout */
  &:hover {
    background: green;
  }

  /* active는 마우스 클릭되었을 때 */
  &:active {
    background: red;
  }

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }
`;

function Button({ children, ...prop_list}) {
  // children은 넘어 오는 문자열이다.
  // 예시에서는 "확인"이 넘어 온다.
  console.log(children);

  // prop_list는 prop 목록을 의미한다.
  console.log(JSON.stringify(prop_list));
  return(
   <StyledButton {...prop_list}>{children}</StyledButton>
 );
}

export default Button;
