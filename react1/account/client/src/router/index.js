import Home from '@/views/Home';
import Data from '@/views/Data';
import Me from '@/views/Me';
import About from '../views/About';
import Login from '../views/Login';

const routes = [{
        path: '/',
        component: Home
    },
    {
        path: '/data',
        component: Data
    },
    {
        path: '/user',
        component: Me
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/login',
        component: Login
    }
]

export default routes