import { Flex } from "antd";
import styled from "styled-components";

import img from "@/assets/img";

export const FlexContent = styled(Flex)`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;

    .flappy__name {
        position: fixed;
        bottom: 30vh;
        font-size: 5rem;
    }

    .flappy__glitch-wrapper {
        position: fixed;
        bottom: 20vh;
    }

    .flappy__glitch {
        font-size: 3rem;
        animation: glitch 2s infinite;
        cursor: pointer;
    }

    @keyframes glitch {
        0% {
            transform: skew(5deg);
        }

        50% {
            transform: skew(-5deg);
        }

        100% {
            transform: skew(5deg);
        }
    }
`;

export const FlexBackGround = styled(Flex)`
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    background: url(${img.bgGame}) no-repeat center center fixed;

    .flappy__bird {
        position: fixed;
        height: 50px;
        width: 60px;
        top: 40vh;
        left: 45vw;
        z-index: 100;
    }
`;
