import styled, { keyframes, css } from 'styled-components';
import _ from 'underscore';

// const height = 60;
// const width = height * 1.618;

// const ButtonSizeMixin = css`
//   width : ${width}px;
//   height : ${height}px;
// `

const Button = styled.button`
  background-color : ${props=>{
    if(props.disabled){
      return props.theme.color.bgDisabled;
    }else if(props.bgColor){
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
    if(props.disabled){
      return props.theme.color.textDisabled;
    }else if(props.textColor){
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
  padding : 0.5rem 0.7rem 0.5rem 0.7rem;
  min-width : 80px;
  background-position: center;
  &:hover {
    cursor : ${props=>{
      if(props.disabled){
        return 'normal';
      }else{
        return 'pointer';
      }
    }}
    // text-shadow: 0px 0px 6px rgba(255, 255, 255, 1);
  }
  &:active {
    box-shadow: inset 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`


export default Button;