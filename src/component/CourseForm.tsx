import { useState } from "react";
import { useWithdrawalStore } from "../Store/use_with_drawal_store";
import "../App.css";

export default function CourseForm() {
  const addCourse = useWithdrawalStore((s) => s.addCourse);

  const [id, setId] = useState("");
  const [nameTH, setNameTH] = useState("");
  const [nameEN, setNameEN] = useState("");
  const [credit, setCredit] = useState<number>(3);
  const [teacher, setTeacher] = useState("");
  const [grade, setGrade] = useState("");

  const handleSubmit = () => {
    if (!id || !nameTH) return;
    addCourse({ id, nameTH, nameEN, credit, teacher, grade });
    setId(""); setNameTH(""); setNameEN(""); setCredit(3); setTeacher(""); setGrade("");
  };

  return (
    <div className="course-form card">
      <h3>เพิ่มรายวิชา</h3>
      <input placeholder="รหัสวิชา" value={id} onChange={(e) => setId(e.target.value)} />
      <input placeholder="ชื่อวิชา (ไทย)" value={nameTH} onChange={(e) => setNameTH(e.target.value)} />
      <input placeholder="ชื่อวิชา (อังกฤษ)" value={nameEN} onChange={(e) => setNameEN(e.target.value)} />
      <input type="number" placeholder="หน่วยกิต" value={credit} onChange={(e) => setCredit(Number(e.target.value))} />
      <input placeholder="อาจารย์ผู้สอน" value={teacher} onChange={(e) => setTeacher(e.target.value)} />
      
      <select value={grade} onChange={(e) => setGrade(e.target.value)}>
        <option value="">-- เกรด --</option>
        <option value="A">A</option>
        <option value="B+">B+</option>
        <option value="B">B</option>
        <option value="C+">C+</option>
        <option value="C">C</option>
        <option value="D+">D+</option>
        <option value="D">D</option>
        <option value="F">F</option>
        <option value="W">W</option>
      </select>
      
      <button className="add-btn" onClick={handleSubmit}>เพิ่ม</button>
    </div>
  );
}
