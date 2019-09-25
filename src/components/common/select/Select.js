import styled, { keyframes } from 'styled-components';
import media from 'styled-media-query';
import React, { useState, useEffect } from 'react';

const Select = ({ params, onChange }) => {
  const data = params.defVal ? params.defVal.concat(params.data) : params.data;

  const [isOpen, setisOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState(data[0]);

  useEffect(() => {
    onChange(currentValue.code);
  }, [currentValue]);

  const handleCurrentClick = e => {
    setisOpen(!isOpen);
  };

  const handleValueClick = e => {
    const newValue = data.find(item => {
      return item.code === e.target.dataset.code;
    });
    setCurrentValue(newValue);
    setisOpen(!isOpen);
  };

  const handleChange = () => {};

  const selectValueList = data.map((item, index) => {
    return (
      <ValueBox
        key={item.code}
        onClick={handleValueClick}
        data-code={item.code}
      >
        {item.name}
      </ValueBox>
    );
  });

  return (
    <SelectBox>
      <CurrentBox onClick={handleCurrentClick}>{currentValue.name}</CurrentBox>
      <ValueList isOpen={isOpen}>{selectValueList}</ValueList>
    </SelectBox>
  );
};

const Open = keyframes`
  from {
    transform-origin: 0 0;
    transform: scaleY(0);
  }

  to {
    transform-origin: 0 0;
    transform: scaleY(1);
  }
`;

const Close = keyframes`
  from {
    transform-origin: 0 0;
    transform: scaleY(1);
  }

  to {
    transform-origin: 0 0;
    transform: scaleY(0);
  }
`;

const CurrentBox = styled.div``;

const ValueList = styled.div`
  visibility: ${props => (props.isOpen ? 'visibility' : 'hidden')};
  animation: ${props => (props.isOpen ? Open : Close)} 0.1s linear;
  transition: visibility 0.1s linear;
  z-index: 1000;
`;

const ValueBox = styled.div``;

const SelectBox = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height : 20px;
  margin: 0 auto;
  color: #60666d;

  // ${media.lessThan('medium')`
  //   width: 70%;
  // `}

  // ${media.between('medium', 'large')`
  //   width: 50%;
  // `}

  // ${media.greaterThan('large')`
  //   width: 30%;
  // `}
`;

export default Select;
