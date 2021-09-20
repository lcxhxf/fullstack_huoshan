// 自建设数据中心
// 共同富裕
// store 就是数据仓库

export const initialState = {
    loading: true,
    movies: [],
    errorMessage: null
}
// reducer 函数 state action
export const reducer = (state, action) => {
    // console.log(action, '+++++++++');
     switch(action.type) { //做了什么事？
        case "lllllll":
            return {
                ...state,
                loading: false,
                movies: action.payload
            }
        case "cccccccc":
        return {
            ...state,
            movies: [],
            loading: false,
            errorMessage: action.payload
        }
        case "dddddddd":
        return {
            ...state,
            movies: [],
            loading: true
        }
        default:
            return state
     }
}