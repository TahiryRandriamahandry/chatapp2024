// Login.jsx
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const Login = () => {
  const onFinishes = (values) => {
    console.log('Received values:', values);
      
  };

  return (
    <div style={{ width: '300px', padding: '20px' }}>
      <Form
        name="login"
        onFinish={onFinishes}
        initialValues={{
          remember: true,
        }}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Veuillez entrer votre nom d'utilisateur!" }]}
          hasFeedback
        >
          <Input
            prefix={<UserOutlined />}
            placeholder="Nom d'utilisateur"
            size="large"
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Veuillez entrer votre mot de passe!" }]}
          hasFeedback
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Mot de passe"
            size="large"
          />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Se souvenir de moi</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" size="large" block>
            Se connecter
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
