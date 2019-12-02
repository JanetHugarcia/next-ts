import styled from 'styled-components';
import { SIZE, FONTS } from '../../config/ui';

export const Container = styled.div`
    max-width: ${SIZE.LARGE_DESKTOP};
    margin: 0 auto;
    padding: 20px 50px;
`;

export const Title = styled.h1`
    text-align: center;
    font-family: ${FONTS.PRODUCT_SANS};
    font-weight: 400;
    color: rgba(0,0,0,0.87);
`;
