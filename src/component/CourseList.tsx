import { useWithdrawalStore } from "../Store/use_with_drawal_store";
import DropButton from "./CourseButton";
import "../App.css";

export default function CourseList() {
  const courses = useWithdrawalStore((s) => s.courses);
  const activeCourses = courses.filter((c) => !c.dropped);

  return (
    <div className="course-list card">
      <h3>รายวิชาที่ลงทะเบียน</h3>
      <ul>
        {activeCourses.map((c) => (
          <li key={c.id} className="course-item">
            {c.id} - {c.nameTH} ({c.credit} หน่วยกิต) - {c.teacher} 
            {c.grade && <span> เกรด: {c.grade}</span>}
            <DropButton courseId={c.id} />
          </li>
        ))}
      </ul>
    </div>
  );
}
