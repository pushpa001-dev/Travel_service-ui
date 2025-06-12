"use client";
import { Provider } from "react-redux";
import { store } from "./store";

interface childrenProps{
    children: React.ReactNode
}
export function TicketProvider({children}:childrenProps) {
    return <Provider store={store}>{children}</Provider>;
}