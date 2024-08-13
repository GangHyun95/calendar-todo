import React, { createContext, ReactNode, useContext, useState } from "react";

interface DateContextType {
    currentDate: Date;
    setCurrentDate: React.Dispatch<React.SetStateAction<Date>>;
}
const DateContext = createContext<DateContextType | undefined>(undefined);

export function DateProvider({ children }: { children: ReactNode }) {
    const [currentDate, setCurrentDate] = useState(new Date());

    return (
        <DateContext.Provider value={{ currentDate, setCurrentDate }}>
            {children}
        </DateContext.Provider>
    );
}

export function useDate() {
    const context = useContext(DateContext);
    if (!context) {
        throw Error("useDate는 DateProvider 내에서 사용해야 합니다.");
    }
    return context;
}
