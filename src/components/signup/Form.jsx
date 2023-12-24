import React from 'react'

export const Form = ({ firstname, setFirstName, lastname, setLastName, email, setEmail, password, setPassword, cpassword, setCpassword, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-center gap-y-5 pb-7 px-5 font-body text-sm w-full' >
      <div className="flex gap-x-2 w-full">
        <input type='text' className='glass h-8 sm:h-12 p-2 font-body text-sm text-white bg-transparent w-full rounded-md pl-4 focus:ring-0 focus:outline-none' value={firstname} onChange={({ target }) => setFirstName(target.value)} placeholder='Firstname' />
        <input type='text' className='glass h-8 sm:h-12 p-2 text-white bg-transparent w-full font-body text-sm rounded-md pl-4 focus:ring-0 focus:outline-none' value={lastname} onChange={({ target }) => setLastName(target.value)} placeholder='Lastname' />
      </div>
      <div className="flex gap-y-2 w-full">
        <input type='text' className='glass h-8 sm:h-12 p-2 text-white bg-transparent w-full  rounded-md pl-4 focus:ring-0 focus:outline-none' value={email} onChange={({ target }) => setEmail(target.value)} placeholder='Email' />
      </div>
      <div className="flex gap-x-2 w-full">
        <input type='password' className='glass h-8 sm:h-12 p-2 text-white bg-transparent w-full rounded-md pl-4 focus:ring-0 focus:outline-none' value={password} onChange={({ target }) => setPassword(target.value)} placeholder='Password' />
        <input type='password' className='glass h-8 sm:h-12 p-2 text-white bg-transparent w-full rounded-md pl-4 focus:ring-0 focus:outline-none' value={cpassword} onChange={({ target }) => setCpassword(target.value)} placeholder='Confirm Password' />
      </div>
      <div className="flex gap-y-2 w-full">
        <button type='submit' className='h-8 sm:h-12 p-2 text-white bg-[#FC4ECF] w-full rounded-md hover:bg-white hover:text-[#1E1E1E] transition-color duration-200' onClick={handleSubmit}>Sign up</button>
      </div>
      <div className="flex gap-y-2">
        <small className='text-white'>By clicking Sign Up, you agree to our Terms & Conditions.</small>
      </div>
      <div className="flex justify-center gap-y-2 w-full mt-2">
        <p className='text-md text-[#4D4D4D]'>Or continue with</p>
      </div>
    </form>
  )
}
