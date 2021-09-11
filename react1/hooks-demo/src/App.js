import logo from './logo.svg';
// import { MyComponent, SecondComponent} from './demo'
//TODO import MyComponent, {SecondComponent} from './demo';
// import * as CustomComponent from './demo'
import './App.css';
import {Top,Tab,IconStyle, GlobalStyle,TabItem} from './style';

function App() {
  return (
    <div className="App">
      {/* <CustomComponent.MyComponent />
      <CustomComponent.SecondComponent /> */}
      {/*TODO <MyComponent/>
      <SecondComponent/> */}
      <IconStyle/>
      <GlobalStyle/>
      <Top>
        <span className="iconfont menu">&#xe65c;</span>
        <span className="title">WebApp</span>
        <span className="iconfont search">&#xe62b;</span>
      </Top>
      <Tab>
        <a href="/recommend"><TabItem><span>推荐</span></TabItem></a>
        <a href="/recommend"><TabItem><span>歌手</span></TabItem></a>
        <a href="/recommend"><TabItem><span>排行榜</span></TabItem></a>
      </Tab>
    </div>
  );
}

export default App;
