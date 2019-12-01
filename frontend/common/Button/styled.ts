import styled from 'styled-components';
import { COLORS } from '../../config/ui';

export const Wrapper = styled.button`
    font-family: roboto;
    text-transform: uppercase;
    border: none;
    color: ${COLORS.BLACK_LIGHT};
    font-weight: 600;
    cursor: pointer;
    font-size: 11px;
    margin-top: auto;
    background: rgb(0,0,0,.1);
    padding: 5px;
`;