import React from 'react';
import styled from 'styled-components';
import SvgEdu from './../../../static/icono_educacion.svg';
import { COLORS } from './../../../frontend/config/ui';

const Wrapper = styled.span`
  display: inline-block;
  svg {
      width: 15px;
      height: 15px;
  }
  path {
    fill: ${COLORS.BLACK_LIGHT};
  }
`;

export const IconWrapper: React.FC = () => (
    <Wrapper>
        <SvgEdu />
    </Wrapper>
)