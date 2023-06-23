import styled from "styled-components";

export const BfInput = styled.div`
    width:100%;
    display:flex;
    flex-direction: column;
    margin-bottom: 40px;
    label {
        color: white;
        font-size:1.8rem;
        margin-bottom: 20px;
    }
    input {
        padding: 0 1%;
        outline: none;
        height: 50px;
        font-size:2rem;
        border: none;
        border-radius: 6px;
    }
    textarea {
        height: 120px;
        width: 100%;
        padding: 0 1%;
        outline: none;
        font-size:2rem;
        border: none;
        border-radius: 6px;
    }
`;
export const BfInputFile = styled.div`
    width:100%;
    display:flex;
    flex-direction: column;
    margin-bottom: 40px;
    background: rgba(255,255,255,0.2);
    border-radius: 6px;
    padding: 2% 2% 2%;
    justify-content: center;
    input[type=file] {
        outline: none;
        font-size:2.2rem;
        margin-bottom: 10px;
        border: none;
    }
    label {
        font-size: 2.8rem;
        color: white;
        margin-bottom: 10px;
    }
    .loader {
        width: 100%;
        height: 10px;
        background-color: greenyellow;
    }
`;