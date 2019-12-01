import { NextPage } from 'next';
import React from 'react';
import { withApollo } from '../frontend/config/apollo';
import { Header } from '../frontend/common/Header';
import { Clientes } from '../frontend/components/Clientes';

const Home: NextPage = () => (
  <>
    <Header />
    <Clientes />
  </>
);

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  return { userAgent };
};

export default withApollo(Home);