import React, { Component } from 'react';
import { Normalize } from 'styled-normalize'
import styled, { ThemeProvider } from 'styled-components';
import themes from 'components/common/theme/theme';
import Skills from 'components/skill/Skills';
import SkillMenuList from 'components/skill/SkillMenuList';
import Items from 'components/skill/Items';

class App extends Component {
  render(){
    return (
      <React.Fragment>
        <Normalize/>
        <ThemeProvider theme={themes}>
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
`

export default App;
