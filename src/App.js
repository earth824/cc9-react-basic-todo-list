import './App.css';

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-sm sticky-top navbar-dark bg-success">
        <div className="container-fluid">
          <a href="/" className="navbar-brand text-black-50 fw-bolder ts-8">
            TODO LIST APP
          </a>
          <div className="navbar-collapse justify-content-end">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Logout
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="mw-576 my-4 mx-auto">
          <div class="alert alert-danger">Error Message</div>
          <div className="border shadow p-3 mb-4">
            <form>
              <div className="mb-3">
                <label for="" className="form-label">
                  Email address
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-4">
                <label for="" className="form-label">
                  Password
                </label>
                <input type="password" className="form-control" />
              </div>
              <button type="submit" className="btn btn-success">
                Login
              </button>
            </form>
          </div>

          <div className="py-3 mb-3">
            <form className="flex-fill">
              <div className="input-group has-validation">
                <input type="text" className="form-control is-invalid" placeholder="Enter new todo" />
                <button className="btn btn-primary">
                  <i className="bi-save" />
                </button>

                <div className="invalid-feedback">Error</div>
              </div>
            </form>
          </div>
          <div className="card shadow rounded-0">
            <div className="card-body d-flex justify-content-center bg-warning">
              <span className="text-black-50">1 Task Remaining</span>
            </div>
          </div>
          <div className="card shadow rounded-0 bd-callout bd-callout-success">
            <div className="card-body d-flex justify-content-between align-items-center">
              <span>Task 3</span>
              <div className="btn-group">
                <button className="btn btn-outline-info">
                  <i className="bi-toggle2-on" />
                </button>
                <button className="btn btn-primary">
                  <i className="bi-pencil-square" />
                </button>
                <button className="btn btn-danger">
                  <i className="bi-trash" />
                </button>
              </div>
            </div>
          </div>
          <div className="card shadow rounded-0 bd-callout bd-callout-success">
            <div className="card-body d-flex justify-content-between align-items-center">
              <span>Task 2</span>
              <div className="btn-group">
                <button className="btn btn-outline-info">
                  <i className="bi-toggle2-on" />
                </button>
                <button className="btn btn-primary">
                  <i className="bi-pencil-square" />
                </button>
                <button className="btn btn-danger">
                  <i className="bi-trash" />
                </button>
              </div>
            </div>
          </div>
          <div className="card shadow rounded-0 mb-3 bd-callout bd-callout-warning">
            <div className="card-body d-flex justify-content-between align-items-center">
              <span>Task 1</span>
              <div className="btn-group">
                <button className="btn btn-outline-info">
                  <i className="bi-toggle2-off" />
                </button>
                <button className="btn btn-primary">
                  <i className="bi-pencil-square" />
                </button>
                <button className="btn btn-danger">
                  <i className="bi-trash" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
