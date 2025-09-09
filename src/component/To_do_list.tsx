import { useState } from "react";

function TodoApp(): JSX.Element {
  const [task, setTask] = useState<string>("");        // เก็บค่าที่พิมพ์ใน input
  const [tasks, setTasks] = useState<string[]>([]);    // เก็บรายการงานทั้งหมด

  const addTask = (): void => {
    if (task.trim() === "") return;            // กัน input ว่าง
    setTasks([...tasks, task]);                // เพิ่ม task ลงใน array
    setTask("");                               // เคลียร์ input หลังเพิ่ม
  };

  const deleteTask = (index: number): void => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  // ====== Styles ======
  const containerStyle: React.CSSProperties = {
    maxWidth: "500px",
    margin: "50px auto",
    padding: "20px",
    borderRadius: "12px",
    backgroundColor: "#fdfdfd",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const headerStyle: React.CSSProperties = {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  };

  const inputStyle: React.CSSProperties = {
    padding: "10px",
    width: "65%",
    borderRadius: "8px",
    border: "1px solid #ccc",
    marginRight: "10px",
    fontSize: "16px",
  };

  const addButtonStyle: React.CSSProperties = {
    padding: "10px 18px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#4caf50",
    color: "white",
    fontWeight: "bold",
    transition: "0.3s",
  };

  const listStyle: React.CSSProperties = {
    listStyle: "none",
    padding: 0,
    marginTop: "20px",
  };

  const listItemStyle: React.CSSProperties = {
    padding: "10px",
    borderBottom: "1px solid #eee",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "6px",
    transition: "0.3s",
    backgroundColor: "#fafafa",
  };

  const deleteButtonStyle: React.CSSProperties = {
    padding: "4px 10px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#f44336",
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>My To-do List</h1>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
        <input
          type="text"
          value={task}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTask(e.target.value)}
          placeholder="พิมพ์งานที่ต้องทำ..."
          style={inputStyle}
        />
        <button
          onClick={addTask}
          style={addButtonStyle}
          onMouseOver={(e) =>
            ((e.target as HTMLButtonElement).style.backgroundColor = "#45a049")
          }
          onMouseOut={(e) =>
            ((e.target as HTMLButtonElement).style.backgroundColor = "#4caf50")
          }
        >
          Add
        </button>
      </div>

      <ul style={listStyle}>
        {tasks.map((t, index) => (
          <li key={index} style={listItemStyle}>
            <span>{t}</span>
            <button
              onClick={() => deleteTask(index)}
              style={deleteButtonStyle}
            >
              ลบ
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
