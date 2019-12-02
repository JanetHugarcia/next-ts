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

export default withApollo(Home);