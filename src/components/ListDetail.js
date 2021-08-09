function ListDetail({ list: { id, name, status }, deleteList, updateList, openEditing }) {
  return (
    <>
      <span style={{ cursor: 'pointer' }} onClick={openEditing}>
        {name}
      </span>
      <div className="btn-group">
        <button className="btn btn-outline-info" onClick={() => updateList(id, { id, name, status: !status })}>
          <i className={`bi-toggle2-${status ? 'on' : 'off'}`} />
        </button>
        <button className="btn btn-danger" onClick={() => deleteList(id)}>
          <i className="bi-trash" />
        </button>
      </div>
    </>
  );
}

export default ListDetail;
