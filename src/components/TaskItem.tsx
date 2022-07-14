import { Trash } from "phosphor-react";
import { FunctionComponent } from "react";
import { TaskItemType } from "../@types/types";
import styles from './TaskItem.module.css'
import {CustomCheckbox} from './CustomCheckbox'
interface TaskItemProps {
  id: string;
  content: string;
  checked?: boolean;
  onDeleteTask: (taskId: string) => void;
  onCheckTask:  (taskId: string) => void;
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
        <CustomCheckbox label={''} checked={checked} onChange={handleCheckItem}/>
        <input className={styles.checkbox} checked={checked} onChange={handleCheckItem} type="checkbox"/>
            <p className={`${styles.content } ${checked&& styles.taskChecked}`} >{content}</p>
            <Trash className={styles.deleteItem} onClick={handleDeleteItem} size={24}/>
        </div>
  )
};
