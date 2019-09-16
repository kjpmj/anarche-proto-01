import styled from 'styled-components';

const InputText = styled.input.attrs({
  type: 'text'
})`
  width:100%;
  color : ${({theme}) => theme.color.main}
`

export default InputText;