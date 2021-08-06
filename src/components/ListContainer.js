import List from './List';

function ListContainer({ lists }) {
  return (
    <>
      {lists.map(item => (
        <List key={item.id} list={item} /> // List({ key: item.id, list: item })
        // <List key={item.id} {...item} />
      ))}
    </>
  );
}

export default ListContainer;
