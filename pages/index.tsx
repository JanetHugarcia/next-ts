import { NextPage } from 'next';
import styled, { createGlobalStyle } from 'styled-components';

const bg = 'static/images/example-mail.png';
const AristotelicaRegularTtf = 'static/fonts/aristotelica_regular.ttf';


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
  }
  p {
    font-family: open-sans;
  }
  @font-face {
    font-family: open-sans;
    src:
        url(${AristotelicaRegularTtf}) format("truetype");
    font-style:normal;
    font-weight:400
  }
`;

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => (
  <>
    <Title>Hello world! - user agent: {userAgent}</Title>
    <GlobalStyle />
    <img src={bg} alt="mail"/>
    <p>holi worls</p>
  </>
);

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  return { userAgent };
};

export default Home;