import React from 'react';
import styled from 'styled-components';
import SvgEdu from './../../../static/icono_educacion.svg';

const Wrapper = styled.span`
  display: inline-block;
  svg {
      width: 15px;
      height: 15px;
  }
  path {
    fill: #fff;
  }
`;

export const IconWrapper: React.FC = () => (
    <Wrapper>
        <SvgEdu />
    </Wrapper>
)