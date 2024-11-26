//import { useState } from 'react';
import { Input, Button, Form,notification } from 'antd';
import {SendOutlined ,SearchOutlined,UserAddOutlined} from '@ant-design/icons';

const AddFriends =()=>{
    // const [friend,setFriend] = useState([])
    

     const onFinishes = (value)=>{
          console.log('Ajout d\'ami reussi',value)
     }
    return(
        <div>
             <Form
              name="friendRequest"
              onFinish={onFinishes}
              initialValues={{
                remember:true,
              }}
             >
                <Form.Item
                name='numero'
                >
                    <Input
                    prefix={<UserAddOutlined/>}
                     placeholder='Numero à ajouter'
                    />
                </Form.Item>
                <Button htmlType='submit'>AJouter</Button>
             </Form>
        </div>
    )

};
export default AddFriends;