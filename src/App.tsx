import "./App.css";
import { DateProvider } from "./context/DateContext";
import Calendar from "./components/Calendar/Calendar";
import TodoList from "./components/TodoList/TodoList";
import { TodoProvider } from "./context/TodoContext";

function App() {
    return (
        <TodoProvider>
            <DateProvider>
                <Calendar />
                <TodoList />
            </DateProvider>
        </TodoProvider>
    );
}

export default App;
