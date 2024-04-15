import { Dropdown, Flex, Menu } from "antd";
import './index.scss';
import { useLocation, useNavigate } from "react-router";
import { useMediaQuery } from "react-responsive";
import { MenuOutlined } from '@ant-design/icons'

const items = [
    {
        label: 'About Me',
        key: '/',
    },
    {
        label: 'Experience',
        key: '/jobexperiences',
    },
    {
        label: 'Technology Stack',
        key: '/technologystack',
    },
    {
        label: 'Contacts',
        key: '/contact',
    },
]


const itemsStyle: React.CSSProperties = {
    color: 'white',
    fontFamily: 'Share Tech", Inter, Avenir, Helvetica, Arial, sans-serif',
    fontWeight: 'bold',
    padding: '16px',
}

const selectedStyle: React.CSSProperties = {
    backgroundColor: 'rgb(0, 255, 132)',
    fontFamily: 'Share Tech", Inter, Avenir, Helvetica, Arial, sans-serif',
    fontWeight: 'bold',
    color: 'black',
    padding: '16px',
}


export function Header() {
    const navigate = useNavigate();
    const shouldRenderMenuBurger = useMediaQuery({ maxWidth: 574 })
    const location = useLocation()

    const selected = items.find(x => x.key === location.pathname) ?? items[0]

    function getItemStyle(itemKey: string) {
        return selected?.key == itemKey ? selectedStyle : itemsStyle
    }

    return <Flex className="header-container">
        <h1><i>P. R. H.</i></h1>
        {
            shouldRenderMenuBurger
                ? <Dropdown
                    className="burger-dropdown"
                    overlayClassName="burger-overlay"
                    menu={{
                        items: items.map(x => ({ ...x, style: getItemStyle(x.key) })),
                        selectable: true,
                        selectedKeys: [selected.key],
                        theme: 'dark',
                        onSelect: (info) => navigate(info.key),
                        className: 'burger-menu',
                        style: {
                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                            color: 'white'
                        }
                    }}
                >
                    <MenuOutlined className="burger-icon" style={{ fontSize: '26px' }} />
                </Dropdown>

                : <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={[selected.key]}
                    selectedKeys={[selected.key]}
                    onSelect={(info) => navigate(info.key)}
                    items={items}
                />
        }
    </Flex>
}