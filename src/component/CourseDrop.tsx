import { useWithdrawalStore } from "../Store/use_with_drawal_store";

export default function CourseDrop() {
  const courses = useWithdrawalStore((s) => s.courses); // ใช้ state ตรง ๆ
  const droppedCourses = courses.filter((c) => c.dropped);

  return (
    <div>
      <h3>รายวิชาที่ถอนแล้ว</h3>
      <ul>
        {droppedCourses.map((c) => (
          <li key={c.id}>
            {c.id} - {c.nameTH} ({c.credit} หน่วยกิต)
          </li>
        ))}
      </ul>
    </div>
  );
}
