import styled, { keyframes, css } from 'styled-components';
import _ from 'underscore';

const Button = styled.button`
  background-color : ${props=>{
    if(props.bgColor){
      if(_.contains(_.keys(props.theme.color), props.bgColor)){
        return props.theme.color[props.bgColor]
      }else{
        return _.isString(props.bgColor) ? props.bgColor : props.theme.default().bgColor
      }
    }else{
      return props.theme.default().bgColor
    }
  }}
  color : ${props=>{
    if(props.textColor){
      if(_.contains(_.keys(props.theme.color), props.textColor)){
        return props.theme.color[props.textColor]
      }else{
        return _.isString(props.textColor) ? props.textColor : props.theme.default().textColor
      }
    }else{
      return props.theme.default().textColor
    }
  }}

  border : none;
  border-radius: 2px;
  padding : 0.2rem 0.2rem;

  background-position: center;
  &:hover {
    cursor : pointer;
  }
  &:active {
    background-color: #6eb9f7;
    background-size: 100%;
    transition: all 2s;
  }
`



export default Button;