import React, { useEffect, useState } from 'react';
import Item from './Item';
import { sortByAB } from '../../ultil/helper';

const ListTasks = (props) => {
  const [listTask, setListTask] = useState([]);

  useEffect(() => {
    setListTask(props.listData);
  }, [props.listData]);

  const delTask = (id) => {
    // console.log(id, listTask);
    const listDel = listTask.filter((item) => item.taskId !== id);
    console.log('del', listDel);
    console.log('Origin', listTask);
    localStorage.setItem('listTask', JSON.stringify(listDel));
    props.setList(listDel);
  };
  const editTask = (eml) => {
    // console.log(eml);
    props.setValue(eml);
  };
  const reserveList = () => {
    const listTemp = [...listTask];
    const listRev = listTemp.reverse();
    props.setList(listRev);
    // console.log('done', listRev);
  };

  const sort = () => {
    const listTemp = [...listTask];

    const listSort = sortByAB(listTemp, 'taskName');

    console.log(listSort);

    props.setList(listSort);
  };

  return (
    <div className="listTasks">
      {listTask.map((item, index) => (
        <Item key={index} itemData={item} emitDelTask={delTask} emitEditTask={editTask} />
      ))}
      <button onClick={reserveList}>reserve List</button>
      <button onClick={sort}>sort List</button>
    </div>
  );
};

export default ListTasks;
