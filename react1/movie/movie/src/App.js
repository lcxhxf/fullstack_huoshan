import { useEffect, useReducer } from 'react';
import './App.css'
import { reducer, initialState } from './store/reducer';
import Movie from './components/Movie';
import Search from './components/Search';
import axios from 'axios';
import spinner from './assets/ajax-loader.gif'
const App = () => {

  // 与中央 store 联系
  // 使用useReducer跟外界联系起来
  // 使用useEffect去请求api
  // 使用js把模板需要的数据准备出来 loading movies
  const [state, dispatch] = useReducer(reducer, initialState)
  // console.log(state, '+++++');
  // console.log(dispatch);
  const { loading, movies, errorMessage } = state;
  // 组件函数 必须返回JSX
  // 可以把HTML(XML) 再js里写出来
  useEffect(() => {
    axios
      .get('http://www.omdbapi.com/?s=man&apikey=4a3b711b')
      .then(res => {
        let payload = res.data.Search;
        dispatch({
          type: 'lllllll',
          payload
        })
      })
    // dispatch({
    //   type:'lllllll',
    //   payload:[]
    // })
  }, [])
  // console.log(movies,'_________');

  const search =searchValue => {
    dispatch({
      type: 'dddddddd',
    })
    axios
    .get(`http://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
    .then(res => {
      if(res.data.Error) {
        dispatch({
          type: 'cccccccc',
          payload:res.data.Error
        })
        return;
      }
      console.log(res);
      let payload = res.data.Search;
      dispatch({
        type: 'lllllll',
        payload
      })
    })
  }
  return (
    <div className="App">
      <Search search={search}/>
      {loading ? <img src={spinner} className="spinner" 
      alt="Loading spinner" />:''}
      {movies.length?
        <div className="movies" >
        { 
          movies.map((movie, index) => <Movie movie={movie} key={index}/>)
        }
      </div>
      :<p>{errorMessage}</p>
      }
      
    </div>
  )
};

export default App;