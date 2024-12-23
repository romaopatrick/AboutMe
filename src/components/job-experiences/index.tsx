import { Flex } from "antd";
import Title from "antd/es/typography/Title";
import "./index.scss"
import CityConnectXP from "./city-connect";
import DivbankXP from "./divibank";
import TilidXP from "./tilid";

export function JobExperiences() {
    return <Flex className="page worked-in-container" vertical>
            <Title>Job Experiences</Title>
            <br />
            <Flex className="list">
                <CityConnectXP/>
                <br />
                <DivbankXP/>
                <br />
                <TilidXP/>
            </Flex>
        </Flex>

}