import { useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { resetPassword } from '../services/user'

export const Recovery = ({ setErrorMessage, setErrorType }) => {

  const [password, setPassword] = useState('')
  const [cPassword, setCpassword] = useState('')
  const [searchParams] = useSearchParams()

  const navigate = useNavigate()

  const handleSubmit = async (e) => {

    e.preventDefault()

    if (password !== cPassword) {
      setErrorMessage('Passwords don\'t match.')
      setErrorType('red')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
      return
    }

    const passObj = {
      userId: searchParams.get('id'),
      token: searchParams.get('token'),
      newPassword: password
    }

    try {
      const response = await resetPassword(passObj)
      console.log(response)
      setErrorMessage('Password updated.')
      setErrorType('add')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
      navigate('/login')
    }
    catch (error) {
      setErrorMessage('Password update failed.')
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
            <input type='password' className='glass h-12 p-2 text-white bg-transparent w-full  rounded-md' value={password} onChange={({ target }) => setPassword(target.value)} placeholder='New Password' />
          </div>
          <div className="flex flex-col gap-x-2 w-full">
            <input type='password' className='glass h-12 p-2 text-white bg-transparent w-full  rounded-md' value={cPassword} onChange={({ target }) => setCpassword(target.value)} placeholder='Confirm New Password' />
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
