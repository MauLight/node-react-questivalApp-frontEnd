import React from 'react'

export const Menu = ({ currentPage, setCurrentPage, user }) => {

  console.log(currentPage)

  return (
    <div className="flex justify-center items-end w-full gap-x-20">
      <div onClick={() => setCurrentPage(1)} className={currentPage === 1 ? 'text-xl mx-2 text-[#FC4ECF] font-body cursor-pointer hover:text-[#FFFBE9] transition-color duration-200 bold flex gap-x-1 relative' : 'text-xl font-body text-[#FFFBE9] cursor-pointer hover:text-[#FC4ECF] transition-color duration-200 flex gap-x-1 relative'}>
        {'Screenplays'}
        <p className='text-[12px] text-start scroll-m-20 absolute right-[-12%] top-[-8%]'>{user?.projects.length}</p>
      </div>
      <div onClick={() => setCurrentPage(2)} className={currentPage === 2 ? 'text-xl mx-2 text-[#FC4ECF] font-body cursor-pointer hover:text-[#FFFBE9] transition-color duration-200 bold flex gap-x-1 relative' : 'text-xl font-body text-[#FFFBE9] cursor-pointer hover:text-[#FC4ECF] transition-color duration-200 flex gap-x-1 relative'}>
        {'About'}
      </div>
      <div onClick={() => setCurrentPage(3)} className={currentPage === 3 ? 'text-xl mx-2 text-[#FC4ECF] font-body cursor-pointer hover:text-[#FFFBE9] transition-color duration-200 bold flex gap-x-1 relative' : 'text-xl font-body text-[#FFFBE9] cursor-pointer hover:text-[#FC4ECF] transition-color duration-200 flex gap-x-1 relative'}>
        {'Library'}
        <p className='text-[12px] text-start scroll-m-20 absolute right-[-22%] top-[-8%]'>{user?.read.length + user?.saved.length}</p>
      </div>
    </div>
  )
}
