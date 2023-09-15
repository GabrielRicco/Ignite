import { Header } from './components/Header'
import { CreateTask } from './components/CreateTask'
import { TaskList } from './components/TaskList'

import './global.css'
import styles from './App.module.css'

import { useState } from 'react'

export interface TasksProps {
  id: string;
  content: string;
  isCompleted: boolean;
}

export function App() {
  const [ tasks, setTasks ] = useState<TasksProps[]>([])

  function addTask(taskContent: string) {
    setTasks([...tasks, {
      id: crypto.randomUUID(),
      content: taskContent,
      isCompleted: false,
    }])
  }

  function deleteTask(taskId: string) {
    const newTasks = tasks.filter(task => task.id != taskId)
    setTasks(newTasks)
  }

  function toggleTaskCompleted(taskId: string) {
    const newTasks = tasks.map(task => {
      if(task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task
    })

    setTasks(newTasks)
  }

  return (
    <div>
      <Header />

      <div className={styles.container}>
          <CreateTask 
            onAddTask={addTask}
          />
          <TaskList
            tasks={tasks}
            onDelete={deleteTask}
            onDone={toggleTaskCompleted}
          />
      </div>
    </div>
  )
}
