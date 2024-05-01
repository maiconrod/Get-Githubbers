import { Outlet } from 'react-router-dom'
import ParticleComponent from './components/ParticlesComponent'

function App() {

  return (
    <div className='p-4 sm:px-60 sm:py-32 min-h-screen flex items-center justify-center'>
      <ParticleComponent />
     <Outlet />
    </div>
  )
}

export default App
