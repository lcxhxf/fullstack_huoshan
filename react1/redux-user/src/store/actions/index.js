// reducer action api 交流
import { useDispatch } from 'react-redux'
import axios from 'axios';
const http = axios.create({
    baseURL: 'https://cnodejs.org/api/v1',
})

function useUser() {
    let dispatch = useDispatch();
    return function(loginname) {
        dispatch({
            type: "user_loading"
        })
        http.get(`/user/${loginname}`).then((res) => {
            console.log(res,'---------');
            dispatch({
                type: "user_loadover",
                data: res.data.data
            })
        })
    }
}

export { useUser }