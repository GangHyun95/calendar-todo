import { useDate } from "../../context/DateContext";
import styles from "./TodoContent.module.css";
import { useTodos } from "../../context/TodoContext";
import Todo from "../todo/Todo";
import { formatISODate } from "../../utils";

export default function TodoContent() {
    const { currentDate } = useDate();
    const { todos } = useTodos();

    const formattedDate = formatISODate(currentDate);
    const dailyTodos = todos[formattedDate] || [];

    const formatDate = (date: Date) => {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const dayDate = date.getDate();
        const dayName = ["일", "월", "화", "수", "목", "금", "토"][
            date.getDay()
        ];
        return `${year}년 ${month}월 ${dayDate}일 (${dayName})`;
    };

    return (
        <div className={styles["todo-content"]}>
            <p className={styles["todo-date-label"]}>
                {formatDate(currentDate)}
            </p>
            {dailyTodos.length > 0 ? (
                dailyTodos.map((todo) => <Todo key={todo.id} id={todo.id} text={todo.text} />)
            ) : (
                <p>할 일이 없습니다.</p>
            )}
        </div>
    );
}
