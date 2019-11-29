import { NextPage } from 'next';
import bg from './../static/example-mail.png';
import styled from 'styled-components';

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => (
  <>
    <Title>Hello world! - user agent: {userAgent}</Title>
    <img src={bg} alt="mail"/>
  </>
);

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  return { userAgent };
};

export default Home;