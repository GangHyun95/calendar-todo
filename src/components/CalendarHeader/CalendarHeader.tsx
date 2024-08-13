import {
    IoMdArrowDropleft,
    IoMdArrowDropright,
    IoIosArrowBack,
    IoIosArrowForward,
} from "react-icons/io";

import styles from "./CalendarHeader.module.css";
import { useDate } from "../../context/DateContext";

export default function CalendarHeader() {
    const { currentDate, setCurrentDate } = useDate();
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const month = monthNames[currentDate.getMonth()];
    const year = currentDate.getFullYear();

    return (
        <header className={styles["calendar-header"]}>
            <nav className={styles["year-nav"]}>
                <IoMdArrowDropleft size="22" />
                <span>{year}</span>
                <IoMdArrowDropright size="22" />
            </nav>
            <nav className={styles["month-nav"]}>
                <IoIosArrowBack size="16" />
                <span>{month}</span>
                <IoIosArrowForward size="16" />
            </nav>
        </header>
    );
}
