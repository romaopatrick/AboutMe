import { Avatar, Flex } from "antd";
import Title from "antd/es/typography/Title";
const imgpath = 'https://media.licdn.com/dms/image/D4D03AQGpmZMI4iYPSg/profile-displayphoto-shrink_800_800/0/1712949525345?e=1718236800&v=beta&t=gneyXGi8dG5jQADGtVWBJRav8kNW-1Ps0ujxyibuIvs'
import './index.scss'
import Paragraph from "antd/es/typography/Paragraph";
import { Presentation } from "./presentation";
import { CustomScroll } from "react-custom-scroll";

export function Career() {
    return <CustomScroll heightRelativeToParent="100%">
        <Flex className="career-container" vertical align="center">
            <Flex className="title-container" align="center" justify="center" gap={100}>
                <Avatar
                    size={200}
                    src={imgpath} />
                <Flex vertical align="end">
                    <Title style={{ margin: 0 }}>
                        Patrick Romão Hernandez
                    </Title>
                    <Title style={{ marginTop: '15px' }} level={2} color="">
                        <i>Full Stack Software Engineer</i>
                    </Title>

                    <Paragraph className="paragraph"><i>Brazil</i></Paragraph>
                </Flex>
            </Flex>
            <br />
            <br />
            <Presentation />
        </Flex >
    </CustomScroll>
}