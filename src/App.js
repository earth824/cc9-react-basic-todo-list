import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Container from './components/Container';
import Header from './components/Header';
import { AuthContextProvider } from './contexts/authContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Header />
        <Container>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/" component={Home} />
          </Switch>
        </Container>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
