import { Route, Routes } from 'react-router-dom'

//* Components
import { Navbar } from './components/Navbar'
import { Signup } from './views/Signup'

//* Assets
// import hero from './assets/background_web.mp4'
import { Dashboard } from './views/Dashboard'
import { Login } from './views/Login'
import { useState } from 'react'
import Notification from './components/Notification'
import { Recovery } from './views/Recovery'
import { AskRecovery } from './views/AskRecovery'
import { EditUserTest } from './views/EditUserTest'

function App() {

  const [user, setUser] = useState(null)
  const [errorType, setErrorType] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  return (
    <div className="bg-[#1E1E1E] flex justify-center items-center overflow-hidden">
      <>
        <div className="h-screen w-screen overflow-hidden">
          <Navbar user={user} setUser={setUser} setErrorMessage={setErrorMessage} setErrorType={setErrorType} />
          <Notification type={errorType} message={errorMessage} />
          <video
            src={'https://res.cloudinary.com/maulight/video/upload/v1701104552/pwaghleguqrcjpsm9e0y.mp4'}
            type='video/mp4'
            loop
            controls={false}
            muted
            autoPlay
            className="object-cover w-full h-full box-border overflow-hidden scrollbar-none opacity-40"
          />
        </div>
        <div className="absolute flex flex-col justify-center items-center overflow-hidden h-screen">
          <div className=''>
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/dashboard' element={<Dashboard setErrorMessage={setErrorMessage} setErrorType={setErrorType} />} />
              <Route path='/editUser' element={<EditUserTest setErrorMessage={setErrorMessage} setErrorType={setErrorType} />} />
              <Route path='/passwordReset' element={<Recovery setErrorMessage={setErrorMessage} setErrorType={setErrorType} />} />
              <Route path='/passwordResetRequest' element={<AskRecovery setErrorMessage={setErrorMessage} setErrorType={setErrorType} />} />
              <Route path="/signup" element={<Signup setErrorMessage={setErrorMessage} setErrorType={setErrorType} />} />
              <Route path="/login" element={<Login setUser={setUser} setErrorMessage={setErrorMessage} setErrorType={setErrorType} />} />
            </Routes>
          </div>
        </div>
      </>
    </div>
  )
}

export default App
