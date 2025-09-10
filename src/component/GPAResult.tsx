import { useWithdrawalStore } from "../Store/use_with_drawal_store";

export default function GPAResult() {
  const calculateGPA = useWithdrawalStore((s) => s.calculateGPA);
  const gpa = calculateGPA();

  return (
    <div className="gpa-result card">
      <h3>ผลการคำนวณ GPA</h3>
      <p>GPA รวม: <strong>{gpa.toFixed(2)}</strong></p>
    </div>
  );
}
