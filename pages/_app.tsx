import React from 'react';
import App from 'next/app';
import { createGlobalStyle } from 'styled-components';
const AristotelicaRegularTtf = 'static/fonts/aristotelica_regular.ttf';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  @font-face {
    font-family: open-sans;
    src:
        url(${AristotelicaRegularTtf}) format("truetype");
    font-style:normal;
    font-weight:400
  }
  p {
    font-family: open-sans;
  }
`;

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    );
  }
}