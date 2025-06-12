import { configureStore } from "@reduxjs/toolkit";
import Ticket_counterReducer from "./Ticket_counter/page";

export const store = configureStore({
    reducer: {
        counter: Ticket_counterReducer ,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;