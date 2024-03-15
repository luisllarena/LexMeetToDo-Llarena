import todoLogo from '../../assets/lexmeet_logo.svg';
import styles from './header.module.css';
import { useState } from 'react';

export function Header({ handleAddTask }) {
  const [title, setTitle] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    handleAddTask(title);
    setTitle('');
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
      <img src={todoLogo} />

      <div className={styles.bigText}>
        <text>To Do List</text>
      </div>

      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input placeholder="Please add a new task 😊" type="text" onChange={onChangeTitle} value={title} />
        <button>Create!  </button>
      </form>
    </header>
  )
}