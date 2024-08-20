import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
} from "react";
import { Todos } from "../types";

interface TodosContextType {
    todos: Todos;
    setTodos: React.Dispatch<React.SetStateAction<Todos>>
}

const TodoContext = createContext<TodosContextType | undefined>(undefined);

export function TodoProvider ({ children }: { children: ReactNode }) {
    const [todos, setTodos] = useState({});

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem("todos") || "{}");
        setTodos(storedTodos);
    }, []);

    return (
        <TodoContext.Provider value={{ todos, setTodos }}>
            {children}
        </TodoContext.Provider>
    );
};

export const useTodos = (): TodosContextType => {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error("useTodo는 TodoProvider 내에서 사용해야 합니다.");
    }
    return context;
};
