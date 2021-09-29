function LoginForm() {
  return (
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
  );
}

export default LoginForm;
