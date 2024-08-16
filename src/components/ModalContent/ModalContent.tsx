import React, { useEffect, useState } from "react";
import { useDate } from "../../context/DateContext";
import { formatISODate } from "../../utils";
import styles from './ModalContent.module.css'
import { useTodos } from "../../context/TodoContext";
import { TodoItem } from "../../types";

interface ModalContenetProps {
    onClose: () => void;
    mode: "add" | "mod" | "del";
}
export default function ModalContent({ onClose, mode }: ModalContenetProps) {
    const { currentDate, setCurrentDate } = useDate();
    const { todos, setTodos } = useTodos();
    const [taskText, setTaskText] = useState("");
    const [taskDate, setTaskDate] = useState(
        currentDate.toISOString().split("T")[0]
    );

    useEffect(() => {
        setTaskDate(formatISODate(currentDate));
    }, [currentDate]);

    const saveTodo = (date: string, newTodo: TodoItem) => {
        const updatedTodos = {
            ...todos,
            [date]: [...(todos[date] || []), newTodo],
        };
        setTodos(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
    };

    const handleAddTodo = (date: string, text: string) => {
        saveTodo(date, {
            id: Date.now().toString(),
            text: text,
            completed: false,
            date: date,
        });
        onClose();
        const newDate = new Date(date);
        setCurrentDate(newDate);
    };

    return (
        <>
            <div>
                <input
                    type="date"
                    className={styles.date}
                    id="task-date"
                    name="task-date"
                    value={taskDate}
                    onChange={(e) => setTaskDate(e.target.value)}
                />
            </div>
            <div>
                <textarea
                    id="task-text"
                    className={styles.text}
                    name="task-text"
                    value={taskText}
                    onChange={(e) => setTaskText(e.target.value)}
                    rows={4}
                    placeholder="할 일을 입력 해 주세요."
                ></textarea>
            </div>
            <div className={styles["button-wrap"]}>
                <button onClick={() => handleAddTodo(taskDate, taskText)}>
                    추가
                </button>
                <button onClick={onClose}>취소</button>
            </div>
        </>
    );
}