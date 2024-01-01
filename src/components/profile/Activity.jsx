import React, { useState } from 'react'
import { ScreenplayCard } from './ScreenplayCard'

import { user as currentUser } from '../../utils/user'

const ScreenplayMenu = ({ currentPage, setCurrentPage, user }) => {

  console.log('These are the arrays', user)

  return (
    <div className="flex justify-start items-end w-full gap-x-10">
      <div onClick={() => setCurrentPage(1)} className={currentPage === 1 ? 'w-[5vw] flex gap-x-2 cursor-pointer justify-center text-sm text-center font-body text-[#FC4ECF] border border-[#FC4ECF] hover:text-[#FFFBE9] hover:border-[#FFFBE9] px-4 py-2 rounded-full transition-all duration-200 bold relative' : 'w-[5vw] flex gap-x-2 cursor-pointer justify-center text-sm text-center font-body border border-[#FC4ECF] hover:text-[#FC4ECF] text-[#FFFBE9] bg-[#FC4ECF] hover:border-[#FC4ECF] hover:bg-[#FFFBE9] px-4 py-2 rounded-full transition-all duration-200 relative'}>
        {'All'}
        <p className='text-[12px] text-start scroll-m-20'>{user?.favorites.length + user?.saved.length + user?.read.length}</p>
      </div>
      <div onClick={() => setCurrentPage(2)} className={currentPage === 2 ? 'w-[10vw] flex gap-x-2 cursor-pointer justify-center text-sm text-center font-body text-[#FC4ECF] border border-[#FC4ECF] hover:text-[#FFFBE9] hover:border-[#FFFBE9] px-4 py-2 rounded-full transition-all duration-200 bold relative' : 'w-[10vw] flex gap-x-2 cursor-pointer justify-center text-sm text-center font-body border border-[#FFFBE9] hover:text-[#FC4ECF] text-[#FFFBE9] hover:border-[#FC4ECF] px-4 py-2 rounded-full transition-all duration-200 relative'}>
        {'Read Screenplays'}
        <p className='text-[12px]'>{user?.read.length}</p>
      </div>
      <div onClick={() => setCurrentPage(3)} className={currentPage === 3 ? 'w-[10vw] flex gap-x-2 cursor-pointer justify-center text-sm text-center font-body text-[#FC4ECF] border border-[#FC4ECF] hover:text-[#FFFBE9] hover:border-[#FFFBE9] px-4 py-2 rounded-full transition-all duration-200 bold relative' : 'w-[10vw] flex gap-x-2 cursor-pointer justify-center text-sm text-center font-body border border-[#FFFBE9] hover:text-[#FC4ECF] text-[#FFFBE9] hover:border-[#FC4ECF] px-4 py-2 rounded-full transition-all duration-200 relative'}>
        {'Favorite Screenplays'}
        <p className='text-[12px] text-start scroll-m-20'>{user?.favorites.length}</p>
      </div>
      <div onClick={() => setCurrentPage(4)} className={currentPage === 4 ? 'w-[10vw] flex gap-x-2 cursor-pointer justify-center text-sm text-center font-body text-[#FC4ECF] border border-[#FC4ECF] hover:text-[#FFFBE9] hover:border-[#FFFBE9] px-4 py-2 rounded-full transition-all duration-200 bold relative' : 'w-[10vw] flex gap-x-2 cursor-pointer justify-center text-sm text-center font-body border border-[#FFFBE9] hover:text-[#FC4ECF] text-[#FFFBE9] hover:border-[#FC4ECF] px-4 py-2 rounded-full transition-all duration-200 relative'}>
        {'Saved Screenplays'}
        <p className='text-[12px] text-start scroll-m-20'>{user?.saved.length}</p>
      </div>
    </div>
  )
}

export const Activity = ({
  user
}) => {

  const [currentPage, setCurrentPage] = useState(1)
  // const [allScreenplays, setAllScreenplays] = useState([...user.read, ...user.favorites, ...user.saved])
  const [allScreenplays, setAllScreenplays] = useState([...currentUser.read, ...currentUser.favorites, ...currentUser.saved])

  console.log(allScreenplays)

  return (
    <>

      <div className="flex flex-col overflow-y-scroll">
        {
          currentPage === 1 && (
            <div>
              <div className="flex gap-x-5 justify-end items-center mb-10">
                <ScreenplayMenu user={user} currentPage={currentPage} setCurrentPage={setCurrentPage} />
              </div>
              <div className="flex flex-col gap-y-10">
                {allScreenplays.map(project => <ScreenplayCard key={project.id} project={project} />)}
              </div>
            </div>
          )
        }

        {
          currentPage === 2 && (
            <div>
              <div className="flex gap-x-5 justify-end items-center mb-10">
                <ScreenplayMenu user={user} currentPage={currentPage} setCurrentPage={setCurrentPage} />
              </div>
              <div className="flex flex-col gap-y-10">
                {currentUser.read.map(project => <ScreenplayCard key={project.id} project={project} />)}
              </div>
            </div>
          )
        }

        {
          currentPage === 3 && (
            <div>
              <div className="flex gap-x-5 justify-end items-center mb-10">
                <ScreenplayMenu user={user} currentPage={currentPage} setCurrentPage={setCurrentPage} />
              </div>
              <div className="flex flex-col gap-y-10">
                {currentUser.favorites.map(project => <ScreenplayCard key={project.id} project={project} />)}
              </div>
            </div>
          )
        }

        {
          currentPage === 4 && (
            <div>
              <div className="flex gap-x-5 justify-end items-center mb-10">
                <ScreenplayMenu user={user} currentPage={currentPage} setCurrentPage={setCurrentPage} />
              </div>
              <div className="flex flex-col gap-y-10">
                {currentUser.saved.map(project => <ScreenplayCard key={project.id} project={project} />)}
              </div>
            </div>
          )
        }
      </div>
    </>
  )
}