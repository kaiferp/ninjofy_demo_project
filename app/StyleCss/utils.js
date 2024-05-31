"use client";

import styled from "styled-components";

const AppLogo = styled.div`
    font-size: 40px;
    font-weight: 800
`;

const HeaderNew = styled.div`
    background-color: yellow;
    height: 60px;
`;

export const Button = styled.button`
    height: 42px;
    padding: 10px 20px;
    font-size: ${(props) => `${(props.fontSize)}px` ?? "18px"};
    font-weight: 600;
    display: flex;
    align-items:center;
    gap: 10px;
    border-radius: 8px;
    background-color: ${(props) => props.color ?? "#EDEDED"};
    color: ${(props) => props.textColor ?? "#000000"};
`;

export default Button;