import { useEffect, useState } from 'react'
import { user as utilUser } from '../utils/user'
import { useNavigate } from 'react-router-dom'

//! Components
import { Avatar } from '../components/profile/Avatar'
import { ParallaxHeader } from '../components/profile/ParallaxHeader'
import { AvatarInfo } from '../components/profile/AvatarInfo'
import { FilterButton } from '../components/profile/FilterButton'
import { ScreenplayCard } from '../components/profile/ScreenplayCard'

export const UserProfile = ({ user, setUser, setErrorType, setErrorMessage }) => {

  const [isOpen, setIsOpen] = useState(false)
  const [sortedList, setSortedList] = useState(utilUser.projects)
  const navigate = useNavigate()

  useEffect(() => {

    const currentUser = localStorage.getItem('QuestivalUser')
    if (!currentUser) {
      navigate('/login')
    }
  },[])

  return (
    <div className='wrapper w-full h-[100vh] overflow-y-auto overflow-x-hidden'>
      <ParallaxHeader user={utilUser} />
      <div className="flex px-10 pt-20 bg-white justify-between">
        <h1 className='text-[50px] font-body font-bold uppercase pb-20'>_Portfolio</h1>
        <div className="flex justify-center items-end w-full gap-x-20">
          <h1 className='text-2xl font-body underline cursor-pointer hover:text-[#FC4ECF] transition-color duration-200 hover:italic'>Screenplays</h1>
          <h1 className='text-2xl font-body underline cursor-pointer hover:text-[#FC4ECF] transition-color duration-200 hover:italic'>About</h1>
          <h1 className='text-2xl font-body underline cursor-pointer hover:text-[#FC4ECF] transition-color duration-200 hover:italic'>Activity</h1>
        </div>
      </div>
      <div className="flex bg-white pb-20 w-screen">
        <div className='w-1/5'>
          <Avatar user={user} setUser={setUser} setErrorMessage={setErrorMessage} setErrorType={setErrorType} />
          <AvatarInfo user={user} setUser={setUser} setErrorMessage={setErrorMessage} setErrorType={setErrorType} />
        </div>
        <div className="w-4/5">
          <FilterButton isOpen={isOpen} setIsOpen={setIsOpen} sortedList={sortedList} setSortedList={setSortedList} />
          <div className="flex gap-x-10 mt-10 pr-10 overflow-x-scroll">
            {
              sortedList.map(project => <ScreenplayCard key={project.id} project={project} />)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

