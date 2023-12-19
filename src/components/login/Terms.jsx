import React from 'react'
import { Link } from 'react-router-dom'

export const Terms = () => {
  return (
    <div className="flex gap-x-2 text-[10px] text-white mt-[13vh] min-[1800px]:mt-[23vh] mb-5 min-[1800px]:mb-20">
      <Link className='underline text-[10px] hover:text-[#FC4ECF] transition-color duration-200' to={'/terms'}>Terms,</Link>
      <Link className='underline text-[10px] hover:text-[#FC4ECF] transition-color duration-200' to={'/privacy'}>Privacy Policy,</Link>
      {'and '}
      <Link className='underline text-[10px] hover:text-[#FC4ECF] transition-color duration-200' to={'/terms'}>Cookies Policy.</Link>
    </div>
  )
}
