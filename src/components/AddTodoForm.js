import { useState } from 'react';

function AddTodoForm(props) {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleChangeName = e => {
    if (e.target.value === '') {
      setError('Todo list is required');
    } else {
      setError('');
    }
    setName(e.target.value);
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    if (name === '') {
      setError('Todo list is required');
    } else {
      setError('');
      props.addList(name);
      setName('');
      props.closeAddForm();
    }
  };

  return (
    // <div className="border shadow p-3 mb-4" style={{ display: props.isShowAddForm ? 'block' : 'none' }}>
    <div className="border shadow p-3 mb-4">
      <div className="d-flex justify-content-end">
        <button className="btn-close btn-sm text-black-50" onClick={props.closeAddForm}></button>
      </div>
      <form onSubmit={handleSubmitForm}>
        <div className="mt-3 mb-4">
          <input
            type="text"
            className={`form-control form-control-lg${error && ' is-invalid'}`}
            id="todo"
            placeholder="Enter new todo"
            value={name}
            onChange={handleChangeName}
          />
          <div className="invalid-feedback">{error}</div>
        </div>
        <button className="btn btn-secondary">
          <i className="bi-save" />
        </button>
      </form>
    </div>
  );
}

export default AddTodoForm;
