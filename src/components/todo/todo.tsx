import styles from "./Todo.module.css";
import { IoTrash } from "react-icons/io5";
import { HiOutlinePencilAlt } from "react-icons/hi";

interface TodoProps {
    id: string;
    text: string;
    openModal: (id: string, mode: "mod" | "del") => void;
}
export default function Todo({ id, text, openModal }: TodoProps) {
    
    return (
        <li className={styles.todo}>
            <input className="checkbox" type="checkbox" id={id} />
            <label htmlFor={id} className={styles.text}>
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