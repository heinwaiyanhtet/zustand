import { stat } from "fs";
import { create } from "zustand";


interface CounterState {

    count : number,

    incrCounter : () => void
    
}

const useCounterStore = create<CounterState>((set) => ({

    count: 0,

    incrCounter : () => set((state) => ({ count: state.count + 1 }))

}));

export default useCounterStore;

