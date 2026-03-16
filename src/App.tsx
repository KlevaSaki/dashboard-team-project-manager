import './App.css'
import { AppProvider } from './context/AppProvider'
import Dashboard from './pages/Dashboard'

function App() {

  return (
    <AppProvider>
      <Dashboard />
    </AppProvider>
  )
}

export default App
