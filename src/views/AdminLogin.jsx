import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import { useGoogleLogin } from '@react-oauth/google'
// import { useMutation } from '@apollo/client'
// import { LOGIN } from '../queries/loginQuery'
import { logUser } from '../services/login'
// import googleIcon from '../assets/googleIcon.svg'
// import axios from 'axios'


export const AdminLogin = ({ setUser, setErrorMessage, setErrorType }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate()

  //! REST version
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (email === '' || password === '') {
      setErrorMessage('You have to fill all the inputs before submitting.')
      setErrorType('red')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
      return
    }

    const user = {
      email,
      password
    }

    try {
      const loggedUser = await logUser(user)
      localStorage.setItem('QuestivalUser', JSON.stringify(loggedUser))
      setCurrentUser(loggedUser)
      setUser(loggedUser)
      setEmail('')
      setPassword('')
      console.log('This is the logged user', currentUser)
      navigate('/dashboard')
    }
    catch (error) {
      console.log(error)
      setErrorMessage('Incorrect password or email.')
      setErrorType('red')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  return (
    <div className='h-screen max-sm:px-2 w-screen flex justify-center items-center'>
      <div className='w-[28%]'>
        <div className='flex flex-col items-start gap-y-0 pb-5 px-5 font-body w-full'>
          <h1 className='text-2xl text-white font-bold font-body p-0 m-0'>{'Welcome admin!'}</h1>
          <p className='text-sm text-white p-0 m-0'>Enter your email to continue your work</p>
        </div>
        <form onSubmit={handleSubmit} className='flex flex-col items-center gap-y-5 pb-7 px-5 font-body text-sm min-w-[15vw]' >
          <div className="flex gap-y-2 w-full">
            <input type='text' className='glass h-12 p-2 text-white bg-transparent w-full rounded-md focus:ring-0 focus:outline-none' value={email} onChange={({ target }) => setEmail(target.value)} placeholder='Email' />
          </div>
          <div className="flex flex-col gap-x-2 w-full">
            <input type='password' className='glass h-12 p-2 text-white bg-transparent w-full rounded-md focus:ring-0 focus:outline-none' value={password} onChange={({ target }) => setPassword(target.value)} placeholder='Password' />
          </div>
          <div className="flex gap-y-2 w-full">
            <button type='submit' className='h-12 p-2 text-[#1E1E1E] bg-[#FC4ECF] w-full rounded-md focus:ring-0 focus:outline-none hover:bg-white transition-color duration-200' onClick={handleSubmit}>Login</button>
          </div>
          <Link to={'/passwordResetRequest'}><small className='text-white pl-2 pt-2 hover:text-[#FC4ECF] transition-color duration-200'>Forgot your password?</small></Link>
          <div className="flex gap-y-2 mt-auto">
            <small className='text-white'><Link className='hover:text-[#FC4ECF] transition-color duration-200' to={'/'}>Return to site.</Link></small>
          </div>
        </form>
      </div>
    </div>
  )
}