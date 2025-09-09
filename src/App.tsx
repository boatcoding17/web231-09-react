import './App.css'
import CounterDec from './component/CounterDec'
import CounterInc from './component/CounterInc'
import CounterScore from './component/CounterScore'
import TodoApp from './component/To_do_list'


function App() {

  return (
    <>
      <CounterScore />
      <CounterInc />
      <CounterDec />            
      <h1>This is To_DO_LIST</h1>
      <TodoApp />
    </>
  )
}

export default App
