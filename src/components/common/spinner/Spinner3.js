import styled, { keyframes } from 'styled-components';
import React from 'react';

const Spinner3 = () => {
  return (
    <WrapperDiv>
      <InnerDiv delay="-0.45s" />
      <InnerDiv delay="-0.3s" />
      <InnerDiv delay="-0.15s" />
      <InnerDiv delay="-0s" />
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
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 51px;
  height: 51px;
  margin: 6px;
  border: 6px solid ${props => props.theme.color.main};
  border-radius: 50%;
  animation: ${ani} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: ${props => props.theme.color.main} transparent transparent
    transparent;
  animation-delay: ${props => props.delay};
`;

export default Spinner3;
