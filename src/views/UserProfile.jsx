import { useState } from 'react'

//! Components
import { Avatar } from '../components/profile/Avatar'
import { ParallaxHeader } from '../components/profile/ParallaxHeader'
import { AvatarInfo } from '../components/profile/AvatarInfo'
import { FilterButton } from '../components/profile/FilterButton'
import { ScreenplayCard } from '../components/profile/ScreenplayCard'

export const UserProfile = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='wrapper w-full h-[100vh] overflow-y-auto overflow-x-hidden'>
      <ParallaxHeader user={'user'} />
      <div className="flex px-10 pt-20 pb-5 bg-white">
        <h1 className='text-5xl font-body uppercase'>_Portfolio</h1>
      </div>
      <div className="flex bg-white pb-20">
        <div className="w-1/5 pt-[7vh]">
          <Avatar user={'user'} />
          <AvatarInfo user={'user'} />
        </div>
        <div className="w-4/5 bg-white overflow-x-hidden">
          <FilterButton isOpen={isOpen} setIsOpen={setIsOpen} />
          <ScreenplayCard project={'project'} />
        </div>
      </div>
    </div>
  )
}


