import CounterDec from './component/CounterDec'
import CounterInc from './component/CounterInc'
import CounterScore from './component/CounterScore'
import TodoApp from './component/To_do_list'
import CourseList from "./component/CourseList"
import CourseForm from "./component/CourseForm"
import CourseDrop from "./component/CourseDrop"
import DropButton from "./component/CourseButton"


import './App.css'

function App() {
  return (
    <>
      <div>
        <CounterScore />
        <CounterInc />
        <CounterDec />            
      </div>
      
      <div>
        <h1>This is To_DO_LIST</h1>
        <TodoApp />
      </div>

      <div>
        <h1>This is Course Withdrawal</h1>
        <CourseForm />   
        <CourseList />   
        <CourseDrop />   
      </div>
    </>
  )
}

export default App
