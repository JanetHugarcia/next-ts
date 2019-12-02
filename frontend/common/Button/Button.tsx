import React from 'react';
import { Wrapper } from './styled';

interface Props {
    text: string;
}

export const Button: React.FC<Props> = ({text}) => (
    <Wrapper >
      {text}
    </Wrapper>
  )