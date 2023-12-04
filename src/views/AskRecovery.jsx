import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { askResetPassword } from '../services/user'

export const AskRecovery = ({ setErrorMessage, setErrorType }) => {

  const [email, setEmail] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async (e) => {

    e.preventDefault()

    if (!/^[\w-\\.]+@([\w-]+\.)+[\w-]{2,5}$/.test(email)) {
      setErrorMessage('That\'s not an email, you idiot!.')
      setErrorType('red')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
      return
    }

    const passObj = {
      email
    }

    try {
      const response = await askResetPassword(passObj)
      console.log(response)
      setErrorMessage('The request was sent.')
      setErrorType('add')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
      navigate('/login')
    }
    catch (error) {
      setErrorMessage('Password request failed.')
      setErrorType('red')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  return (
    <div className='h-screen max-sm:px-2 sm:w-full flex justify-center items-end'>
      <div>
        <div className='flex flex-col items-start gap-y-0 pb-5 px-5 font-body min-w-[15vw]'>
          <h1 className='text-2xl text-white font-bold font-body p-0 m-0'>{'Forgot password?'}</h1>
          <p className='text-sm text-white p-0 m-0'>Please enter your email.</p>
        </div>
        <form onSubmit={handleSubmit} className='flex flex-col items-center gap-y-5 py-2 px-5 font-body text-sm min-w-[15vw]' >
          <div className="flex flex-col gap-x-2 w-full">
            <input type='email' className='glass h-12 p-2 text-white bg-transparent w-full  rounded-md' value={email} onChange={({ target }) => setEmail(target.value)} placeholder='Enter User Email' />
          </div>
          <div className="flex gap-y-2 w-full">
            <button type='submit' className='h-12 p-2 text-[#1E1E1E] bg-[#FC4ECF] w-full rounded-md' onClick={handleSubmit}>Confirm</button>
          </div>
          <div className="flex gap-y-2">
            <small className='text-white'>Cancel? <Link className='hover:text-[#464648] transition-color duration-200' to={'/login'}>Log in.</Link></small>
          </div>
        </form>
        <div className="flex justify-center gap-x-2 text-[10px] text-white mt-[47vh] mb-20">
          <Link className='underline text-[10px] hover:text-[#4D4D4D] transition-color duration-200' to={'/terms'}>Terms,</Link>
          <Link className='underline text-[10px] hover:text-[#4D4D4D] transition-color duration-200' to={'/privacy'}>Privacy Policy,</Link>
          {'and '}
          <Link className='underline text-[10px] hover:text-[#4D4D4D] transition-color duration-200' to={'/terms'}>Cookies Policy.</Link>
        </div>
      </div>
    </div>
  )
}
