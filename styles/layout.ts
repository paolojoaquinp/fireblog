import styled from "styled-components";
import Link from 'next/link';

export const BfMain = styled.main`
    width: 100%;
    height: auto;
    padding: 0 20%;
    > .Title {
        color: white;
        font-size: 4rem;
        font-weight: bold;
        margin: 35px 0;
    }
    .actions__container {
        width: 50%;
        margin: 0 auto;
        display:flex;
        flex-direction: column;
        gap: 10px;
    }
`;

export const ForgotPasswordContainer = styled.div`
    color: white;
    font-size: 2.4rem;
    margin-bottom: 24px;
`;

export const LinkCustom = styled(Link)`
    text-decoration: none;
    color:black;
    
    &:hover,
    &:focus{
        color: blue;
    }
    
    &:active{
        color: red;
    }
`;
export const LinkCustomLight = styled(Link)`
    
    color:white;
    
    &:hover,
    &:focus{
        color: greenyellow;
    }
    
    &:active{
        color: red;
    }
`;