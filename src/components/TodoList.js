import TodoItem from './TodoItem';

function TodoList() {
  return (
    <>
      <div className="card shadow rounded-0">
        <div className="card-body d-flex justify-content-center bg-warning">
          <span className="text-black-50">1 Task Remaining</span>
        </div>
      </div>
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </>
  );
}

export default TodoList;
