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
     switch(action.type) { //做了什么事？
        case "SEARCH_MOVIES_SUCCESS":
            return {
                ...state,
                loading: false,
                movies: action.payload
            }
        default:
            return state
     }
}