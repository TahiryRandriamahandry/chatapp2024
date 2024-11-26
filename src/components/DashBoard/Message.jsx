import { useState } from 'react';
import { Input, Button, List, Space, message as antdMessage } from 'antd';
import { PhoneOutlined, VideoCameraOutlined, SendOutlined } from '@ant-design/icons';

const Message = () => {
  const [textMessage, setTextMessage] = useState('');
  const [messageList, setMessageList] = useState([]);

  // Fonction pour envoyer un message texte
  const handleSendMessage = () => {
    if (textMessage.trim() !== '') {
      setMessageList([...messageList, { type: 'text', content: textMessage }]);
      antdMessage.success('Message envoyé !');
      setTextMessage('');
    } else {
      antdMessage.warning('Le champ de message est vide.');
    }
  };

  // Fonction pour initier un appel vocal
  const handleVoiceCall = () => {
    antdMessage.info('Appel vocal en cours...');
    console.log('Appel vocal initié');
  };

  // Fonction pour initier un appel vidéo
  const handleVideoCall = () => {
    antdMessage.info('Appel vidéo en cours...');
    console.log('Appel vidéo initié');
  };

  return (
    <div style={styles.container}>
      <div style={styles.chatSection}>
        {/* Historique des messages */}
        <List
          size="small"
          bordered
          dataSource={messageList}
          renderItem={(item, index) => (
            <List.Item key={index}>
              <span>{item.content}</span>
            </List.Item>
          )}
          style={styles.chatHistory}
        />

        {/* Champ pour taper un message */}
        <Space style={styles.inputSection}>
          <Input
            placeholder="Écrire un message..."
            value={textMessage}
            onChange={(e) => setTextMessage(e.target.value)}
            onPressEnter={handleSendMessage}
          />
          <Button
            type="primary"
            icon={<SendOutlined />}
            onClick={handleSendMessage}
          >
            Envoyer
          </Button>
        </Space>
      </div>

      {/* Section des appels */}
      <Space style={styles.callSection}>
        <Button
          type="default"
          icon={<PhoneOutlined />}
          onClick={handleVoiceCall}
          size="large"
        >
          Appel Vocal
        </Button>
        <Button
          type="primary"
          icon={<VideoCameraOutlined />}
          onClick={handleVideoCall}
          size="large"
        >
          Appel Vidéo
        </Button>
      </Space>
    </div>
  );
};

// Styles en ligne
const styles = {
  container: {
    minWidth: '600px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  chatSection: {
    marginBottom: '20px',
  },
  chatHistory: {
    maxHeight: '80vh',
    minHeight: '600px',
    overflowY: 'auto',
    marginBottom: '10px',
  },
  inputSection: {
    display: 'flex',
    gap: '10px',
  },
  callSection: {
    display: 'flex',
    justifyContent: 'space-between',
  },
};

export default Message;
