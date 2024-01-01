import { useState } from 'react'
import { Route, Routes, useMatch } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import ScrollToTop from './ScrollToTop'
import { ParallaxProvider } from 'react-scroll-parallax'
import { InfinitySpin } from 'react-loader-spinner'

//* Components
import { Navbar } from './components/Navbar'
import { Signup } from './views/Signup'
import Notification from './components/Notification'
import { Terms } from './components/signup/Terms'

//* Assets
// import hero from './assets/background_web.mp4'
import { Dashboard } from './views/Dashboard'
import { Login } from './views/Login'
import { Recovery } from './views/Recovery'
import { AskRecovery } from './views/AskRecovery'
import { EditUserTest } from './views/EditUserTest'
import { AdminLogin } from './views/AdminLogIn'
import { UserProfile } from './views/UserProfile'
import { AllUsers } from './views/AllUsers'
import { OtherUserProfile } from './views/OtherUserProfile'

function App() {

  const [user, setUser] = useState(null)
  const [errorType, setErrorType] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  const matchUser = useMatch('/user/:id')
  const userId = matchUser ? matchUser.params.id : null

  console.log('This is the user:', user)

  const result = useQuery({
    queryKey: ['allUsers'],
    queryFn: () => axios.get('http://localhost:3001/api/users')
      .then(res => {
        setUser(res.data?.filter(elem => elem.id === JSON.parse(localStorage.getItem('QuestivalUser')).id)[0])
        console.log('the retrieved user: ', res.data?.filter(elem => elem.id === JSON.parse(localStorage.getItem('QuestivalUser')).id)[0])
        return res.data
      })
  })

  console.log(JSON.parse(JSON.stringify(result)))

  if (result.isLoading) {
    return (
      <div className="flex w-screen h-screen justify-center items-center">
        <InfinitySpin width="400" color="#F2F3F4" />
      </div>
    )
  }

  const users = result.data

  return (
    <div className="bg-[#1E1E1E] flex justify-center items-center overflow-hidden relative">
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
        <div className="absolute flex flex-col justify-start items-center overflow-x-hidden h-screen z-10">
          <ParallaxProvider>
            <ScrollToTop>
              <div>
                {
                  !user ? (
                    <Routes>
                      <Route path="/signup" element={<Signup setUser={setUser} setErrorMessage={setErrorMessage} setErrorType={setErrorType} />} />
                      <Route path="/login" element={<Login setUser={setUser} setErrorMessage={setErrorMessage} setErrorType={setErrorType} />} />
                      <Route path="/adminlogin" element={<AdminLogin setUser={setUser} setErrorMessage={setErrorMessage} setErrorType={setErrorType} />} />
                    </Routes>
                  )
                    :
                    (
                      <Routes>
                        <Route path='/' element={<Dashboard />} />
                        <Route path='/allUsers' element={<AllUsers users={users} myId={user.id} />} />
                        <Route path='/user/:id' element={<OtherUserProfile userId={userId} myUser={user} setUser={setUser} />} />
                        <Route path='/dashboard' element={<Dashboard setErrorMessage={setErrorMessage} setErrorType={setErrorType} />} />
                        <Route path='/profile' element={<UserProfile user={user} setUser={setUser} setErrorMessage={setErrorMessage} setErrorType={setErrorType} myProfile={true} />} />
                        <Route path='/editUser' element={<EditUserTest setErrorMessage={setErrorMessage} setErrorType={setErrorType} />} />
                        <Route path='/passwordReset' element={<Recovery setErrorMessage={setErrorMessage} setErrorType={setErrorType} />} />
                        <Route path='/passwordResetRequest' element={<AskRecovery setErrorMessage={setErrorMessage} setErrorType={setErrorType} />} />
                      </Routes>
                    )
                }
              </div>
            </ScrollToTop>
          </ParallaxProvider>
        </div>
        {
          !user && (
            <Terms />
          )
        }
      </>
    </div>
  )
}

export default App
