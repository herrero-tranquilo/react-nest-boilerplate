import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import colors from './colors';
import fonts from './fonts';

export default createGlobalStyle`
    ${reset};
    * {
        box-sizing:border-box;
      }
    body {
      min-width:320px;
      background-color:${colors.white};
      ${fonts.default}
      }
    a {
        text-decoration:none;
        user-select: none;
        outline: none;
        color:white;
        cursor: pointer;
        -webkit-font-smoothing: antialiased;
        -webkit-touch-callout: none;
      }
      input:focus {
        outline:none;
      }
`;
