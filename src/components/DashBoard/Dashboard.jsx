import { useState } from 'react';
import { Layout, Menu, Typography, List, Avatar, Modal, Button } from 'antd';
import { DashboardOutlined, MessageOutlined, SettingOutlined, ContactsOutlined,PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Message from './Message';
// import AddFriends from './AddFriends';
import './Dashboard.css';
const { Header, Content, Sider } = Layout;
const { Title } = Typography;

const Dashboard = () => {
  // État pour le Modal et le contact sélectionné
  const [isModalMessVisible, setIsModalMessVisible] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  
  // Fonction pour afficher le Modal avec le contact sélectionné
  const showModal = (contact) => {
    setSelectedContact(contact); // Met à jour le contact sélectionné
    setIsModalMessVisible(true); // Affiche le Modal
  };

  // Fonction pour cacher le Modal
  const hideModal = () => {
    setIsModalMessVisible(false);
    setSelectedContact(null); // Réinitialise le contact sélectionné
  };

  // Exemple de liste de contacts
  const contacts = [
    { id: 1, name: 'Judicael', avatar: 'https://via.placeholder.com/40' },
    { id: 2, name: 'Bob le Balthazar', avatar: 'https://via.placeholder.com/40' },
    { id: 3, name: 'Dinoh San ', avatar: 'https://via.placeholder.com/40' },
    { id: 4, name: 'Tahiry Andia\'s', avatar: 'https://via.placeholder.com/40' },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Sidebar gauche pour les dashoard */}
      <Sider className="gauche" width={250} style={{ background: '#fff', borderRight: '1px solid #ddd' }}>
        <div className="logo">
          <Title level={3} style={{ color: '#1890ff', textAlign: 'center' }}>
            Dashboard
          </Title>
        </div>
        <Menu mode="inline" defaultSelectedKeys={['1']} style={{ height: '100%', borderRight: 0 }}>
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            <Link to="/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<MessageOutlined />}>
            <Link to="/messages">Messages</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<ContactsOutlined />}>
            <Link to="/contacts">Contact List</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<SettingOutlined />}>
            <Link to="/settings">Paramètres</Link>
          </Menu.Item>
        </Menu>
      </Sider>

      {/* Layout principal */}
      <Layout>
        {/* Header */}
        <Header style={{ background: '#1890ff', padding: '0 20px', width: '100%',alignItems:'center' }}>
          <div style={{ color: 'white', fontSize: '20px', textAlign: 'center' }}>
            <Title level={3} style={{ color: 'white' }}>
              Bienvenue dans le Dashboard
            </Title>
          </div>
        </Header>

        {/* Contenu principal */}
        <Content style={{ padding: '20px', marginTop: '10px' }}>
          <div className="content-col" style={{width:'100%'}}>
            <Message />
            {/* <AddFriends/> */}
          </div>
        </Content>
      </Layout>

      {/* Sidebar droite de contact */}
      <Sider width={250} style={{ background: '#fff', borderLeft: '1px solid #ddd' }}>
        <div className="logo">
          <Title level={4} style={{ color: '#1890ff', textAlign: 'center', marginTop: '20px' }}>
            Contacts
          </Title>
          <Button style={{marginLeft:'30px'}}><PlusOutlined/></Button>

        </div>
        <div style={{ padding: '10px' }}>
          <List
            itemLayout="horizontal"
            dataSource={contacts}
            renderItem={(contact) => (
              <List.Item onClick={() => showModal(contact)} style={{ cursor: 'pointer' }}>
                <List.Item.Meta
                  avatar={<Avatar src={contact.avatar} />}
                  title={contact.name}
                />
              </List.Item>
            )}
          />
        </div>
      </Sider>

      {/* Modal */}
      <Modal
        title={selectedContact ? `Envoyer un message à ${selectedContact.name}` : 'Envoyer un message'}
        visible={isModalMessVisible}
        onCancel={hideModal}
        footer={null}
        centered
        destroyOnClose
      >
        <Message />
      </Modal>
    </Layout>
  );
};

export default Dashboard;
