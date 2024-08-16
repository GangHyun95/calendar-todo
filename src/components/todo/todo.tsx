import styles from "./Todo.module.css";
import { IoTrash } from "react-icons/io5";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { useState } from "react";
import Modal from "../Modal/Modal";
import ModalContent from "../ModalContent/ModalContent";

export default function Todo({ id, text }: { id: string; text: string }) {
    const [isModalOpen, setModalOpen] = useState<boolean>(false);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
    
    return (
        <li className={styles.todo}>
            <input className="checkbox" type="checkbox" id={id} />
            <label htmlFor={id} className={styles.text}>
                {text}
            </label>
            <div className={styles.wrap}>
                <button className={styles.button}>
                    <HiOutlinePencilAlt onClick={openModal}/>
                </button>
                <button className={styles.button}>
                    <IoTrash />
                </button>
            </div>

            <Modal isOpen={isModalOpen} onClose={closeModal} header="수정하기">
                <ModalContent onClose={closeModal} mode="mod"/>
            </Modal>
        </li>
    );
}
