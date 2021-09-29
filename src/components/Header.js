import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/authContext';

function Header() {
  const { user } = useContext(AuthContext);
  return (
    <nav className="navbar navbar-expand-sm sticky-top navbar-dark bg-success">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand text-black-50 fw-bolder ts-8">
          TODO LIST APP
        </Link>
        <div className="navbar-collapse justify-content-end">
          <ul className="navbar-nav">
            {user ? (
              <>
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    Logout
                  </a>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="nav-link">
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
