import { useWithdrawalStore } from "../Store/use_with_drawal_store";
import "../App.css";

export default function CourseDrop() {
  const courses = useWithdrawalStore((s) => s.courses);
  const droppedCourses = courses.filter((c) => c.dropped);

  return (
    <div className="course-drop card">
      <h3>รายวิชาที่ถอนแล้ว</h3>
      <ul>
        {droppedCourses.map((c) => (
          <li key={c.id} className="course-item">
            {c.id} - {c.nameTH} ({c.credit} หน่วยกิต)
          </li>
        ))}
      </ul>
    </div>
  );
}
