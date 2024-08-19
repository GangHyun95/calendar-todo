import React, { useEffect, useState } from "react";
import { useDate } from "../../context/DateContext";
import { formatISODate } from "../../utils";
import styles from "./ModalContent.module.css";
import { useTodos } from "../../context/TodoContext";
import { TodoItem } from "../../types";

interface ModalContentProps {
    onClose: () => void;
    mode: "add" | "mod" | "del";
    todoId?: string | null;
}

export default function ModalContent({
    onClose,
    mode,
    todoId,
}: ModalContentProps) {
    const { currentDate, setCurrentDate } = useDate();
    const { todos, setTodos } = useTodos();
    const [taskText, setTaskText] = useState("");
    const [taskDate, setTaskDate] = useState(formatISODate(currentDate));

    useEffect(() => {
        if ((mode === "mod" || mode === "del") && todoId) {
            const allTodos = Object.values(todos).flat();
            const todoToModify = allTodos.find((todo) => todo.id === todoId);
            console.log(todoToModify);
            if (todoToModify) {
                setTaskText(todoToModify.text);
                setTaskDate(todoToModify.date);
            }
        }
    }, [mode, todoId, todos]);

    const handleAddOrUpdateTodo = () => {
        if (mode === "del" && todoId) {
            Object.keys(todos).forEach((date) => {
                todos[date] = todos[date].filter((todo) => todo.id !== todoId);
                if (todos[date].length === 0) {
                    delete todos[date];
                }
            });
    
            setTodos({ ...todos });
            localStorage.setItem("todos", JSON.stringify(todos));
            onClose();
            return;
        }
    
        const newTodo: TodoItem = {
            id: todoId || Date.now().toString(),
            text: taskText,
            date: taskDate,
            completed: false,
        };
    
        if (mode === "mod" && todoId) {
            Object.keys(todos).forEach((date) => {
                todos[date] = todos[date].filter((todo) => todo.id !== todoId);
                if (todos[date].length === 0) {
                    delete todos[date];
                }
            });
        }
    
        todos[taskDate] = [...(todos[taskDate] || []), newTodo];
        
        setTodos({ ...todos });
        localStorage.setItem("todos", JSON.stringify(todos));
        setCurrentDate(new Date(taskDate));
        onClose();
    };
    

    return (
        <>
            {mode !== "del" ? (
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
                </>
            ) : (
                <div className={styles["confirmation-text"]}>
                    <p>
                        <strong>{taskDate}</strong>
                    </p>
                    <p className={styles["task-highlight"]}>{taskText}</p>
                    <hr />
                    <p>이 할 일을 정말로 삭제하시겠습니까?</p>
                </div>
            )}
            <div className={styles["button-wrap"]}>
                <button onClick={handleAddOrUpdateTodo}>
                    {mode === "add" ? "추가" : mode === "mod" ? "수정" : "삭제"}
                </button>
                <button onClick={onClose}>취소</button>
            </div>
        </>
    );
}