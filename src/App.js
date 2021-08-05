import './App.css';

function App() {
  return (
    <div className="container">
      <div className="mw-576 my-4 mx-auto">
        <div className="mb-4 d-flex justify-content-end">
          <button className="btn btn-success">
            <i className="bi-plus-lg" />
          </button>
        </div>
        <div className="border shadow p-3 mb-4">
          <div className="d-flex justify-content-end">
            <button className="btn-close btn-sm text-black-50"></button>
          </div>
          <form>
            <div className="mt-3 mb-4">
              <input
                type="text"
                className="form-control form-control-lg is-invalid"
                id="todo"
                placeholder="Enter new todo"
              />
              <div className="invalid-feedback">Required</div>
            </div>
            <button className="btn btn-secondary">
              <i className="bi-save" />
            </button>
          </form>
        </div>
        <div className="alert alert-danger text-center">1 Task Remaining</div>
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
  );
}

export default App;
