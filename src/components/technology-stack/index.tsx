import { Flex } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import './index.scss';
export function TechnologyStack() {
    return (
            <Flex className="page technology-stack-container " vertical>
                <Title>Technology Stack</Title>
                <br />
                <br />
                <br />
                <Flex wrap="wrap" className="list">
                    <Flex vertical className="endark">
                        <Title level={3}>Backend</Title>
                        <br />
                        <Paragraph className="paragraph"> .NET | Go | Python | Rust | C++ | Node | Nest | Java</Paragraph>
                    </Flex>
                    <Flex vertical className="endark">
                        <Title level={3}>Frontend</Title>
                        <br />
                        <Paragraph className="paragraph"> React | Next | Angular | Vue  | Solid | HTML5 | HTML6 | Server Side Rendering</Paragraph>
                    </Flex>
                    <Flex vertical className="endark">
                        <Title level={3}>Mobile</Title>
                        <br />
                        <Paragraph className="paragraph"> React Native | Flutter | Kotlyn | Java | C++ </Paragraph>
                    </Flex>
                    <Flex vertical className="endark">
                        <Title level={3}>Machine Learning</Title>
                        <br />
                        <Paragraph className="paragraph">Python | Pytorch | Panda | C++ </Paragraph>
                        <Paragraph className="paragraph">Deep Learning | Neural NetworkTransformer | Convolutional | Recurrent </Paragraph>
                    </Flex>
                    <Flex vertical className="endark">
                        <Title level={3}>Design Patterns</Title>
                        <br />
                        <Paragraph className="paragraph">Saga | Decorator | Mediator | Observer | Ports and Adapters </Paragraph>
                        <Paragraph className="paragraph">Distributed Cache | Factory | Proxy | Prototype | Builder | Faccade | Singleton | CQRS </Paragraph>
                    </Flex>
                    <Flex vertical className="endark">
                        <Title level={3}>Architetures</Title>
                        <br />
                        <Paragraph className="paragraph">Micro-services | DDD | MVC | Monolith | Embedded Software | Actors | Hexagonal | Modules </Paragraph>
                    </Flex>
                </Flex>
            </Flex>
    )
}