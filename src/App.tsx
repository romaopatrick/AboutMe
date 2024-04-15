import './App.scss'
import { Flex, Layout } from 'antd'
import { Header } from './components/header'
import { Outlet } from 'react-router'
import { CustomScroll } from 'react-custom-scroll'



function App() {
  
  return (
    <Flex vertical className='container'>
        <Layout.Header>
          <Header />
        </Layout.Header>
        <Layout.Content>
          <CustomScroll  heightRelativeToParent="100%">
          {
            <Outlet />
          }
          </CustomScroll>
        </Layout.Content>
    </Flex>
  )
}

export default App
