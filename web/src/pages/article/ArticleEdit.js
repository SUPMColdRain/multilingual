import React, { useEffect, useRef } from 'react';
import { Button, Card, Form, Input } from 'antd';

function ArticleEdit(props) {
  const formRef = useRef(null);

  // 初始化的时候执行
  useEffect(() => {
    console.log(props.match);
    if (props.match.params.s_username) {
      // getOneById(props.match.params.s_username)
      // .then(res => {
      //   console.log(res);
      //   formRef.current.setFieldsValue({
      //     username: res.data.s_username,
      //     password: res.data.s_password,
      //     admin: res.data.s_admin,
      //   });
      // });
    }
  }, [props.match.params.s_username]);
  //
  // const pwdValidate = (rule, value, callback) => {
  //   if (value.length < 6) {
  //     return callback('密码长度不能小于6位数');
  //   } else return callback();
  // };

  // 成功回调
  const onFinish = (values) => {
    // if (values) {
    //   console.log('success = ', values);
    //   if (props.match.params.s_username) {
    //     // 修改用户
    //     modifyOne(props.match.params.s_username, {...values})
    //     .then(res => {
    //       message.success('修改成功');
    //       console.log('修改用户 = ', res);
    //       props.history.push('/admin/userConfig');
    //     })
    //     .catch(err => {
    //       message.success('修改失败');
    //       console.log(err);
    //     });
    //   } else {
    //     // 新建用户
    //     createApi({...values})
    //     .then(res => {
    //       message.success('新建成功');
    //       console.log('新建用户 = ', res);
    //       props.history.push('/admin/userConfig');
    //     })
    //     .catch(err => {
    //       message.success('新建失败');
    //       console.log(err);
    //     });
    //   }
    // }
  };

  // 失败回调
  const onFinishFailed = ({errorFields}) => {
    console.log('props = ', errorFields[0].s_username);
    // message.error('请输入正确的内容');
  };

  return (
    <Card
      title='导入文章'
      extra={
        <Button onClick={() => props.history.push('/')}>返回</Button>
      }
    >
      <Form
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        // ref={formRef}
      >
        <Form.Item
          name="title"
          label="标题"
          rules={[
            {
              required: true,
              message: '请输入标题',
            },
          ]}
        >
          <Input placeholder='请输入标题'/>
        </Form.Item>
        <Form.Item
          // TODO 把内容输入改成富文本
          name="detail"
          label="内容"
          rules={[
            {
              required: true,
              message: '请输入内容',
            },
          ]}
        >
        </Form.Item>
        <Form.Item
          name="difficulty"
          label="难度"
          rules={[
            {
              required: true,
              message: '请选择难度',
            },
          ]}
        >
        </Form.Item>
        <Form.Item
          name="language"
          label="语言"
          rules={[
            {
              required: true,
              message: '请选择语言',
            },
          ]}
        >

        </Form.Item>
        <Form.Item
          name="url"
          label="网址"
          rules={[
            {
              required: true,
              message: '请输入原文网址',
            },
          ]}
        >

        </Form.Item>
        <Form.Item
          name="learn"
          label="学习类型"
          rules={[
            {
              required: true,
              message: '请选择学习类型',
            },
          ]}
        >

        </Form.Item>
        <Form.Item
          name="type"
          label="文章类型"
          rules={[
            {
              required: true,
              message: '请选择文章类型',
            },
          ]}
        >

        </Form.Item>
        <Form.Item
          name="share"
          label="共享"
          rules={[
            {
              required: true,
              message: '是否自己可见',
            },
          ]}
        >

        </Form.Item>
        <Form.Item
          name="cover"
          label="封面"
          rules={[
            {
              required: true,
              message: '请上传封面',
            },
          ]}
        >

        </Form.Item>
        <Form.Item>
          <Button htmlType='submit' type='primary'>保存</Button>
        </Form.Item>
      </Form>
    </Card>
  );
}

export default ArticleEdit;
