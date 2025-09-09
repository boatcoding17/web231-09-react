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

//To_do_list
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

// withdrawal store
export interface Course {
  id: string;          // รหัสวิชา
  nameTH: string;      // ชื่อวิชา (ไทย)
  nameEN: string;      // ชื่อวิชา (อังกฤษ)
  credit: number;      // หน่วยกิต
  teacher: string;     // อาจารย์ผู้สอน
  grade?: string;      // เกรด (A, B+, F, W, etc.)
  dropped?: boolean;   // สถานะถอน
}

interface CourseState {
  courses: Course[];
  addCourse: (course: Course) => void;
  dropCourse: (id: string) => void;
  getActiveCourses: () => Course[];
  getDroppedCourses: () => Course[];
  calculateGPA: () => number;
}

const gradeToPoint = (grade?: string): number => {
  switch (grade) {
    case "A": return 4;
    case "B+": return 3.5;
    case "B": return 3;
    case "C+": return 2.5;
    case "C": return 2;
    case "D+": return 1.5;
    case "D": return 1;
    case "F": return 0;
    default: return 0;
  }
};

export const useCourseStore = create<CourseState>((set, get) => ({
  courses: [],
  addCourse: (course) => set((state) => ({ courses: [...state.courses, course] })),
  dropCourse: (id) =>
    set((state) => ({
      courses: state.courses.map((c) =>
        c.id === id ? { ...c, dropped: true } : c
      ),
    })),
  getActiveCourses: () => get().courses.filter((c) => !c.dropped),
  getDroppedCourses: () => get().courses.filter((c) => c.dropped),
  calculateGPA: () => {
    const active = get().courses.filter((c) => !c.dropped && c.grade && c.grade !== "W");
    const totalCredits = active.reduce((sum, c) => sum + c.credit, 0);
    const totalPoints = active.reduce(
      (sum, c) => sum + gradeToPoint(c.grade) * c.credit,
      0
    );
    return totalCredits > 0 ? totalPoints / totalCredits : 0;
  },
}));