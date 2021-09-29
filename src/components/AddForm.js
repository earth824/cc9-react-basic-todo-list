function AddForm() {
  return (
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
  );
}

export default AddForm;
