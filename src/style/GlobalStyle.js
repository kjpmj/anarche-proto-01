import { createGlobalStyle } from 'styled-components';
import fonts from 'style/fonts';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'NanumSquareRoundR';
    src: local('NanumSquareRoundR'),
         url(${fonts.NanumSquareRoundR_woff2}) format('woff2'),
         url(${fonts.NanumSquareRoundR_woff}) format('woff'),
         url(${fonts.NanumSquareRoundR_ttf}) format('truetype');
  }

  @font-face {
    font-family: 'NanumSquareRoundL';
    src: local('NanumSquareRoundL'),
         url(${fonts.NanumSquareRoundL_woff2}) format('woff2'),
         url(${fonts.NanumSquareRoundL_woff}) format('woff'),
         url(${fonts.NanumSquareRoundL_ttf}) format('truetype');
  }

  body {
    font-family: 'NanumSquareRoundR','NanumSquareRoundL';
    font-size: 16px;
  }
`

export default GlobalStyle;