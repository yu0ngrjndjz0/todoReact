import React, { useState } from 'react';
import ListTasks from './Components/ListTasks/Index';
import NewTask from './Components/NewTask/Index';

const App = () => {
  const localList = localStorage.getItem('listTask') ? JSON.parse(localStorage.getItem('listTask')) : [];

  // console.log(localList);
  const [error, setError] = useState(false);
  const [list, setList] = useState(localList);
  const [valueInput, setValueInput] = useState({
    taskId: null,
    taskName: '',
    taskEr: false,
  });
  const addTaskOfApp = (data) => {
    // console.log('In App', data);
    // const abc = list.push(data);
    const newList = [...list];
    if (!data.taskEr && data.taskName !== '') {
      newList.push(data);
      localStorage.setItem('listTask', JSON.stringify(newList));
      setList(newList);
      setError(false);
    } else {
      setError('Task name is not empty!');
    }
  };
  const editTaskOfApp = (data) => {
    const newList = [...list];
    if (data.taskName !== '') {
      newList.forEach((el) => {
        if (el.taskId === data.taskId) {
          el.taskName = data.taskName;
        }
      });
      localStorage.setItem('listTask', JSON.stringify(newList));
      setList(newList);
      setError(false);
    } else {
      setError('Task name is not empty!');
    }
  };
  const styleError = {
    color: '#ff0000',
  };

  return (
    <div className="App">
      <NewTask emitNewTask={addTaskOfApp} emitEditTask={editTaskOfApp} task={valueInput} />
      {error && <p style={styleError}>{error}</p>}
      <ListTasks listData={list} setList={setList} setValue={setValueInput} setValueRev={setValueInput} />
    </div>
  );
};

export default App;
