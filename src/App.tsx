import './App.css'
import CounterDec from './component/CounterDec'
import CounterInc from './component/CounterInc'
import CounterScore from './component/CounterScore'
 
function App() {

  return (
    <>
      <CounterScore />
      <CounterInc />
      <CounterDec />            
    </>
  )
}

export default App
