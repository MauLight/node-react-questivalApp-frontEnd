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
    <div className='h-full max-sm:px-2 sm:w-full flex justify-center items-center'>
      <div>
        <form onSubmit={handleSubmit} className='flex flex-col items-center gap-y-5 py-10 px-5 font-body text-sm min-w-[15vw]' >
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
      </div>
    </div>
  )
}
