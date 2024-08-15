import React, { useEffect, useState } from "react";
import styles from "./TodoHeader.module.css";
import { GiNotebook } from "react-icons/gi";
import Modal from "../Modal/Modal";
import { useDate } from "../../context/DateContext";

export default function TodoHeader() {
    const [isModalOpen, setModalOpen] = useState<boolean>(false);
    const { currentDate } = useDate();
    const [taskDate, setTaskDate] = useState(
        currentDate.toISOString().split("T")[0]
    );

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    function formatDate(date: Date) {
        return new Date(date.getTime() - date.getTimezoneOffset() * 60000)
            .toISOString()
            .split("T")[0];
    }
    useEffect(() => {
        setTaskDate(formatDate(currentDate));
    }, [currentDate]);

    return (
        <div className={styles["todo-header"]}>
            <div className={styles.left}></div>
            <div className={styles.center}>
                <span>Check List</span>
                <GiNotebook />
            </div>
            <div className={styles.right}>
                <button className={styles.button} onClick={openModal}>
                    <span>New Task</span>
                </button>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal} header="추가하기">
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
                        rows={4}
                        placeholder="할 일을 입력 해 주세요."
                    ></textarea>
                </div>
                <div className={styles["button-wrap"]}>
                    <button onClick={closeModal}>추가</button>
                    <button onClick={closeModal}>취소</button>
                </div>
            </Modal>
        </div>
    );
}
