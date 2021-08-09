import List from './List';

function ListContainer({ lists, deleteList, updateList }) {
  return (
    <>
      {lists.map(item => (
        <List key={item.id} list={item} deleteList={deleteList} updateList={updateList} /> // List({ key: item.id, list: item })
        // <List key={item.id} {...item} />
      ))}
    </>
  );
}

export default ListContainer;
