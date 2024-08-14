import styles from "./Todo.module.css";
import { IoTrash } from "react-icons/io5";

export default function Todo() {
    return (
        <li className={styles.todo}>
            <input className="checkbox" type="checkbox" id="temp" />
            <label htmlFor="temp" className={styles.text}>
                공부
            </label>
            <span className={styles.icon}>
                <button className={styles.button}>
                    <IoTrash />
                </button>
            </span>
        </li>
    );
}
