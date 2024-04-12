import { Flex, Menu } from "antd";
import './index.scss';
import { useLocation, useNavigate } from "react-router";

export function Header() {
    const location = useLocation() ;
    const navigate = useNavigate()
    const items = [
        {
            label: 'About Me',
            key: '/aboutme',
            onClick: () => {
                navigate('/aboutme')
            }
        },
        {
            label: 'Experience',
            key: '/jobexperiences',
            onClick: () => {
                navigate('/jobexperiences')
            }
        },
        {
            label: 'Technology Stack',
            key: '/technologystack',
            onClick: () => {
                navigate('/technologystack')
            }
        },
        {
            label: 'Contacts',
            key: '/contact',
            onClick: () => {
                navigate('/contact')
            }
        },
        
    ]

    return <Flex className="header-container">
        <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['/aboutme']}
            selectedKeys={[location.pathname, 'aboutme']}
            items={items}
        />
    </Flex>
}