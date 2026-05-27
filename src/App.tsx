import './App.css'
import { useToast } from './hooks/useToast'

function App() { 

  const { addToast } = useToast()

  const showAlert = () => {
    addToast("Button got clicked","success",{ id : Math.random().toFixed(3) , duration : 5000});
  }

  return (
    <>
       <button onClick={() => showAlert()} className='btn-primary'>Show Alert</button>
    </>
  )
}

export default App
