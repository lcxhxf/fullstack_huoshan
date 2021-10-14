import { createStore, combineReducers } from 'redux';
import  user  from './reducers/user'

//     store
// topics user comments 

// 创建一个状态仓库，数据从本地来到中央了
export default createStore(
    combineReducers({
        // topics,
        user,
        // comments
    })
)