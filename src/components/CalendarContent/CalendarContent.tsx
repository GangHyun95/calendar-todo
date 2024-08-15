import styles from "./CalendarContent.module.css";
import { useDate } from "../../context/DateContext";

function getMonthDays(year: number, month: number) {
    const days: (number | null)[] = [];
    const date = new Date(year, month, 1);
    const firstDayOfWeek = date.getDay();

    for (let i = 0; i < firstDayOfWeek; i++) {
        days.push(null);
    }

    while (date.getMonth() === month) {
        days.push(date.getDate());
        date.setDate(date.getDate() + 1);
    }
    return days;
}

export default function CalendarContent() {
    const { currentDate, setCurrentDate } = useDate();
    const days = getMonthDays(
        currentDate.getFullYear(),
        currentDate.getMonth(),
    );
    const weekdayHeaders = ["일", "월", "화", "수", "목", "금", "토"];

    const handleDateClick = (day: number | null) => {
        if (day !== null) {
            const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
            setCurrentDate(newDate);
        }
    };

    return (
        <section className={styles["calendar-content"]}>
            <div className={styles["calendar-grid"]}>
                {weekdayHeaders.map((header) => (
                    <div key={header} className={styles["calendar-header"]}>
                        {header}
                    </div>
                ))}
                {days.map((day, index) => (
                    <div
                        key={index}
                        className={`${styles['calendar-day']} ${day === currentDate.getDate() ? styles['selected'] : ""} ${day === null ? styles['null'] : ""}`}
                        onClick={() => handleDateClick(day)}
                    >
                        {day || ""}
                    </div>
                ))}
            </div>
        </section>
    );
}