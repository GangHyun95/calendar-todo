import Todo from '../todo/todo';
import styles from './TodoContent.module.css'

export default function TodoContent() {
    return (
        <div className={styles['todo-content']}>
            <p className={styles['todo-date-label']}>2024년 8월 14일 (수)</p>
            <Todo/>
            <Todo/>
            <Todo/>
            <Todo/>
        </div>
    );
}

