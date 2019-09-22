import React, { Component } from 'react';
import { Normalize } from 'styled-normalize'
import styled, { ThemeProvider } from 'styled-components';
import themes from 'components/common/theme/theme';
import Skills from 'components/skill/Skills';
import SkillMenuList from 'components/skill/SkillMenuList';
import Items from 'components/skill/Items';
import GlobalStyle from 'style/GlobalStyle';
import 'style/font.css';


class App extends Component {
  render(){
    return (
      <React.Fragment>
        <Normalize/>
        <GlobalStyle/>
        <ThemeProvider theme={themes.default_theme}>
          <Contrainer>
            <Skills/>
            <SkillMenuList/>
            <Items/>
          </Contrainer>
        </ThemeProvider>
      </React.Fragment>
    )
  }
}

const Contrainer = styled.div`
  margin : 1% 10% 1% 10%;
  background-color : ${props => {
    return props.theme.color.backGround;
  }}
`

export default App;
