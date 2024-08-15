import { useDate } from '../../context/DateContext';
import Todo from '../todo/todo';
import styles from './TodoContent.module.css'

export default function TodoContent() {
    const { currentDate } = useDate();
    
    const formatDate = (date: Date) => {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const dayDate = date.getDate();
        const dayName = ["일", "월", "화", "수", "목", "금", "토"][date.getDay()];
        return `${year}년 ${month}월 ${dayDate}일 (${dayName})`;
    };

    return (
        <div className={styles['todo-content']}>
            <p className={styles['todo-date-label']}>{formatDate(currentDate)}</p>
            <Todo/>
            <Todo/>
            <Todo/>
            <Todo/>
        </div>
    );
}
