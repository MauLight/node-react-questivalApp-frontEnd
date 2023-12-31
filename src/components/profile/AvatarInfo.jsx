import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { updateUser } from '../../services/user'
import { user as currentUser } from '../../utils/user'

const Badges = ({ isOpen, setIsOpen, badges }) => {
  return (
    <>
      <div className="flex justify-between">
        <h1 className='font-body text-lg text-[#FFFBE9]'>Achievements</h1>
        <p onClick={() => setIsOpen(!isOpen)} className='text-end underline text-[#FFFBE9] cursor-pointer hover:text-[#FC4ECF] active:text-black transition-color duration-200'>{!isOpen ? 'See all' : 'Cancel'}</p>
      </div>
      <div className="flex flex-wrap justify-between mt-2">
        {
          !isOpen ? (
            badges.map(elem => (
              <img key={elem} src={elem} className='w-[84px] h-[84px] object-cover' />
            ))
          )
            :
            (
              currentUser.badges.map(elem => (
                <img key={elem} src={elem} className='w-[84px] h-[84px] object-cover' />
              ))
            )
        }
      </div>
    </>
  )
}

export const AvatarInfo = ({
  myUser,
  myId,
  user,
  setUser,
  setErrorType,
  setErrorMessage,
  myProfile,
  following,
  setFollowing
}) => {

  //! Mandatory information
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')

  //* Optional information
  const [location, setLocation] = useState('')
  const [website, setWebsite] = useState('')
  // eslint-disable-next-line no-unused-vars
  const [badges, setBadges] = useState(currentUser.badges.slice(0, 3))

  const [edit, setEdit] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const queryClient = useQueryClient()
  const followMutation = useMutation({
    mutationFn: (userToFollowId) => axios.put('http://localhost:3001/api/users', { userToFollowId, myId })
      .then(res => console.log(res)),
    onSuccess: () => queryClient.invalidateQueries('allUsers')
  })

  const unfollowMutation = useMutation({
    mutationFn: (userToUnfollowId) => axios.post('http://localhost:3001/api/users/update', { userToUnfollowId, myId })
      .then(res => console.log(res)),

    onSuccess: () => queryClient.invalidateQueries('allUsers')
  })

  const handleFollow = (userToFollowId) => {
    followMutation.mutate(userToFollowId)
    setFollowing(myUser.following.find(elem => elem.id === user.id))
  }

  const handleUnfollow = (userToUnfollowId) => {
    unfollowMutation.mutate(userToUnfollowId)
    setFollowing(myUser.following.find(elem => elem.id === user.id))
  }

  const handleSubmit = async () => {

    const updateObj = {
      firstname: firstname === '' ? user.firstname : firstname,
      lastname: lastname === '' ? user.lastname : lastname,
      email: email === '' ? user.email : email,
      location: location === '' ? user.location : location,
      website: website === '' ? user.website : website
    }

    try {
      const updatedUser = await updateUser(user.id, updateObj)
      console.log(updatedUser)
      setUser(updatedUser)
      localStorage.setItem('QuestivalUser', JSON.stringify(updatedUser))
      setEdit(false)
      setErrorType('add')
      setErrorMessage('User updated succesfully!')
      setTimeout(() => setErrorMessage(null), 5000)
    }
    catch (error) {
      console.log(error)
      setErrorType('error')
      setErrorMessage(error)
      setTimeout(() => setErrorMessage(null), 5000)
    }
  }

  return (
    <>
      {
        !edit ? (
          <div className="flex flex-col bg-[#181818] px-10 pt-5 gap-y-5">
            <h1 className='font-body text-[#FFFBE9] text-sm my-2 italic'>{'I am a sexy piece of meat.'}</h1>
            <ul className='flex flex-col gap-y-3 mb-2'>
              <li className='border-b border-[#FFFBE9] font-body text-[#FFFBE9] text-sm px-2'>{user?.location || location}</li>
              <li className='border-b border-[#FFFBE9] font-body text-[#FFFBE9] text-sm px-2'>{user?.email}</li>
              <li className='border-b border-[#FFFBE9] font-body text-[#FFFBE9] text-sm px-2'>
                <a href=''>url</a>
              </li>
            </ul>
            <div>
              <div className="flex justify-between items-center">
                <p className='font-body text-[#FFFBE9] text-sm'>{'Stories read'}</p>
                <p className='font-body text-[#FFFBE9] text-sm'>{user?.read.length}</p>
              </div>
              <div className="flex justify-between items-center">
                <p className='font-body text-[#FFFBE9] text-sm'>{'Favorite stories'}</p>
                <p className='font-body text-[#FFFBE9] text-sm'>{user?.favorites.length}</p>
              </div>
              <div className="flex justify-between items-center">
                <p className='font-body text-[#FFFBE9] text-sm'>{'Saved for later'}</p>
                <p className='font-body text-[#FFFBE9] text-sm'>{user?.saved.length}</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className='w-full'>
                <Badges isOpen={isOpen} setIsOpen={setIsOpen} badges={badges} />
                <div className="flex justify-between mt-5">
                  {
                    myProfile ? (
                      <button onClick={() => setEdit(true)} className='h-12 p-2 text-white bg-[#FC4ECF] border border-[#FC4ECF] w-full rounded-md hover:bg-white hover:text-[#FC4ECF] active:bg-[#FC4ECF] active:text-white transition-color duration-200' >
                        Edit profile
                      </button>
                    )
                      :
                      (
                        <>
                          {
                            following ? (
                              <button onClick={() => handleUnfollow(user?.id)} className='h-12 p-2 text-white bg-[#FC4ECF] border border-[#FC4ECF] w-full rounded-md hover:bg-white hover:text-[#FC4ECF] active:bg-[#FC4ECF] active:text-white transition-color duration-200' >
                                Unfollow
                              </button>
                            )
                              :
                              (
                                <button onClick={() => handleFollow(user?.id)} className='h-12 p-2 text-white bg-[#FC4ECF] border border-[#FC4ECF] w-full rounded-md hover:bg-white hover:text-[#FC4ECF] active:bg-[#FC4ECF] active:text-white transition-color duration-200' >
                                  Follow
                                </button>
                              )
                          }
                        </>
                      )
                  }
                </div>
              </div>
            </div>
          </div>
        )
          :
          (
            <div className="flex flex-col bg-white px-10 pt-5 gap-y-5">
              <ul className='flex flex-col gap-y-2'>
                <li>
                  <input className='border-b focus:ring-0 focus:outline-none w-full font-body text-sm px-2' type="text" placeholder={String(user?.firstname)} value={firstname} onChange={({ target }) => setFirstName(target.value)} />
                </li>
                <li>
                  <input className='border-b focus:ring-0 focus:outline-none w-full font-body text-sm px-2' type="text" placeholder={String(user?.lastname)} value={lastname} onChange={({ target }) => setLastname(target.value)} />
                </li>
                <li>
                  <input className='border-b focus:ring-0 focus:outline-none w-full font-body text-sm px-2' type="text" placeholder={String(user?.location)} value={location} onChange={({ target }) => setLocation(target.value)} />
                </li>
                <li>
                  <input className='border-b focus:ring-0 focus:outline-none w-full font-body text-sm px-2' type="text" placeholder={String(user?.email)} value={email} onChange={({ target }) => setEmail(target.value)} />
                </li>
                <li className='flex gap-x-2 w-full overflow-x-hidden'>
                  <input className='border-b w-1/2 focus:ring-0 focus:outline-none font-body text-sm px-2' type="text" placeholder={String(user?.website.url)} value={website.url} onChange={({ target }) => setWebsite({ ...website, url: target.value })} />
                  <input className='border-b w-1/2 focus:ring-0 focus:outline-none font-body text-sm px-2' type="text" placeholder={String(user?.website.title)} value={website.title} onChange={({ target }) => setWebsite({ ...website, title: target.value })} />
                </li>
              </ul>
              <div className="flex flex-col">
                <div className="flex gap-x-2 justify-between mt-5">
                  <button onClick={handleSubmit} className='h-12 p-2 text-white bg-[#FC4ECF] border border-[#FC4ECF] w-full rounded-md hover:bg-white hover:text-[#FC4ECF] active:bg-[#FC4ECF] active:text-white transition-color duration-200' >
                    Save
                  </button>
                  <button onClick={() => setEdit(false)} className='h-12 p-2 text-white bg-[#FC4ECF] border border-[#FC4ECF] w-full rounded-md hover:bg-white hover:text-[#FC4ECF] active:bg-[#FC4ECF] active:text-white transition-color duration-200' >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )
      }
    </>
  )
}
