import { useState } from 'react';
import AddButton from './AddButton';
import AddTodoForm from './AddTodoForm';

function AddTodoContainer(props) {
  const [isShowAddForm, setIsShowAddForm] = useState(false);

  const showAddForm = () => {
    setIsShowAddForm(true);
  };

  const closeAddForm = () => {
    setIsShowAddForm(false);
  };

  return (
    <>
      {isShowAddForm ? (
        <AddTodoForm closeAddForm={closeAddForm} addList={props.addList} />
      ) : (
        <AddButton showAddForm={showAddForm} />
      )}
    </>
  );
  // return (
  //   <>
  //     <AddTodoForm closeAddForm={closeAddForm} isShowAddForm={isShowAddForm} />
  //     <AddButton showAddForm={showAddForm} isShowAddForm={isShowAddForm} />
  //   </>
  // );
}

export default AddTodoContainer;
