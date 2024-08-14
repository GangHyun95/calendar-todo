import React from "react";
import styles from "./TodoHeader.module.css";
import { GiNotebook } from "react-icons/gi";

export default function TodoHeader() {
    return (
        <div className={styles["todo-header"]}>
            <span>Check List</span>
            <GiNotebook />
        </div>
    );
}
