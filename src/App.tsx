import "./App.css";
import { DateProvider } from "./context/DateContext";
import Calendar from "./components/Calendar/Calendar";
import TodoList from "./components/TodoList/TodoList";

function App() {
    return (
        <>
            <DateProvider>
                <Calendar />
                <TodoList />
            </DateProvider>
        </>
    );
}

export default App;
