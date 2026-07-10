import './App.css'
import { useToast } from './hooks/useToast' 
import { UseCallbackParent } from './pages/hooks/useCallback/UseCallBackParent';

function App() { 

  const { addToast } = useToast()

  const showAlert = () => {
    addToast("Button got clicked","success",{ id : Math.random().toFixed(3) , duration : 5000});
  }

  return (
    <>
       <UseCallbackParent />
    </>
  )
}

export default App
