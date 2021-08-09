function AddButton(props) {
  return (
    // <div className="mb-4 d-flex justify-content-end" style={{ display: props.isShowAddForm ? 'none' : 'flex' }}>
    <div className="mb-4 d-flex justify-content-end">
      <button className="btn btn-success" onClick={props.showAddForm}>
        <i className="bi-plus-lg" />
      </button>
    </div>
  );
}

export default AddButton;
