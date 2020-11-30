import React from 'react'
import { Layout } from 'antd'
import Menu from '../components/Common/Menu'

const { Header, Content, Footer } = Layout

const MasterLayout = ({ children }) => {
    return <Layout className="app-layout">
        <Header>
            <Menu />
        </Header>
        <Content className="app-layout__content">
            {children}
        </Content>
        <Footer />
    </Layout>
}

export default MasterLayout