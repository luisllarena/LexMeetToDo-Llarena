import styles from './task.module.css';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { TbTrash } from 'react-icons/tb';
import { AiOutlineEdit, AiOutlineSave } from 'react-icons/ai';
import { useState } from 'react'; 

export function Task({ task, onDelete, onComplete, onEdit, onSave }) {

  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    console.log("Save button clicked");
    onSave(task.id, editedTitle);
    setIsEditing(false);
  };

  const handleInputChange = (event) => {
    setEditedTitle(event.target.value);
  };




  

  return (
    <div className={styles.task}>
      <button className={styles.checkContainer} onClick={() => onComplete(task.id)}>
        {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </button>


      {isEditing ? (
        <input
          className={styles.editInput}
          type="text"
          value={editedTitle}
          onChange={handleInputChange}
        />
      ) : (

      <p className={task.isCompleted ? styles.textCompleted : ""}>
        {task.title}
      </p>

      )}

      {isEditing ? (
        <button className={styles.saveButton} onClick={handleSaveClick}>
          <AiOutlineSave size={20} />
        </button>
      ) : (
      <>
      <button className={styles.editButton} onClick={handleEditClick}>
            <AiOutlineEdit size={20} />
          </button>
      <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
        <TbTrash size={20} />
      </button>
      </>
      )}
    </div>
  );
}