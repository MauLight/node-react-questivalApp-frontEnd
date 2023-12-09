// import { useApolloClient } from '@apollo/client'
import { Logout } from '@carbon/icons-react'
import { googleLogout } from '@react-oauth/google'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.webm'

export const Navbar = ({ user, setUser, setErrorMessage, setErrorType }) => {

  const navigate = useNavigate()
  // const client = useApolloClient()

  const handleLogOut = () => {
    localStorage.clear()
    // client.resetStore()

    googleLogout()
    setUser(null)
    setErrorType('add')
    setErrorMessage('Logged out succesfully.')
    setTimeout(() => setErrorMessage(null), 5000)
    navigate('/login')
  }

  useEffect(() => {
    console.log(user)
  }, [])

  return (
    <div className='w-full h-[5%] fixed z-10 flex justify-between px-6 bg- sm:ptransparentx-10 mt-2'>
      <video
        src={logo}
        type='video/mp4'
        loop
        controls={false}
        muted
        autoPlay
        className="object-cover w-32 h-auto box-border overflow-hidden scrollbar-none"
      />
      {
        user && (
          <button className='hover:text-[#FC4ECF] transition-color duration-200' onClick={handleLogOut}>
            <Logout size={36} />
          </button>
        )
      }
    </div>
  )
}
