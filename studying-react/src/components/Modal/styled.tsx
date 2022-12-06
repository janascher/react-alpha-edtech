import styled from 'styled-components';

export const SModalOverlay = styled.div`
    z-index: 9999;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SModalBox = styled.div`
    display: block;
    background: #E0E0E0; 
    width: 70%;
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: 5px 5px 15px -4px #e0dfdf;
`;

export const SDiv = styled.div`
    display: flex;
    flex-direction: column;

    div {
        display: flex;
        flex-direction: row-reverse;
    }

    button {
        font-size: 16px;
        border: none;
        border-radius: 50%;
        background: #f7c978;
        width: 30px;
        height: 30px;
        cursor: pointer;
        transition: all 150ms;
        font-weight: bold;
    }

    p {
        font-size: 16px;
        text-align: center;
        color: #000000;
        font-weight: 500;
    }
`;
