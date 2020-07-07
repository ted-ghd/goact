import React  from 'react';
import { Route } from 'react-router-dom';
import 'App.css';
import { Layout } from 'antd';
import { Home, Phone, HeadMenu } from 'page'
const { Content, Footer } = Layout;

function App() {

  /*
  const [number, setNumber] = useState(0)
  const [name, setName] = useState('');
  const [visible, setVisible] = useState(true)
  useEffect(()=>{
    setName("김태성")
  }, [])
  */

  return (
    <>
      <Layout className="layout">
        <HeadMenu />
        <Content style={{ padding: '0 50px' }}>
            <Route exact path="/" component={Home}/>
            <Route path="/phone" component={Phone}/>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </>
  );
}

export default App;
