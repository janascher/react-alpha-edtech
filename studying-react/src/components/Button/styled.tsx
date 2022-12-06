import styled from 'styled-components';

export const SButton = styled.button`
    width: 350px;
    margin: 5px;
    padding: 8px;
    background: #388148;
    border: none;
    border-radius: 2px;
    color: #ffffff;
    font-size: 16px;
    text-transform: uppercase;
    cursor: pointer;

    &:hover,
    &:focus {
        background: #419c55;
    }
`;
