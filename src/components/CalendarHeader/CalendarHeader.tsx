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
                <IoMdArrowDropleft
                    size="22"
                    onClick={() => handleUpdateDate(-1, "y")}
                />
                <span>{year}</span>
                <IoMdArrowDropright
                    size="22"
                    onClick={() => handleUpdateDate(1, "y")}
                />
            </nav>
            <nav className={styles["month-nav"]}>
                <IoIosArrowBack
                    size="16"
                    onClick={() => handleUpdateDate(-1, "m")}
                />
                <span>{month}</span>
                <IoIosArrowForward
                    size="16"
                    onClick={() => handleUpdateDate(1, "m")}
                />
            </nav>
        </header>
    );
}
