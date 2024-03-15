import { Task } from '../Task';
import styles from './tasks.module.css';

export function Tasks({ tasks, onDelete, onComplete, onDeleteAll, onMarkAllDone, onSave}) {
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter(task => task.isCompleted).length;

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Created tasks</p>
          <span>{tasksQuantity}</span>
        </div>

        <div>
          <p className={styles.textOrange}>Completed tasks</p>
          <span>{completedTasks} of {tasksQuantity}</span>



          <button className={styles.deleteAllButton} onClick={onDeleteAll}>
          Delete All
        </button>

        <button className={styles.markAllDoneButton} onClick={onMarkAllDone}>
          Mark All Done
        </button>



        </div>
      </header>

      <div className={styles.list}>
        {tasks.map((task) => (
          <Task key={task.id} task={task} onDelete={onDelete} onComplete={onComplete} onSave={onSave}/>
        ))}
      </div>
    </section>
  )
}