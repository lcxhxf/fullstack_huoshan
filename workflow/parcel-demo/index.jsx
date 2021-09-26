import React from 'react';
import ReactDOM from 'react-dom';
// import 'antd/dist/antd.css'; // 这里不引入在index.html用link引入也行
import { routes } from './router/index';
import Header from './component/header';
import {
    Layout
} from 'antd';
// react-router-dom 提供了一系列的组件，react组件化非常完美
import { 
    Link,
    BrowserRouter as Router, 
    Switch, 
    Route,
    Redirect,
    useHistory,
    useParams,
    useLocation
} from 'react-router-dom'
// document.createElement('div')
const App = () => {
    return (
        <Router>
            <Layout className="page">
                <Header/>
                <Layout.Content>
                    <div className="wrap">
                        <Switch>
                            {/* <Router to='/' exact component> */}
                            {
                                routes.map((route, index) => {
                                    return (
                                        <Route
                                            key={index}
                                            path={route.path}
                                            exact={route.exact}
                                            render={(props) => {
                                                return route.render(props)
                                            }}
                                        >

                                        </Route>
                                    )
                                })
                            }
                        </Switch>
                    </div>
                </Layout.Content>
            </Layout>
        </Router>
    )
}

const Home = () => (
    <>
        <h1>Home</h1>
        <LttText />
    </>
)

const About = ( // 多重解构{match: {params: {name}}}
    ) => {
    // console.log(name, '--------');
    const { name } = useParams(); // 代替多重解构
    const history = useHistory(); // hooks 函数
    const { pathname } = useLocation();
    // console.log(name, history, pathname);
    return (
        <>
            {/*做登录的时候可以用 路由守卫 */}
            {name !== 'Ltt'?<Redirect to='/' /> : null}
            <h1>About: {name}</h1>
            <Button type="primary">按钮</Button>
            <button onClick={() => history.push("/")}>Go home</button>
            <LttText />
        </>
    )
}


const Concat = () => (
    <>
        <h1>Concat</h1>
        <LttText />
    </>
)

const LttText = () => (
    <p>
        Ltt nb!
    </p>
)

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
