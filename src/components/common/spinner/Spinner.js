import styled, { keyframes } from 'styled-components';
import React from 'react';

const Spinner = () => {
  return (
    <WrapperDiv>
      <InnterDiv delay="0s" top="29px" left="53px" />
      <InnterDiv delay="-0.1s" top="18px" left="50px" />
      <InnterDiv delay="-0.2s" top="9px" left="41px" />
      <InnterDiv delay="-0.3s" top="6px" left="29px" />
      <InnterDiv delay="-0.4s" top="9px" left="18px" />
      <InnterDiv delay="-0.5s" top="18px" left="9px" />
      <InnterDiv delay="-0.6s" top="29px" left="6px" />
      <InnterDiv delay="-0.7s" top="41px" left="9px" />
      <InnterDiv delay="-0.8s" top="50px" left="18px" />
      <InnterDiv delay="-0.9s" top="53px" left="29px" />
      <InnterDiv delay="-1s" top="50px" left="41px" />
      <InnterDiv delay="-1.1s" top="41px" left="50px" />
    </WrapperDiv>
  );
};

const ani = keyframes`
  0%, 20%, 80%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
`;

const WrapperDiv = styled.div`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
`;

const InnterDiv = styled.div`
  position: absolute;
  width: 5px;
  height: 5px;
  background: ${props => props.theme.color.main};
  border-radius: 50%;
  animation: ${ani} 1.2s infinite;
  animation-delay: ${props => props.delay};
  top: ${props => props.top};
  left: ${props => props.left};
`;

export default Spinner;
