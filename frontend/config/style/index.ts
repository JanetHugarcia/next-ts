import { fonts } from './fonts';
import { global } from './global';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    ${fonts}
    ${global}
`;