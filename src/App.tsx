import type { PropsWithChildren } from 'react'
import './App.css'
import { AppProvider } from './context/AppProvider'
import Dashboard from './pages/Dashboard'
import { Route, Routes, useParams } from 'react-router-dom'
import ProjectPage from './pages/ProjectPage'

function Layout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow p-4 font-bold">
        Team Project Manager
      </header>

      <main>{children}</main>
    </div>
  )
}

//Wrapper to extract route params

function ProjectWrapper() {
  const { projectId = "" } = useParams();

  if(!!projectId) {
    return <div>Project not found</div>
  }

  return <ProjectPage projectId={projectId} />
}

function App() {

  return (
    <Layout>
      <Routes>
        {/* Dashboard */}
        <Route path='/' element={<Dashboard/>}/>

        {/* Project Page */}
        <Route path='/project/:projectId' element={<ProjectWrapper />} />
      </Routes>
    </Layout>
  )
}

export default App
