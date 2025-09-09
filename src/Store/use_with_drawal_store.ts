import { create } from "zustand";

export interface Course {
  id: string;
  nameTH: string;
  nameEN: string;
  credit: number;
  teacher: string;
  grade?: string;
  dropped?: boolean;
}

interface CourseState {
  courses: Course[];
  addCourse: (course: Course) => void;
  dropCourse: (id: string) => void;
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

export const useWithdrawalStore = create<CourseState>((set, get) => ({
  courses: [],
  addCourse: (course) =>
    set((state) => ({ courses: [...state.courses, course] })),
  dropCourse: (id) =>
    set((state) => ({
      courses: state.courses.map((c) =>
        c.id === id ? { ...c, dropped: true } : c
      ),
    })),
  calculateGPA: () => {
    const active = get().courses.filter(
      (c) => !c.dropped && c.grade && c.grade !== "W"
    );
    const totalCredits = active.reduce((sum, c) => sum + c.credit, 0);
    const totalPoints = active.reduce(
      (sum, c) => sum + gradeToPoint(c.grade) * c.credit,
      0
    );
    return totalCredits > 0 ? totalPoints / totalCredits : 0;
  },
}));
