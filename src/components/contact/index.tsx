import { Flex, Typography } from "antd";
import LinkedIn from "/assets/icons/linkedin.svg";
import Whatspapp from "/assets/icons/whatsapp.svg";
import Gmail from "/assets/icons/gmail.svg";
import Github from "/assets/icons/github.svg";

import { Link } from "react-router-dom";
import "./index.scss"

const { Title } = Typography
const urls = {
    linkedIn: 'https://linkedin.com/in/patrick-hernandez-874318176',
    whatsapp: 'https://wa.me/+5511914218152',
    gmail: 'http://mail.google.com/mail?view=cm&fs=1&to=patrickromao2001@gmail.com',
    github: 'https://github.com/romaopatrick'
}


export function Contact() {
    return (
        <Flex className="page contact-container" vertical>
            <h1>Contacts</h1>
            <Link to={urls.linkedIn} target="_blank">
                <Flex className="item-container">
                    <img src={LinkedIn.toString()} width={55} />
                    <Title className="text" level={3} >patrick-hernandez</Title>
                </Flex>
            </Link>
            <Link to={urls.whatsapp} target="_blank">
                <Flex className="item-container">
                    <img src={Whatspapp.toString()} width={55} />
                    <Title className="text" level={3} >Patrick Romão (PET)</Title>
                </Flex>
            </Link>
            <Link to={urls.gmail} target="_blank">
                <Flex className="item-container">
                    <img src={Gmail.toString()} width={55} />
                    <Title className="text" level={3} >patrickromao2001@gmail.com</Title>
                </Flex>
            </Link>
            <Link to={urls.github} target="_blank">
                <Flex className="item-container">
                    <img className="github-img" src={Github.toString()} width={55} />
                    <Title className="text" level={3} >romaopatrick</Title>
                </Flex>
            </Link>
        </Flex>
    )
}