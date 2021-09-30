import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';

const route = {
  user: {
    route: [
      {
        path: '/',
        component: Home
      }
    ],
    redirect: '/'
  },
  guest: {
    route: [
      {
        path: '/login',
        component: Login
      },
      {
        path: '/register',
        component: Register
      }
    ],
    redirect: '/login'
  }
};

export default route;
