import styles from './CreateTask.module.css'

import Plus from '../assets/plus.svg'

import { ChangeEvent, FormEvent, useState } from 'react'

interface CreateTaskProps {
    onAddTask: (taskContent: string) => void;
}

export function CreateTask({ onAddTask }: CreateTaskProps) {
    const [content, setContent] = useState('')

    function handleSubmit(event: FormEvent) {
        event.preventDefault()

        onAddTask(content)
        setContent('')
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setContent(event.target.value)
    }

    return(
        <form className={styles.container} onSubmit={handleSubmit}>
            <input 
                className={styles.input}
                onChange={handleChange}
                value={content}
                type="text" 
                placeholder='Adicione uma nova tarefa'
                required
            />

            <button 
                className={styles.button} 
                type="submit"
            >
                Criar

                <img src={Plus} alt="Sinal de mais" />
            </button>
        </form>
    )
}