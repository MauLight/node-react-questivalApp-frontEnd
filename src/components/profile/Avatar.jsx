import React from 'react'

export const Avatar = ({ user }) => {
  return (
    <div className="flex bg-white">
      <div className="flex flex-col px-10 justify-end items-center relative">
        <div className="flex w-full h-full">
          <div className="absolute h-full w-[79%] bg-gradient-to-t from-black to-transparent opacity-50"></div>
          <img className='w-full h-full object-cover' src='https://images.unsplash.com/photo-1655874819398-c6dfbec68ac7?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
        </div>
        <div className="flex flex-col absolute gap-y-1">
          <div className="flex flex-col justify-center items-center">
            <h1 className='text-md uppercase text-white'>USER.FIRSTNAME + USER.LASTNAME</h1>
          </div>
          <div className="flex gap-x-2 justify-center items-center pb-5">
            <div className="flex flex-col justify-center items-center">
              <h1 className='font-body text-sm  text-white'>12</h1>
              <h1 className='font-body text-white text-[10px]'>screenplays</h1>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className='font-body  text-sm text-white'>136</h1>
              <h1 className='font-body text-white text-[10px]'>following</h1>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className='font-body text-sm  text-white'>27</h1>
              <h1 className='font-body text-white text-[10px]'>followers</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex"></div>
    </div>
  )
}
