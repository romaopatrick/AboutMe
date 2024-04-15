import { Avatar, Flex } from "antd";
import Title from "antd/es/typography/Title";
import './index.scss'
import Paragraph from "antd/es/typography/Paragraph";
import Me from "/assets/me.jpg";

import { Presentation } from "./presentation";
export function Career() {
    return (
        <Flex className="page career-container" vertical align="center">
            <div className="title-container">
                <Avatar
                    size={200}
                    src={Me} />
                <Flex vertical className="title-description-container">
                    <Title style={{ margin: 0 }}>
                        Patrick Romão Hernandez
                    </Title>
                    <Title style={{ marginTop: '15px' }} level={2} color="">
                        <i>Full Stack Software Engineer</i>
                    </Title>
                    <Paragraph className="paragraph"><i>Brazil</i></Paragraph>
                </Flex>
            </div>
            <br />
            <br />
            <Presentation />
        </Flex >
    )
}