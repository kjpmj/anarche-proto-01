import styled, { keyframes } from 'styled-components';
import React from 'react';

const Spinner2 = () => {
  return (
    <WrapperDiv>
      <InnerDiv delay="-0.036s" top="50px" left="50px" />
      <InnerDiv delay="-0.072s" top="54px" left="45px" />
      <InnerDiv delay="-0.108s" top="57px" left="39px" />
      <InnerDiv delay="-0.144s" top="58px" left="32px" />
      <InnerDiv delay="-0.18s" top="57px" left="25px" />
      <InnerDiv delay="-0.2166s" top="54px" left="19px" />
      <InnerDiv delay="-0.252s" top="50px" left="14px" />
      <InnerDiv delay="-0.288s" top="45px" left="10px" />
    </WrapperDiv>
  );
};

const ani = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const WrapperDiv = styled.div`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
`;

const InnerDiv = styled.div`
  animation: ${ani} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 32px 32px;
  content: " ";
  display: block;
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${props => props.theme.color.main};
  margin: -1px 0 0 -1px;
  animation-delay: ${props => props.delay}
  &:after {
    top : ${props => props.top}
    left : ${props => props.left}
  }
`;

export default Spinner2;
