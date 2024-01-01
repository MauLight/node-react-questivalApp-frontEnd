import { useState } from 'react'
import { user as utilUser } from '../utils/user'
// import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

//! Components
import { Avatar } from '../components/profile/Avatar'
import { ParallaxHeader } from '../components/profile/ParallaxHeader'
import { AvatarInfo } from '../components/profile/AvatarInfo'
import { FilterButton } from '../components/profile/FilterButton'
import { ScreenplayCard } from '../components/profile/ScreenplayCard'
import { Menu } from '../components/profile/Menu'
import { fadeInSmall } from '../variants'
import { ProfileInfo } from '../components/profile/ProfileInfo'
import { Activity } from '../components/profile/Activity'

export const UserProfile = ({ myUser, user, setUser, setErrorType, setErrorMessage, myProfile, following, setFollowing }) => {

  const [isOpen, setIsOpen] = useState(false)
  const [sortedList, setSortedList] = useState(utilUser.projects)
  const [sortedReadList, setSortedReadList] = useState(utilUser.read)
  const [sortedFavList, setSortedFavList] = useState(utilUser.favorites)
  const [sortedSavedList, setSortedSavedList] = useState(utilUser.saved)
  const [currentPage, setCurrentPage] = useState(1)
  // const navigate = useNavigate()

  // useEffect(() => {

  //   const currentUser = localStorage.getItem('QuestivalUser')
  //   setUser(JSON.parse(currentUser))
  //   if (!currentUser) {
  //     navigate('/login')
  //   }
  // }, [])

  return (
    <div className='wrapper w-full h-[100vh] overflow-y-auto overflow-x-hidden'>
      <ParallaxHeader user={user} />
      <div className="flex px-10 pt-32 justify-between bg-[#181818]">
        <h1 className='text-[40px] font-body font-bold text-[#FFFBE9]'>_Portfolio</h1>
        <Menu currentPage={currentPage} setCurrentPage={setCurrentPage} user={user} />
      </div>
      <div className="flex bg-[#181818] pb-20 w-screen">
        <div className='w-[20%] overflow-y-hidden'>
          <Avatar user={user} setUser={setUser} setErrorMessage={setErrorMessage} setErrorType={setErrorType} />
          <AvatarInfo myUser={myUser} myId={myUser.id} user={user} setUser={setUser} setErrorMessage={setErrorMessage} setErrorType={setErrorType} myProfile={myProfile} following={following} setFollowing={setFollowing} />
        </div>
        <div className="w-[80%] h-full overflow-y-hidden">
          {
            currentPage === 1 && (
              <div
              >
                <div className="my-10">
                  <FilterButton isOpen={isOpen} setIsOpen={setIsOpen} sortedList={sortedList} setSortedList={setSortedList} />
                </div>
                <div className="flex flex-col gap-y-10 mt-5 pr-10 overflow-y-scroll">
                  {sortedList.map(project => <ScreenplayCard key={project.id} project={project} />)}
                </div>
              </div>
            )
          }
          {
            currentPage === 2 && (
              <motion.div
                variants={fadeInSmall('left', 0.2)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: true, amount: 0.7 }}
                className='mr-10 mt-[11.2vh] h-[73.2vh] overflow-y-scroll rounded-md'>
                <ProfileInfo />
              </motion.div>
            )
          }
          {
            currentPage === 3 && (
              <div
                className='mr-10 mt-10 flex gap-y-20 rounded-md'>
                <Activity
                  user={user}
                  sortedReadList={sortedReadList}
                  setSortedReadList={setSortedReadList}
                  sortedFavList={sortedFavList}
                  setSortedFavList={setSortedFavList}
                  sortedSavedList={sortedSavedList}
                  setSortedSavedList={setSortedSavedList}
                />
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}


