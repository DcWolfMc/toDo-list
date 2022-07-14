import styles from "./Task.module.css";
import { v4 as uuidv4 } from 'uuid';
import Clipboard from "../assets/Clipboard.svg";
import { PlusCircle } from "phosphor-react";
import { FormEvent, useState } from "react";
import { TaskItemType } from "../@types/types";
import { TaskItem } from "./TaskItem";
export const Task = () => {
  const [newTask, setNewTask] = useState<string>("");
  const [taskList, setTaskList] = useState<TaskItemType[]>([]);
  const taskCount = taskList.length
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    let newTaskItem:TaskItemType = {
      id: uuidv4(),
      content: newTask,
      checked: false,
      
    }
    setTaskList([newTaskItem, ...taskList,])
    setNewTask("");
  }
  function handleCheckTask(taskId:string) {
    let taskToCheck:TaskItemType = taskList.find((task)=>task.id==taskId)!
    let taskIndex = taskList.indexOf(taskToCheck)
    let taskChecked = {...taskToCheck, checked: !taskToCheck?.checked}
    setTaskList((prev) => [...prev.slice(0,taskIndex), taskChecked, ...prev.slice(taskIndex + 1)])
    console.log(taskChecked);
    
  }
  function handleDeleteTask(taskId:string) {
    let taskListWithoutDeleted = taskList.filter((task)=>{
      return task.id !== taskId
    })
    setTaskList(taskListWithoutDeleted)
    
  }
  const doneTaskList = taskList.filter((task)=>task.checked);
  return (
    <div className={styles.task}>
      <div className={styles.newTask}>
        <form onSubmit={handleSubmit}>
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className={styles.newTaskInput}
            placeholder="Adicione uma nova tarefa"
            type="text"
            required
          />
          <button className={styles.newTaskBtn}>
            Criar <PlusCircle size={20} />
          </button>
        </form>
      </div>

      <div className={styles.taskBox}>
        <div className={styles.taskInfo}>
          <div className={styles.created}>
            <strong>Tarefas criadas</strong>
            <div className={styles.count}>{taskCount}</div>
          </div>
          <div className={styles.done}>
            <strong>Concluídas</strong>
            {taskCount == 0?(
              <div className={styles.count}>0</div>
            ):( <div className={styles.count}> {doneTaskList.length}  de {taskCount}</div>)/*condicional do 'de'*/}
            
          </div>
        </div>
        {taskList.length >0 ? (
          <div className={styles.taskItemList}>
            {taskList.map((task)=>{
              return(<TaskItem checked={task.checked} onCheckTask={handleCheckTask} onDeleteTask={handleDeleteTask} id={task.id} key={task.id} content={task.content}/>)
            })}
          </div>
        ) : (
          <div className={styles.emptyList}>
            <img src={Clipboard} />
            <div>
              <p>
                <strong>Você ainda não tem tarefas cadastradas </strong>
              </p>
              <p>Crie tarefas e organize seus itens a fazer </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
