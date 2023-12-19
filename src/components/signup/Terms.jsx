import React from 'react'
import { Link } from 'react-router-dom'

export const Terms = () => {
  return (
    <div className="absolute flex justify-center items-end gap-x-2 text-[10px] text-white mb-0 bottom-10 z-10">
      <Link className='underline text-[10px] hover:text-[#FC4ECF] transition-color duration-200' to={'/terms'}>Terms,</Link>
      <Link className='underline text-[10px] hover:text-[#FC4ECF] transition-color duration-200' to={'/privacy'}>Privacy Policy,</Link>
      {'and '}
      <Link className='underline text-[10px] hover:text-[#FC4ECF] transition-color duration-200' to={'/terms'}>Cookies Policy.</Link>
    </div>
  )
}
