import React from 'react';
import {Layout} from "antd";

const {Content, Sidebar} = Layout

function ArticleRead() {
    return (
        <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>Content</Content>
            <Sidebar className="site-layout-background" width={200}>Sidebar</Sidebar>
        </Layout>
    );
}

export default ArticleRead;
