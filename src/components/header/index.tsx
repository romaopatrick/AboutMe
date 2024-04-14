import { Dropdown, Flex, Menu, MenuProps } from "antd";
import './index.scss';
import { useNavigate } from "react-router";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { MenuOutlined } from '@ant-design/icons'
export function Header() {
    const navigate = useNavigate();
    const shouldRenderMenuBurger = useMediaQuery({ maxWidth: 574 })
    const itemsStyle: React.CSSProperties = {
        color: 'white',
        fontFamily: 'Share Tech", Inter, Avenir, Helvetica, Arial, sans-serif',
        fontWeight: 'bold',
    }

    const selectedStyle: React.CSSProperties = {
        backgroundColor: 'rgb(0, 255, 132)',
        fontFamily: 'Share Tech", Inter, Avenir, Helvetica, Arial, sans-serif',
        fontWeight: 'bold',
        color: 'black'
    }


    const items = [
        {
            label: 'About Me',
            key: '/',
            onClick: () => {
                navigate('/')
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
    const [selected, select] = useState(items[0])
    const onMenuSelect: MenuProps['onSelect'] = (info) => {
        select(items.find(x => x.key === info.key)!)
    }

    function getItemStyle(itemKey: string) {
        return selected?.key == itemKey ? selectedStyle : itemsStyle
    }

    return <Flex className="header-container">
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
                        onSelect: onMenuSelect,
                        className: 'burger-menu',
                        style: {
                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                            color: 'white'
                        }
                    }}
                >
                    <MenuOutlined className="burger-icon" style={{ fontSize: '23px' }} />
                </Dropdown>

                : <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={[selected.key]}
                    selectedKeys={[selected.key]}
                    onSelect={onMenuSelect}
                    items={items}
                />
        }
    </Flex>
}