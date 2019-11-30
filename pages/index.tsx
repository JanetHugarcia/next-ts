import { NextPage } from 'next';
import styled from 'styled-components';
import React from 'react';
import { withApollo } from '../frontend/config/apollo';
import SvgEdu from './../static/icono_educacion.svg';
import { Header } from '../frontend/common/Header';

const bg = 'static/images/example-mail.png';
const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

const EducationSvg = () => <SvgEdu />;

const IconWarpper = styled.div`
  path {
    fill: red;
  }
`;

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => (
  <>
    <Header />
    <Title>Hello world! - user agent: {userAgent}</Title>
    <img src={bg} alt="mail"/>
    <p>holi worls</p>
    <IconWarpper>
      <EducationSvg />
    </IconWarpper>
  </>
);

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  return { userAgent };
};

export default withApollo(Home);