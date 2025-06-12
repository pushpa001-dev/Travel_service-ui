import { createSlice } from "@reduxjs/toolkit";


interface Ticket_counterState {
    value: number;
}

const initialState: Ticket_counterState = {
    value: 0,
};

const Ticket_counterState = createSlice({
    name: "Ticket_counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        deleteAll: (state) => {
            state.value -= state.value;
        },
    },
});

export const { increment, decrement, deleteAll } = Ticket_counterState.actions;
export default Ticket_counterState.reducer;