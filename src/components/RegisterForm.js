function RegisterForm() {
  return (
    <div className="border shadow p-3 mb-4">
      <form>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="text" className="form-control" placeholder="Email address" />
        </div>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input type="text" className="form-control" placeholder="Username" />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" placeholder="Password" />
        </div>
        <div className="mb-4">
          <label className="form-label">Confirm password</label>
          <input type="password" className="form-control" placeholder="Confirm password" />
        </div>
        <button type="submit" className="btn btn-success">
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
