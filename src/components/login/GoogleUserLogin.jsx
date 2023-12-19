import React from 'react'
import googleIcon from '../../assets/googleIcon.svg'

export const GoogleUserLogin = ({ googleLogin }) => {
  return (
    <div className="flex justify-center gap-y-2 w-full w-[20vw]">
      <button className='glass h-12 p-2 text-white bg-transparent hover:bg-[#4285F4] transition-color duration-200 w-full rounded-md border hover:border-[#4285F4]' onClick={googleLogin} >
        <div className="flex justify-center items-center gap-x-3">
          <img src={googleIcon} className='w-[30px] h-auto' />
          <h1 className='p-0 m-0'>Continue with Google</h1>
        </div>
      </button>
    </div>
  )
}
