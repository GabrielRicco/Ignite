import styles from './Task.module.css'

import { Trash, CheckCircle } from 'phosphor-react'

import { TasksProps } from '../App'

interface TaskProps {
    task: TasksProps;
    onDelete: (taskId: string) => void
    onDone: (taskId: string) => void
}

export function Task({ task, onDelete, onDone }: TaskProps) {
    return(
        <div className={styles.container}>
            <button className={styles.check} onClick={() => onDone(task.id)}>
                {task.isCompleted ? <CheckCircle className={styles.checkCompleted} />  : <div />}
            </button>

            <p className={task.isCompleted ? styles.contentCompleted : styles.content}>
                {task.content}         
            </p>

            <Trash 
                className={styles.trash} 
                size={20}
                onClick={() => onDelete(task.id)}
            />
        </div>
    )
}