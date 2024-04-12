import './App.scss'
import { Flex, Layout } from 'antd'
import { Header } from './components/header'
import { Outlet } from 'react-router'

function App() {
  return (
    <Flex vertical className='container'>
        <Layout.Header>
          <Header />
        </Layout.Header>
        <Layout.Content>
          {
            <Outlet />
          }
        </Layout.Content>
    </Flex>
  )
}

export default App
