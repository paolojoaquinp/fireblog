import styled from "styled-components";

export const BfHeader = styled.header`
    width: 100;
    height: 70px;
    background-color: white;
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    align-items:center;
    font-size:1.4rem;
    overflow-y:scroll;
    > ul {
        display: flex;
        list-style:none;
        gap:0 65px;
    }
    .header__actions {
        display:flex;
        align-items:center;
    }
    .header__profile-pic {
        width:70px;
        height:70px;
        >img {
            object-fit:cover;
            width:100%;
            height:100%;
        }
    }
    .login__actions {
        display: flex;
        flex-direction: column;
        margin-right:20px;
        font-weight: 600;
        text-decoration: underline;
    }
    
`;

export const Title = styled.h1`
    font-size: 2.4rem;
`;