import { Flex } from "antd";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";

export function Presentation() {
    return (
        <Flex vertical className="presentation-container">
            <Title>About Patrick</Title>
            <br/>
            <Paragraph className="paragraph">Hey there, my name is Patrick and I'm a software developer since 17 years old.</Paragraph>
            <br />
            <Paragraph className="paragraph">I have a strong passion for the field of I.T. and always dedicate my
                free time to studying various topics in the area, such as architecture,
                clean coding, algorithms, and cybersecurity.</Paragraph>

            <br />
            <Paragraph className="paragraph">With six years of experience as a Full Cycle Developer, I've gained
                solid skills in a wide range of technologies, including:</Paragraph>

            <br />
            <Paragraph className="paragraph">Backend Development: Golang, C# (.NET) and Entity Framework, C++,
                Rust, Java and SpringBoot, Node.js and Nest.js, Kotlin</Paragraph>

            <br />
            <Paragraph className="paragraph">Machine Learning: Neural Networks, Pytorch, Python, Deep
                Learning, Transformer, and other Natural Language Processing
                architectures, Classification and Prediction Models, C++</Paragraph>

            <br />
            <Paragraph className="paragraph"> Frontend Development: React, Next.js, Angular, Vue.js, HTML5
                (soon HTML6)</Paragraph>

            <br />
            <Paragraph className="paragraph">Mobile Development: React Native, Flutter, Kotlin, Java</Paragraph>

            <br />
            <Paragraph className="paragraph">Additionally, I have experience implementing various design patterns
                and architectures in projects, such as:</Paragraph>

            <br />
            <Paragraph className="paragraph">Architectures: Microservices, Monolith, Embedded Software, CQRS,
                MVC, DDD, Hexagonal (ports and adapters)</Paragraph>

            <br />
            <Paragraph className="paragraph">Design Patterns: Mediator, Observer, Factory, Facade, Singleton,
                Builder, Prototype, Decorator, Proxy</Paragraph>

            <br />
            <Paragraph className="paragraph">I am committed to SOLID principles and constantly improving my
                knowledge of software quality.</Paragraph>

            <br />
            <Paragraph className="paragraph">I appreciate your interest and am happy to discuss any opportunity
                that aligns with my profile.</Paragraph>

            <br />
            <Paragraph className="paragraph">Contact me anytime :)</Paragraph>
        </Flex >
    )
}