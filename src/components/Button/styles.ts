import styled from "styled-components";

export const Container = styled.div`
    width: 200px;
    height: 50px;
    display: flex;
    cursor: pointer;
    background-color: #1550FF;
    border-radius: 10px;
    opacity: 1;
    opacity: all ease .3s;

    &:hover {
        opacity: .8;
    }
`;

export const IconArea = styled.div`
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid rgba(255, 255, 255, .2);
    padding: 0 15px;
`;

export const Icon = styled.img`
    height: 20px;
`;

export const Label = styled.div`
    height: inherit;
    color: #fff;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
`;

