import { Flex } from "antd";

import img from "@/assets/img";

import { FlexBackGround, FlexContent } from "./Home.styled";

const Home = () => {
    return (
        <FlexContent>
            <FlexBackGround>
                <img src={img.bird} alt="" className="flappy__bird" />
            </FlexBackGround>

            <p className="flappy__name">Flappy Bird</p>

            <Flex className="flappy__glitch-wrapper">
                <p className="flappy__glitch">Start Game</p>
            </Flex>
        </FlexContent>
    );
};

export default Home;
