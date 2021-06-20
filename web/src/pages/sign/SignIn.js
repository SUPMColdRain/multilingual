import React from 'react';
import { Form, Input, Button, Card, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { setToken } from '../../utils/auth';
import { login } from '../../services/login';
import './Sign.css';

function SignIn(props) {
  const onFinish = values => {
    if (values) {
      login({
        username: values.username,
        password: values.password,
      }).then(res => {
        if (res.status === 200) {
          message.success('登录成功');
          setToken(res.token);
          props.history.push('/admin');
        } else {
          message.info(res.message);
        }
      }).catch(err => {
        message.error('用户名或密码错误');
      });
    }
  };

  const validate = values => {
    const errors = {};

    if (!values.email) {
      errors.email = '邮箱不能为空';
    } else if (!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/i.test(values.email)) {
      errors.email = '无效的邮箱';
    }

    if (!values.password) {
      errors.password = '密码不能为空';
    } else if (values.password.length < 8) {
      errors.password = '密码长度至少为8';
    } else if (/^[\u4E00-\u9FA5\uF900-\uFA2D\u0020]*$/i.test(values.password)) {
      errors.password = '只能输入英文、数字和特殊字符';
    }

    if (values.confirmPassword !== values.password) {
      errors.confirmPassword = '两次密码不一致';
    }

    if (!values.fullName) {
      errors.fullName = '全名不能为空';
    }
  };

  return (
    <Card title="登录界面" className="login-form">
      <Form
        name="normal_login"
        layout="horizontal"
        initialValues={{remember: true}}
        onFinish={onFinish}
      >
        <Form.Item
          label="username"
          name="username"
          rules={[
            {
              required: true,
              type: 'email',
              message: '请填入正确的邮箱',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon"/>}
                 placeholder="example@email.com"
          />
        </Form.Item>

        <Form.Item
          label="password"
          name="password"
          rules={[
            {
              required: true,
              message: '请输入密码!',
            },
            {
              pattern: new RegExp(/^[\u4E00-\u9FA5\uF900-\uFA2D\u0020]*$/i),
              message: '只能输入英文、数字和特殊字符',
            },
            {
              min: 8,
              message: '密码长度至少为8',
            },
          ]}
        >
          <Input prefix={<LockOutlined className="site-form-item-icon"/>}
                 type="password"
                 placeholder="······"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}

export default SignIn;
