import CounterDec from './component/CounterDec'
import CounterInc from './component/CounterInc'
import CounterScore from './component/CounterScore'
import TodoApp from './component/To_do_list'
import CourseList from "./component/CourseList"
import CourseForm from "./component/CourseForm"
import CourseDrop from "./component/CourseDrop"
import GPAResult from "./component/GPAResult"


import './App.css'

function App() {
  return (
    <div className="app-root">
      {/* ================= Counter Section ================= */}
      <section className="section-card">
        <h1>Counter App</h1>
        <div className="counter-section">
          <CounterScore />
          <CounterInc />
          <CounterDec />            
        </div>
      </section>
      
      {/* ================= To-do Section ================= */}
      <section className="section-card">
        <h1>My To-Do List</h1>
        <TodoApp />
      </section>

      {/* ================= Course Section ================= */}
      <section className="section-card">
        <h1>Course Withdrawal</h1>
        <CourseForm />   
        <CourseList />   
        <CourseDrop />   
        <GPAResult />
      </section>
    </div>
  )
}
export default App