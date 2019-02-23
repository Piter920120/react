import React from 'react';

const TaskListItem = ({ isDone, isEditing, taskTitle}) => {

  const className = isDone ? 'completed' : isEditing ? 'editing' : '';

  return (
    <li className={className}>
      <div className="view">
        <input className="toggle" type="checkbox" defaultChecked={isDone} />
        <label>{taskTitle}</label>
        <button className="destroy" />
      </div>
      <input className="edit" defaultValue={taskTitle} />
    </li>
  );
};

export default TaskListItem;