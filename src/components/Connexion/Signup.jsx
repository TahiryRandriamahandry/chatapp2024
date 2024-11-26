//import { useState } from "react";
import { Form, Input, Button, Typography } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";


const { Title } = Typography;

const Signup = () => {
  

    const onFinishes = (values) => {
        console.log('Received values:', values);
          
      };

  return (
    <div className="sign-up-container">
      <Title level={2}>Créer un compte</Title>
      
      <Form
        name="signup"
        onFinish={onFinishes}
        initialValues={{ remember: true }}
        autoComplete="off"
        className="signup-form"
      >
        {/* Champ Email */}
        <Form.Item
          name="email"
          rules={[
            { required: true, message: "Veuillez entrer votre email!" },
            { type: "email", message: "L'email n'est pas valide!" }
          ]}
          hasFeedback
        >
          <Input
            prefix={<MailOutlined />}
            placeholder="Email"
            type="email"

          />
        </Form.Item>

        {/* Champ Nom d'utilisateur */}
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Veuillez entrer votre nom d'utilisateur!" }]}
          hasFeedback
        >
          <Input
            prefix={<UserOutlined />}
            placeholder="Nom d'utilisateur"
          />
        </Form.Item>

        {/* Champ Mot de passe */}
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Veuillez entrer votre mot de passe!" }]}
          hasFeedback
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Mot de passe"
          />
        </Form.Item>

        {/* Champ Confirmation du mot de passe */}
        <Form.Item
          name="confirm"
          dependencies={["password"]}
          hasFeedback
          rules={[
            { required: true, message: "Veuillez confirmer votre mot de passe!" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Les mots de passe ne correspondent pas!"));
              }
            })
          ]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Confirmer le mot de passe"
          />
        </Form.Item>

        {/* Bouton Soumettre */}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="signup-form-button"
          
          >
            Créer le compte
          </Button>
        </Form.Item>
      </Form>

      <div className="signup-footer">
        <p>Déjà un compte ? <a href="/login">Se connecter</a></p>
      </div>
    </div>
  );
};

export default Signup;
