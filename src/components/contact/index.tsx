import { Flex, Typography } from "antd";
import LinkedIn from "/assets/icons/linkedin.svg";
import Whatspapp from "/assets/icons/whatsapp.svg";
import Gmail from "/assets/icons/gmail.svg";
import Github from "/assets/icons/github.svg";

import { Link } from "react-router-dom";
import "./index.scss"
import { CustomScroll } from "react-custom-scroll";

const { Title } = Typography
const urls = {
    linkedIn: 'https://linkedin.com/in/patrick-hernandez-874318176',
    whatsapp: 'https://wa.me/+5511914218152',
    gmail: 'http://mail.google.com/mail?view=cm&fs=1&to=patrickromao2001@gmail.com',
    github: 'https://github.com/romaopatrick'
}


export function Contact() {
    return (
        <CustomScroll heightRelativeToParent="100%">
            <Flex className="contact-container" vertical>
                <Title level={1}>Contacts</Title>
                <Link to={urls.linkedIn} target="_blank">
                    <Flex className="item-container">
                        <img src={LinkedIn.toString()} width={60} />
                        <Title className="text" level={2} >patrick-hernandez</Title>
                    </Flex>
                </Link>
                <Link to={urls.whatsapp} target="_blank">
                    <Flex className="item-container">
                        <img src={Whatspapp.toString()} width={60} />
                        <Title className="text" level={2} >+55 (11) 91421-8152</Title>
                    </Flex>
                </Link>
                <Link to={urls.gmail} target="_blank">
                    <Flex className="item-container">
                        <img src={Gmail.toString()} width={60} />
                        <Title className="text" level={2} >patrickromao2001@gmail.com</Title>
                    </Flex>
                </Link>
                <Link to={urls.github} target="_blank">
                    <Flex className="item-container">
                        <img className="github-img" src={Github.toString()} width={60} />
                        <Title className="text" level={2} >romaopatrick</Title>
                    </Flex>
                </Link>
            </Flex>
        </CustomScroll>
    )
}