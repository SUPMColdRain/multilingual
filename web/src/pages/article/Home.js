import React from 'react';
import { Avatar, Card, List, Space } from 'antd';
import { EyeOutlined, LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';

const listData = [];
const IconText = ({icon, text}) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design grammar for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

function Home(props) {
  const onClick = () => {
    props.history.push(`/article/${listData.title}`)
  }

  return (
    <Card>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 3,
        }}
        dataSource={listData}
        footer={
          <div>
            <b>ant design</b> footer part
          </div>
        }
        renderItem={item => (
          <List.Item
            onClick={onClick}
            key={item.title}
            actions={[
              <IconText icon={EyeOutlined} text="156" key="list-vertical-star-o"/>,
              <IconText icon={StarOutlined} text="156" key="list-vertical-star-o"/>,
              <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o"/>,
              <IconText icon={MessageOutlined} text="2" key="list-vertical-message"/>,
            ]}
            extra={
              <img width={272} alt="logo"
                   src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"/>
            }
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar}/>}
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}
            />
            {item.content}
          </List.Item>
        )}
      />
    </Card>
  );
}

export default Home;
