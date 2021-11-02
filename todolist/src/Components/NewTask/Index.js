import React, { useEffect, useState } from 'react';
import uuid from 'react-uuid';

const NewTask = (props) => {
  const initial = {
    taskId: null,
    taskName: '',
    taskEr: false,
  };
  const [valueInput, setValueInput] = useState(initial);

  //process Data
  const handleChange = (e) => {
    const { value, name } = e.target;
    // console.log(value, name);
    setValueInput({
      ...valueInput,
      [name]: value,
    });
  };

  // add a task
  const handleAddTask = () => {
    const task = { taskId: uuid(), taskName: valueInput.taskName, taskEr: valueInput.taskEr };
    // const indexOf = valueInput.indexOf(indexOf);
    // console.log(valueInput);
    setValueInput(initial);
    props.emitNewTask(task);
  };
  const handleEditTask = () => {
    props.emitEditTask(valueInput);
    setValueInput(initial);
  };

  useEffect(() => {
    setValueInput(props.task);
  }, [props.task]);

  // render html
  return (
    <div className="addTask">
      <input type="text" name="taskName" value={valueInput.taskName} onChange={handleChange} />
      {/* <input type="text" name="taskId" value={valueInput.taskId} onChange={handleChange} /> */}
      {!valueInput.taskId ? (
        <button type="button" onClick={handleAddTask}>
          Add Task
        </button>
      ) : (
        <button type="button" onClick={handleEditTask}>
          Edit Task
        </button>
      )}
    </div>
  );
};

export default NewTask;
