import { useState } from "react";
import { Layout, Button, Typography, Row, Col, Card,Modal } from "antd";
import { MessageOutlined, PhoneOutlined, VideoCameraOutlined } from "@ant-design/icons";
import "./LandingPage.css";
import Login from "./Login";
import Signup from "./Signup";
const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;


const LandingPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSignUpModalVisible, setIsSignUpModalVisible] = useState(false);

  // Fonction pour afficher le modal
  const showModal = () => {
    setIsModalVisible(true);
  };

  // Fonction pour fermer le modal
  const handleCancel = () => {
    setIsModalVisible(false);
  };

    // Fonction pour afficher le modal d'inscription
    const showSignUpModal = () => {
      setIsSignUpModalVisible(true);
    };
  
    // Fonction pour fermer le modal d'inscription
    const handleSignUpCancel = () => {
      setIsSignUpModalVisible(false);
    };
  // Fonction de connexion (peut inclure redirection ou logique après login)
  const handleLogin = () => {
    console.log('Utilisateur connecté');
    setIsModalVisible(false); // Fermer le modal après la connexion
  };
  return (
    <Layout className="landing-page">
      
      {/* Header */}
      <Header className="landing-header">
        <div className="logo">
          <MessageOutlined style={{ fontSize: "32px", color: "#fff" }} />
          <span className="logo-text">Sanjila Message</span>
        </div>
      </Header>

      {/* Content */}
      <Content className="landing-content">
        <Row justify="center" align="middle" className="content-row">
          <Col xs={24} sm={20} md={12} lg={20}>
            <div className="content-box">
              <Title level={2}>Bienvenue sur Sanjila Message</Title>
              <Typography  style={{ fontSize: '18px', paddingBottom:'10px' }}>
                Connectez-vous avec vos amis et collègues instantanément. Notre application de messagerie est rapide, fiable
                et sécurisée.
              </Typography> 

              {/* Cards Section */}
              <Row justify="center" align="middle" gutter={[16, 16]}>
                <Col xs={24} sm={12} md={8} lg={6}>
                  <Card className="calling">
                    <div className="call">
                      <PhoneOutlined style={{ color: "green", fontSize: "20px", marginRight: "12px" }} />
                      <span style={{ fontSize: "20px" }}>Appel vocal privé</span>
                    </div>
                  </Card>
                </Col>

                <Col xs={24} sm={12} md={8} lg={6}>
                  <Card className="callblue">
                    <div className="call">
                      <VideoCameraOutlined style={{ color: "blue", fontSize: "20px", marginRight: "12px" }} />
                      <span style={{ fontSize: "20px" }}>Appel vidéo avec vos amis</span>
                    </div>
                  </Card>
                </Col>

                <Col xs={24} sm={12} md={8} lg={6}>
                  <Card className="messpink">
                    <div className="call">
                      <MessageOutlined style={{ color: "pink", fontSize: "20px", marginRight: "12px" }} />
                      <span style={{ fontSize: "20px" }}>Envoyez un SMS depuis notre site à vos proches</span>
                    </div>
                  </Card>
                </Col>
              </Row>

              {/* Action Buttons */}
              <div className="buttons">
                <Button type="primary" size="large" onClick={showModal}>
                  Connexion
                </Button>
                <Button type="default" size="large" onClick={showSignUpModal}>
                  Inscription
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Content>
 {/* Modal pour le login */}
      <Modal
        title="Se connecter"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null} // On ne met pas de footer ici car nous gérons le bouton dans le formulaire de login
        centered
        destroyOnClose // Ferme proprement le modal
      >
        <Login onCancel={handleCancel} onLogin={handleLogin} />
      </Modal>

         {/* Modal pour l'inscription */}
         <Modal
        title="Créer un compte"
        visible={isSignUpModalVisible}
        onCancel={handleSignUpCancel}
        footer={null}
        centered
        destroyOnClose
      >
        <Signup />

      </Modal>
      {/* Footer */}
      <Footer className="landing-footer">
        <Text style={{ color: "white" }}>© 2024 MyMessenger. Tous droits réservés.</Text>
      </Footer>
    </Layout>
  );
};

export default LandingPage;
