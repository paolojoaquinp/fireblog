import styled from "styled-components";

export const BfCard = styled.div`
    height: 450px;
    width: 100%;
    background-color: rgba(255,255,255,0.1);
    overflow:hidden;
    margin-bottom:50px;
    border-bottom: 1px white solid;
    border-radius: 20px 20px 0 0;
    .card__image {
        height: 260px;
        > img {
            border-radius: 20px 20px 0 0;
            object-fit: cover;
            width:100%;
            height: 100%;
        }
    }
    .card__info {
        width: 100%;
        height: 190px;
        padding: 0 2%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        p > span,p{
            color: white;
            font-size: 1.4rem;
        }
        p > span {
            font-size: 1.8rem;
            font-weight: 700;
        }
        .info__tags{
            padding: 0 0 10px;
            .tag {
                padding: 4px 12px;
                border-radius: 14px;
                display: inline-block;
                color: black;
                font-weight: 600;
                font-size: 1.8rem;
                background-color: yellow;
            }
        }
        .info__title {
            height:auto;
            font-size: 2.8rem;
            font-weight: 600;
            color: white;
        }
        .info__desc {
            color: white;
            font-weight: 300;
            line-height: 2.2rem;
            width:100%;
            font-size:1.6rem;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 5;
            overflow: hidden;
            text-align:justify;
        }
    }
`;