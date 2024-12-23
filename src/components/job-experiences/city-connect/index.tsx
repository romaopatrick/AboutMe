import { Flex } from 'antd'
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import "../index.scss"

export default function CityConnectXP() {
    return (
        <Flex vertical className="endark">
            <Title level={3}>CityConnect</Title>
            <Paragraph className="paragraph">2018 - 2020</Paragraph>
            <br />

            <Paragraph className="paragraph">
                My first developer job introduced me to various technologies, including:
                .NET, Node.js, Flutter, React, Angular, React Native, Razor Pages, ASPX, and Ajax.
            </Paragraph>
            <br />
            <Paragraph className="paragraph">
                In this role, I was responsible for maintaining a legacy city hall fines
                system while also working on the development of new mobile technologies.
            </Paragraph>
        </Flex>
    )
}
