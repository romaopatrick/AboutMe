import { Flex } from 'antd'
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import "../index.scss"

export default function TilidXP() {
    return (
        <><Flex vertical className="endark">
            <Title level={3} >TILID</Title>
            <Paragraph className="paragraph">2023 - Current</Paragraph>
            <br />

            <Paragraph className="paragraph">
                Nowadays, I work at TILID, a great technology
                consultancy company. I am pretty proud of this one.
            </Paragraph>
            <br />

            <Paragraph  className="paragraph">
                I provided consultancy for an international
                company in the assistance and insurance sector,
                called Europ Assistance. At this consultancy, we had 
                to make many integrations between our Microservices ecosystem
                using Websockets (SignaR), Machine Learning using Python and 
                C++, we develop all new APIs based on legacy ones using Golang 
                and React for the company's legacy system was using an old 
                .NET version and Windows Forms. Saga Patterns and other development 
                solutions was included to improve the scalability of an event 
                oriented base system.
            </Paragraph>
            <br />

            <Paragraph className="paragraph">
                Although I faced challenges in fully understanding the business flow, 
                because there's a lot of business lines and rules in brazilian 
                insurance branch, but I managed to adapt well.
            </Paragraph>
            <br />

            <Paragraph className="paragraph">
                Additionally, I improved my mobile development skills through projects related
                to the company's core business.
            </Paragraph>
            <br />
            <Paragraph className="paragraph">
                After almost a year in this environment, I deeply understood the complexity and
                importance of the role of a Tech Lead.</Paragraph>
            <br />
            <Paragraph className="paragraph">
                I learned, and keep learning to listen, understand, question, explain, teach, 
                be humble, talk less and listen more again... A lot of essential skills to
                be an effective technical leader.
            </Paragraph>
        </Flex></>
    )
}
