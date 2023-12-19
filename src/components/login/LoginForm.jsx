import React from 'react'
import { Link } from 'react-router-dom'

export const LoginForm = ({ email, setEmail, password, setPassword, handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit} className='flex flex-col items-center gap-y-5 pb-7 px-5 font-body text-sm w-[20vw]' >
        <div className="flex gap-y-2 w-full">
          <input type='text' className='glass pl-4 h-12 p-2 text-white bg-transparent w-full rounded-md focus:ring-0 focus:outline-none' value={email} onChange={({ target }) => setEmail(target.value)} placeholder='Email' />
        </div>
        <div className="flex flex-col gap-x-2 w-full">
          <input type='password' className='glass pl-4 h-12 p-2 text-white bg-transparent w-full rounded-md focus:ring-0 focus:outline-none' value={password} onChange={({ target }) => setPassword(target.value)} placeholder='Password' />
          <Link className='pt-1' to={'/passwordResetRequest'}><small className='text-white underline pl-2 pt-2 hover:text-[#FC4ECF] transition-color duration-200'>Forgot your password?</small></Link>
        </div>
        <div className="flex gap-y-2 w-full">
          <button type='submit' className='h-12 p-2 text-[#1E1E1E] bg-[#FC4ECF] w-full rounded-md hover:bg-white transition-color duration-200' onClick={handleSubmit}>Login</button>
        </div>
        <div className="flex justify-center gap-y-2 w-full mt-2">
          <p className='text-md text-[#4D4D4D]'>OR</p>
        </div>
      </form>
    </div>
  )
}
