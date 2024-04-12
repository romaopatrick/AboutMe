import { Flex } from "antd";
import Title from "antd/es/typography/Title";
import "./index.scss"
import Paragraph from "antd/es/typography/Paragraph";
import { CustomScroll } from "react-custom-scroll";

export function JobExperiences() {
    return <CustomScroll heightRelativeToParent="100%"> 
        <Flex className="worked-in-container" vertical>
            <Title>Job Experiences</Title>
            <br />
            <Flex gap={30} className="list" justify="center">
                <Flex vertical className="endark">
                    <Flex className="worked-in-card" vertical>
                        <Title level={3}>CityConnect</Title>
                        <Paragraph className="paragraph">2018 - 2020</Paragraph>
                        <br />

                        <Paragraph className="paragraph">My first developer job introduced me to various technologies, including: </Paragraph>
                        <Paragraph className="paragraph">.NET, Node.js, Flutter, React, Angular, React Native, Razor Pages, ASPX, and Ajax.</Paragraph>
                        <br />
                        <Paragraph className="paragraph">In this role, I was responsible for maintaining a legacy city hall fines </Paragraph>
                        <Paragraph className="paragraph">system while also working on the development of new mobile technologies.</Paragraph>
                    </Flex>
                </Flex>
                <br />
                <Flex vertical className="endark">
                    <Title level={3} >Divibank</Title >
                    <Paragraph className="paragraph">2020 - 2023</Paragraph>
                    <br />
                    <Paragraph className="paragraph">By that time, I had already developed a strong familiarity with the programming</Paragraph>
                    <Paragraph className="paragraph"> landscape. My tenure at Divibank acknowledged and rewarded this expertise.</Paragraph>
                    <br />
                    <Paragraph className="paragraph">Within just 3 or 4 months, I received a well-deserved salary increase, and </Paragraph>
                    <Paragraph className="paragraph">shortly after, I was promoted to the role of full Software Engineer.</Paragraph>
                    <br />
                    <Paragraph className="paragraph">At Divibank, challenges shifted from technical hurdles to a deeper understanding of </Paragraph>
                    <Paragraph className="paragraph">business rules.</Paragraph>
                    <br />
                    <Paragraph className="paragraph">I recall the thorough efforts my team and I dedicated to refining the algorithm and </Paragraph>
                    <Paragraph className="paragraph">architecture of the calculation memory, a process that took several months to perfect.</Paragraph>
                    <br />
                    <Paragraph className="paragraph">We actively engaged in migrating across three major Cloud providers: GCP, AWS, and AZURE.</Paragraph>
                    <Paragraph className="paragraph"> This experience marked my initial immersion into intensive studies on code quality and design patterns.</Paragraph>
                </Flex>

                <br />
                <Flex vertical className="endark">
                    <Title level={3} >ISodano</Title>
                    <Paragraph className="paragraph">2023 - Current</Paragraph>
                    <br />

                    <Paragraph className="paragraph">In my last work experience at A ISodano, I provided consultancy for an international </Paragraph>
                    <Paragraph className="paragraph">company in the assistance and insurance sector.</Paragraph>
                    <br />
                    <Paragraph className="paragraph">Although I faced challenges in fully understanding the business flow (I still don't</Paragraph>
                    <Paragraph className="paragraph">fully understand it to this day), I was able to adapt well.</Paragraph>
                    <br />
                    <Paragraph className="paragraph">During this period, I worked with Machine Learning using Python and C++, although </Paragraph>
                    <Paragraph className="paragraph">I already had previous experience with these technologies during my studies.</Paragraph>
                    <br />
                    <Paragraph className="paragraph">We develop all new APIs in Golang and React. However, the company's core system <Paragraph className="paragraph">
                    </Paragraph> was based on .NET and Windows Forms.</Paragraph>
                    <br />
                    <Paragraph className="paragraph">Additionally, I improved my mobile development skills through projects related to </Paragraph>
                    <Paragraph className="paragraph">the company's core business.</Paragraph>
                    <br />
                    <Paragraph className="paragraph">After almost a year in this environment, I deeply understood the complexity and </Paragraph>
                    <Paragraph className="paragraph">importance of the role of a Tech Lead.</Paragraph>
                    <br />
                    <Paragraph className="paragraph">I learned to listen, understand, question, explain and teach, essential skills for </Paragraph>
                    <Paragraph className="paragraph"> an effective technical leader.</Paragraph>
                </Flex>
            </Flex>
        </Flex>
    </CustomScroll>

}