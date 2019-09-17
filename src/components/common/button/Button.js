import styled from 'styled-components';
import _ from 'underscore';

const Button = styled.button`
  ${props=>{
    if(props.bgColor){
      if(_.contains(_.keys(props.theme.color), props.bgColor)){
        return `background-color : ${props.theme.color[props.bgColor]}`
      }else{
        return `background-color : ${_.isString(props.bgColor) ? props.bgColor : props.theme.default().bgColor }`
      }
    }else{
      return `background-color : ${props.theme.default().bgColor}`
    }
  }}
  ${props=>{
    if(props.textColor){
      if(_.contains(_.keys(props.theme.color), props.textColor)){
        return `color : ${props.theme.color[props.textColor]}`
      }else{
        return `color : ${_.isString(props.textColor) ? props.textColor : props.theme.default().textColor }`
      }
    }else{
      return `color : ${props.theme.default().textColor}`
    }
  }}
`

export default Button;