import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";

const LOCAL_STORAGE_KEY = 'todo:tasks';

function App() {
  const [tasks, setTasks] = useState([]);

  function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(saved) {
      setTasks(JSON.parse(saved));
    }
  }

  function setTasksAndSave(newTasks) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  useEffect(() => {
    loadSavedTasks();
  }, [])

  function addTask(taskTitle) {
    setTasksAndSave([...tasks, {
      id: crypto.randomUUID(),
      title: taskTitle,
      isCompleted: false
    }]);
  }

  function deleteTaskById(taskId) {
    if (window.confirm("Do you want to delete this task?")){
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasksAndSave(newTasks);
    }
  }

  function toggleTaskCompletedById(taskId) {
    const newTasks = tasks.map(task => {
      if(task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task;
    });
    setTasksAndSave(newTasks);
  }

  function deleteAllTasks() {
    if (window.confirm("Are you sure to delete all the task?")){
    setTasksAndSave([]);
    }
  }

  function markAllTasksDone() {
    const newTasks = tasks.map(task => ({
      ...task,
      isCompleted: true,
    }));
    setTasksAndSave(newTasks);
  }






  function editTaskById(taskId, newTitle) {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          title: newTitle,
        };
      }
      return task;
    });
    setTasksAndSave(newTasks);
  }

  function onSaveTask(taskId, newTitle) {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          title: newTitle,
        };
      }
      return task;
    });
  
    setTasksAndSave(updatedTasks);
  }









  return (
    <>
      <Header handleAddTask={addTask} />
      <Tasks
        tasks={tasks}
        onDelete={deleteTaskById}
        onComplete={toggleTaskCompletedById}
        onDeleteAll={deleteAllTasks}
        onMarkAllDone={markAllTasksDone}
        onEdit={editTaskById}
        onSave={onSaveTask}
      />
    </>
  )
}

export default App
