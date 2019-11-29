import { NextPage } from 'next';
import bg from './../static/example-mail.png';

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => (
  <>
    <h1>Hello world! - user agent: {userAgent}</h1>
    <img src={bg} alt="mail"/>
  </>
);

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  return { userAgent };
};

export default Home;