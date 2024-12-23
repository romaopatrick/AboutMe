import { Flex } from 'antd'
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import "../index.scss"

export default function DivbankXP() {
    return (
        <Flex vertical className="endark">
            <Title level={3} >Divibank</Title >
            <Paragraph className="paragraph">2020 - 2023</Paragraph>
            <br />
            <Paragraph className="paragraph">
                By that time, I had already developed a strong familiarity with the programming
                landscape. My tenure at Divibank acknowledged and rewarded this expertise.
            </Paragraph>
            <br />
            <Paragraph className="paragraph">
                Within just 3 or 4 months, I received a well-deserved salary increase, and
                shortly after, I was promoted to the role of full Software Engineer.
            </Paragraph>
            <br />
            <Paragraph className="paragraph">
                At Divibank, challenges shifted from technical hurdles to
                a deeper understanding of business rules.
            </Paragraph>
            <br />
            <Paragraph className="paragraph">
                I recall the thorough efforts my team and I dedicated to refining the algorithm
                and architecture of the calculation memory, a process that
                took several months to perfect.
            </Paragraph>
            <br />
            <Paragraph className="paragraph">
                We actively engaged in migrating across three major Cloud providers: GCP, AWS, and AZURE.
                This experience marked my initial immersion into intensive studies on code quality and design patterns.
            </Paragraph>
        </Flex>
    )
}
