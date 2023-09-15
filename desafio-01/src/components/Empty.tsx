import styles from './Empty.module.css'

import Clipboard from '../assets/Clipboard.svg'

export function Empty() {
    return(
        <div className={styles.container}>
            <img src={Clipboard} alt="Livro" />
            <div className={styles.content}>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>
                    Crie tarefas e organize seus itens a fazer
                </p>
            </div>
        </div>
    )
}