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

    const handleUpdateDate = (value: number, type: "m" | "y") => {
        const newDate = new Date(currentDate);
        if (type === "y") {
            newDate.setFullYear(currentDate.getFullYear() + value);
        } else if (type === "m") {
            newDate.setMonth(currentDate.getMonth() + value);
        }
        setCurrentDate(newDate);
    };

    return (
        <header className={styles["calendar-header"]}>
            <nav className={styles["year-nav"]}>
                <button
                    className={styles["btn-year"]}
                    onClick={() => handleUpdateDate(-1, "y")}
                >
                    <IoMdArrowDropleft />
                </button>
                <span>{year}</span>
                <button
                    className={styles["btn-year"]}
                    onClick={() => handleUpdateDate(1, "y")}
                >
                    <IoMdArrowDropright />
                </button>
            </nav>
            <nav className={styles["month-nav"]}>
                <button
                    className={styles["btn-month"]}
                    onClick={() => handleUpdateDate(-1, "m")}
                >
                    <IoIosArrowBack />
                </button>
                <span className={styles["month-text"]}>{month}</span>
                <button
                    className={styles["btn-month"]}
                    onClick={() => handleUpdateDate(1, "m")}
                >
                    <IoIosArrowForward />
                </button>
            </nav>
        </header>
    );
}
