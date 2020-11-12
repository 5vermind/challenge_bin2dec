import './App.css';
import { Layout, Space } from 'antd';
import ManageConvert from './component/ManageConvert';

const { Header, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Header className="header">binary to decimal</Header>
      <Content className="content">
        <div style={{ paddingTop: 70 }} />
        <Space direction="vertical">
          <ManageConvert />
        </Space>
      </Content>
    </div>
  );
}

export default App;
