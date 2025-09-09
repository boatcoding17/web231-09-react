// counter number store 
import { create } from "zustand"; 

 
interface CounterState { 
    count: number; 
    increase: () => void; 
    decrease: () => void; 
    reset: () => void; 
} 

export const useCounterStore = create<CounterState>((set) => ({ 

    count: 0, 
    increase: () => set((state) => ({ count: state.count + 1 })), 
    decrease: () => set((state) => ({ count: state.count - 1 })), 
    reset: () => set({ count: 0 }), 

})); 

interface TodoState {
  task: string;
  tasks: string[];
  setTask: (task: string) => void;
  addTask: () => void;
  deleteTask: (index: number) => void;
}

export const useTodoStore = create<TodoState>((set, get) => ({
  task: "",
  tasks: [],
  setTask: (task) => set({ task }),
  addTask: () => {
    const { task, tasks } = get();
    if (task.trim() === "") return;
    set({ tasks: [...tasks, task], task: "" });
  },
  deleteTask: (index) => {
    const { tasks } = get();
    set({ tasks: tasks.filter((_, i) => i !== index) });
  },
}));
