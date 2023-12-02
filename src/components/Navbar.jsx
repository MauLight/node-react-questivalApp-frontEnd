import { useApolloClient } from '@apollo/client'
import { Logout } from '@carbon/icons-react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Navbar = ({ setErrorMessage, setErrorType }) => {

  const [user, setUser] = useState()
  const navigate = useNavigate()
  const client = useApolloClient()

  const handleLogOut = () => {
    localStorage.clear()
    client.resetStore()
    setErrorType('add')
    setErrorMessage('Logged out succesfully.')
    setTimeout(() => setErrorMessage(null), 5000)
    navigate('/signup')
  }

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('QuestivalUser'))
    setUser(currentUser)
  }, [])

  return (
    <div className='w-full py-2 fixed z-10 flex justify-between px-2 sm:px-10 mt-2'>
      <h1 className='glow text-2xl tracking-tight font-title text-white'>Questival</h1>
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
