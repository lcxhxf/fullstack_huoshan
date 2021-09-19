import { useEffect, useReducer } from 'react';
import './App.css'
import { reducer, initialState } from './store/reducer';
const App = () => {

  // 与中央 store 联系
  // 使用useReducer跟外界联系起来
  // 使用useEffect去请求api
  // 使用js把模板需要的数据准备出来 loading movies
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state,'+++++');
  console.log(dispatch);
  // 组件函数 必须返回JSX
  // 可以把HTML(XML) 再js里写出来
  return (
    <div className="App">
      {/* {loading?'1':'2'} */}
    </div>
  )
};

export default App;