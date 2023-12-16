import React from 'react'

export const Menu = ({ currentPage, setCurrentPage }) => {

  console.log(currentPage)

  return (
    <div className="flex justify-center items-end w-full gap-x-20">
      <h1 onClick={() => setCurrentPage(1)} className={currentPage === 1 ? 'text-2xl text-[#FC4ECF] font-body underline cursor-pointer hover:text-black transition-color duration-200 italic bold' :'text-xl font-body cursor-pointer hover:text-[#FC4ECF] transition-color duration-200'}>Screenplays</h1>
      <h1 onClick={() => setCurrentPage(2)} className={currentPage === 2 ? 'text-2xl text-[#FC4ECF] font-body underline cursor-pointer hover:text-black transition-color duration-200 italic bold' :'text-xl font-body cursor-pointer hover:text-[#FC4ECF] transition-color duration-200'}>About</h1>
      <h1 onClick={() => setCurrentPage(3)} className={currentPage === 3 ? 'text-2xl text-[#FC4ECF] font-body underline cursor-pointer hover:text-black transition-color duration-200 italic bold' :'text-xl font-body cursor-pointer hover:text-[#FC4ECF] transition-color duration-200'}>Activity</h1>
    </div>
  )
}
