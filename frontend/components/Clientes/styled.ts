import styled from 'styled-components';
import { FONTS, COLORS } from '../../config/ui';

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px 50px;
`;

export const Title = styled.h1`
    text-align: center;
    font-family: ${FONTS.PRODUCT_SANS};
    font-weight: 400;
    color: rgba(0,0,0,0.87);
`;

export const List = styled.ul`
    list-style: none;
    max-width: 600px;
    margin: 20px auto 0;
`;

export const Item = styled.li`
    display: flex;
    height: 50px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${COLORS.GRAY_LIGHT};
    font-family: ${FONTS.OPEN_SANS};
    padding: 10px 15px;
`;

export const Name = styled.p`
    font-family: ${FONTS.PRODUCT_SANS};
    color: rgba(0,0,0,0.87);
    font-size: 19px;
`;
