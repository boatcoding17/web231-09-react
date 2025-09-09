import { useWithdrawalStore } from "../Store/use_with_drawal_store";

interface DropButtonProps {
  courseId: string;
}

export default function DropButton({ courseId }: DropButtonProps) {
  const dropCourse = useWithdrawalStore((s) => s.dropCourse);

  return (
    <button onClick={() => dropCourse(courseId)} style={{ marginLeft: "10px", color: "red" }}>
      ถอนรายวิชา
    </button>
  );
}
