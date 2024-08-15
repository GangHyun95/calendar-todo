import React from "react";
import styles from "./TodoHeader.module.css";
import { GiNotebook } from "react-icons/gi";

export default function TodoHeader() {
    return (
        <div className={styles["todo-header"]}>
            <div className={styles.left}></div>
            <div className={styles.center}>
                <span>Check List</span>
                <GiNotebook />
            </div>
            <div className={styles.right}>
                <button className={styles.button}>
                    <span>New Task</span>
                </button>
            </div>
        </div>
    );
}
