import React from 'react';
import styled, {css} from 'styled-components';

/* polished의 스타일 관련 유틸 함수 사용하기 */
import {darken, lighten} from 'polished' ;

const StyledButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-top: 0.3rem;
  padding-left: 1rem;
  padding-right: 1rem;

  /* 크기 */
  height: 2.25rem;
  font-size: 1rem;

  /* 색상 */
  ${props => {
    const selected = props.theme.palette[props.color];
    return css`
      background: ${selected};
      &:hover {        /*버튼에 마우스를 올렸을 시 얼마나 밝게, 어둡게 할 건지 설정. 수치는 0 ~ 1 */
        background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
    `;
  }}

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }
`;

function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}

/* 버튼의 기본 색상을 파란색으로 지정하였습니다. */
Button.defaultProps = {
  color: 'blue'
};

export default Button;
