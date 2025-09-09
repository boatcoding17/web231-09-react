import { useWithdrawalStore } from "../Store/use_with_drawal_store";
import DropButton from "./CourseButton";

export default function CourseList() {
  const courses = useWithdrawalStore((s) => s.courses); // ใช้ state ตรง ๆ
  const activeCourses = courses.filter((c) => !c.dropped); // เลือกเฉพาะวิชาที่ยังไม่ถอน

  return (
    <div>
      <h3>รายวิชาที่ลงทะเบียน</h3>
      <ul>
        {activeCourses.map((c) => (
          <li key={c.id}>
            {c.id} - {c.nameTH} ({c.credit} หน่วยกิต) - {c.teacher} 
            {c.grade && <span> เกรด: {c.grade}</span>}
            <DropButton courseId={c.id} />
          </li>
        ))}
      </ul>
    </div>
  );
}
