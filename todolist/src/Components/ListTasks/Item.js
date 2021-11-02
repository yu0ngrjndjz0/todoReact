import React, { useEffect, useState } from 'react';

const Item = (props) => {
  const [item, setItem] = useState({
    taskId: null,
    taskName: null,
    taskEr: false,
  });

  useEffect(() => {
    setItem(props.itemData);
  }, [props.itemData]);

  // const handleDel = () => {
  //   alert(item.id);
  // };

  const handleDel = () => {
    props.emitDelTask(item.taskId);
  };

  const handleEdit = () => {
    props.emitEditTask(item);
  };

  return (
    <div className="listTasks__row">
      <p className="taskName">{item.taskName}</p>
      <button type="button" className="c-btn c-btn__add" onClick={handleEdit}>
        Edit
      </button>
      <button type="button" className="c-btn c-btn__del" onClick={handleDel}>
        Del
      </button>
    </div>
  );
};

export default Item;
