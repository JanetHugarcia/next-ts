import React from 'react';
import App from 'next/app';
import { GlobalStyle } from '../frontend/config/style';

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