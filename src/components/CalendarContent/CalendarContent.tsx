import styles from "./CalendarContent.module.css";
import { useDate } from "../../context/DateContext";

function getMonthDays(month: number, year: number) {
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
    const { currentDate } = useDate();
    const days = getMonthDays(
        currentDate.getMonth(),
        currentDate.getFullYear()
    );
    const weekdayHeaders = ["일", "월", "화", "수", "목", "금", "토"];

    const today = new Date();
    const todayDate = today.getDate();
    const todayMonth = today.getMonth();
    const todayYear = today.getFullYear();

    // 오늘 날짜인지 확인하는 함수
    const isToday = (day: number | null) =>
        day === todayDate &&
        currentDate.getMonth() === todayMonth &&
        currentDate.getFullYear() === todayYear;

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
                        className={`${styles["calendar-day"]} ${
                            isToday(day) ? styles["today"] : ""
                        }`}
                    >
                        {day || ""}
                    </div>
                ))}
            </div>
        </section>
    );
}