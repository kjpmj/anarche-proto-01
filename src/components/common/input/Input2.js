import styled, { keyframes } from 'styled-components';
import React, { useState, useEffect } from 'react';

const Input2 = ({ value, placeholder, onChange }) => {
  const [currentValue, setCurrentValue] = useState('');

  useEffect(() => {
    onChange(currentValue);
  }, [currentValue]);

  const handleInputChange = e => {
    setCurrentValue(e.target.value);
  };

  return (
    <WrapperLabel>
      <InnerInput value={currentValue} onChange={handleInputChange} />
      <InnerLabelSpan>{placeholder}</InnerLabelSpan>
      <InnerBorderSpan></InnerBorderSpan>
    </WrapperLabel>
  );
};

const WrapperLabel = styled.label`
  position: relative;
  margin: auto;
  width: 100%;
  max-width: 280px;
`;

const InnerLabelSpan = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  color: ${props => props.theme.color.textLabel};
  transform-origin: 0 0;
  transition: all 0.2s ease;
`;

const InnerBorderSpan = styled.span`
  position: absolute;
  top: 26px;
  left: 0;
  height: 2px;
  width: 100%;
  background: ${props => props.theme.color.main};
  transform: scaleX(0);
  transform-origin: 0 0;
  transition: all 0.2s ease;
`;
const InnerInput = styled.input.attrs({
  type: 'text',
  placeholder: ' ',
})`
  -webkit-appearance: none;
  width: 100%;
  border: 0;
  padding: 8px 0;
  border-bottom: 2px solid ${props => props.theme.color.textLabel};
  background: none;
  border-radius: 0;
  color: ${props => props.theme.color.textInput};
  &:hover {
    background: rgba(34, 50, 84, 0.03);
  }
  &:focus {
    background: none;
    outline: none;
  }
  &:not(:placeholder-shown) + span {
    color: ${props => props.theme.color.textLabel};
    transform: translateY(-20px) scale(0.8);
  }
  &:not(:-ms-input-placeholder) + span {
    color: ${props => props.theme.color.textLabel};
    transform: translateY(-20px) scale(0.8);
  }
  &:focus + span {
    color: ${props => props.theme.color.main};
    transform: translateY(-20px) scale(0.8);
  }
  &:focus + span + span {
    transform: scaleX(1);
  }
`;

export default Input2;
