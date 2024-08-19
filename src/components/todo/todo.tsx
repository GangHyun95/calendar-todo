import React from 'react';
import { useTodos } from "../../context/TodoContext";
import styles from "./Todo.module.css";
import { IoTrash } from "react-icons/io5";
import { HiOutlinePencilAlt } from "react-icons/hi";

interface TodoProps {
    id: string;
    text: string;
    completed: boolean;
    openModal: (id: string, mode: "mod" | "del") => void;
}

export default function Todo({ id, text, completed, openModal }: TodoProps) {
    const { todos, setTodos } = useTodos();

    const toggleCompleted = (id: string) => {
        const updatedTodos = { ...todos };
        for (const date in updatedTodos) {
            updatedTodos[date] = updatedTodos[date].map(todo => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo;
            });
        }

        setTodos(updatedTodos);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    };

    return (
        <li className={styles.todo}>
            <input
                type="checkbox"
                className={styles.checkbox}
                checked={completed}
                onChange={() => toggleCompleted(id)}
                id={id}
            />
            <label
                htmlFor={id}
                className={`${styles.text} ${completed ? styles.completed : ''}`}
            >
                {text}
            </label>
            <div className={styles.wrap}>
                <button className={styles.button} onClick={() => openModal(id, "mod")}>
                    <HiOutlinePencilAlt/>
                </button>
                <button className={styles.button} onClick={() => openModal(id, "del")}>
                    <IoTrash />
                </button>
            </div>
        </li>
    );
}