import styled from 'styled-components';

export const Form = styled.form`
    max-width: 600px;
    margin: 0 auto;
`;

export const Field = styled.fieldset`
    border: none;
    display: flex;
    margin-bottom: 10px;
`;

export const Label = styled.label`
    margin-bottom: 5px;
    font-family: product-sans;
`;

export const Input = styled.input`
    width: 100%;
    height: 40px;
    padding: 0 15px;
    font-family: open-sans;
    font-size: 24px;\
    &::placeholder {
        font-family: open-sans;
        font-size: 24px;\
    }
`;

export const Row = styled.div`
    display: flex;
`;