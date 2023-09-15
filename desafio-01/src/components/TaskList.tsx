import { useState } from 'react'
import { Empty } from './Empty'
import { Task } from './Task'

import { TasksProps } from '../App'

import styles from './TaskList.module.css'

interface TasksListProps {
    tasks: TasksProps[]
    onDelete: (taskId: string) => void;
    onDone: (taskId: string) => void;
}

export function TaskList({ tasks, onDelete, onDone }: TasksListProps) {
    const completedTasks = tasks.filter(task => task.isCompleted).length

    return(
        <div className={styles.taskList}>
            <div className={styles.container}>
                <div className={styles.taskStatus}>
                    <p className={styles.taskCreated}>Tarefas Criadas</p>
                    <p className={styles.count}>{tasks.length}</p>
                </div>

                <div className={styles.taskStatus}>
                    <p className={styles.taskMaked}>Concluídas</p>
                    <p className={styles.count}>{completedTasks} de {tasks.length}</p>
                </div>
            </div>

            <div>
                {tasks.map(task => {
                    return(
                        <Task 
                            key={task.id}
                            task={task} 
                            onDelete={onDelete}
                            onDone={onDone}
                        />
                    )
                })}

                {tasks.length <= 0 && (
                    <Empty />
                )}
            </div>
        </div>


    )
}