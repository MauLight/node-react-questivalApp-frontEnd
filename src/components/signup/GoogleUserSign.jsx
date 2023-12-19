import React from 'react'
import googleIcon from '../../assets/googleIcon.svg'

export const GoogleUserSign = ({ googleLogin }) => {
  return (
    <div className="flex justify-center gap-y-2 w-full">
      <button className='glass h-12 min-[300px]:p-2 text-white bg-transparent hover:bg-[#4285F4] transition-color duration-200 w-full rounded-md border hover:border-[#4285F4]' onClick={googleLogin} >
        <div className="flex justify-center items-center gap-x-3">
          <img src={googleIcon} className='w-[30px] h-auto' />
          <h1 className='p-0 m-0'>Google</h1>
        </div>
      </button>
    </div>
  )
}
