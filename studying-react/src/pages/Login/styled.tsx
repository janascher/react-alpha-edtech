import styled from 'styled-components';

export const SForm = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const SInput = styled.input`
    font-size: 16px;
    padding: 10px;
    margin: 5px;
    border: none;
    border-radius: 3px;
    width: 330px;
    &:focus {
        outline: none;
        box-shadow: 0px 0px 2px #353535;
    }
`;
