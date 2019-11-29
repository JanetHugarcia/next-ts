import { NextPage } from 'next';

const About: NextPage<{ userAgent: string }> = ({ userAgent }) => (
  <>
    <h1>About</h1>
    <p>holi worls</p>
  </>
);

export default About;