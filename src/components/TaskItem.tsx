import { Trash } from "phosphor-react";
import { FunctionComponent } from "react";
import { TaskItemType } from "../@types/types";
import styles from './TaskItem.module.css'
interface TaskItemProps {
  id: number;
  content: string;
  checked?: boolean;
  onDeleteTask: (taskId: number) => void;
  onCheckTask:  (taskId: number) => void;
}
export const TaskItem: FunctionComponent<TaskItemProps> = ({
  id,
  checked,
  content,
  onDeleteTask,
  onCheckTask
}) => {
   function handleDeleteItem(){
        onDeleteTask(id);
    }
    function handleCheckItem(){
        onCheckTask(id)
    }
  return (
    <div className={styles.taskItem}>
        <input className={styles.checkbox} checked={checked} onChange={handleCheckItem} type="checkbox"/>
            <p className={styles.content} >{content}</p>
            <Trash className={styles.deleteItem} onClick={handleDeleteItem} size={24}/>
        </div>
  )
};
