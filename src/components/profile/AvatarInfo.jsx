import { useState } from 'react'
import { updateUser } from '../../services/user'
import { user as currentUser } from '../../utils/user'

const Badges = ({ isOpen, setIsOpen, badges }) => {
  return (
    <>
      <p onClick={() => setIsOpen(!isOpen)} className='text-end underline cursor-pointer hover:text-[#FC4ECF] active:text-black transition-color duration-200'>{!isOpen ? 'See all' : 'Cancel'}</p>
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

export const AvatarInfo = ({ user, setUser, setErrorType, setErrorMessage }) => {

  //! Mandatory information
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastname] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [email, setEmail] = useState('')

  //* Optional information
  const [location, setLocation] = useState('')
  const [website, setWebsite] = useState('')
  const [badges, setBadges] = useState(currentUser.badges.slice(0, 3))

  const [edit, setEdit] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleSubmit = async () => {

    const updateObj = {
      firstname: firstname === '' ? user.firstname : firstname,
      lastname: lastname === '' ? user.lastname : lastname,
      birthdate: birthdate === '' ? user.birthdate : birthdate,
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
          <div className="flex flex-col bg-white px-10 pt-5 gap-y-5">
            <ul className='flex flex-col gap-y-2'>
              <li className='border-b font-body text-sm px-2'>{user?.birthdate.substring(0, 10) || birthdate}</li>
              <li className='border-b font-body text-sm px-2'>{user?.location || location}</li>
              <li className='border-b font-body text-sm px-2'>{user?.email}</li>
              <li className='border-b font-body text-sm px-2'>
                <a href={user?.website.url || ''}>{user?.website.title || ''}</a>
              </li>
            </ul>
            <div className="flex flex-col">
              <h1 className='font-body text-lg'>Milestones</h1>
              <div className='w-full'>
                <Badges isOpen={isOpen} setIsOpen={setIsOpen} badges={badges} />
                <div className="flex justify-between mt-5">
                  <button onClick={() => setEdit(true)} className='h-12 p-2 text-white bg-[#FC4ECF] border border-[#FC4ECF] w-full rounded-md hover:bg-white hover:text-[#FC4ECF] active:bg-[#FC4ECF] active:text-white transition-color duration-200' >
                    Edit profile
                  </button>
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
                  <input className='border-b focus:ring-0 focus:outline-none w-full font-body text-sm px-2' type="text" placeholder={String(user.firstname)} value={firstname} onChange={({ target }) => setFirstName(target.value)} />
                </li>
                <li>
                  <input className='border-b focus:ring-0 focus:outline-none w-full font-body text-sm px-2' type="text" placeholder={String(user.lastname)} value={lastname} onChange={({ target }) => setLastname(target.value)} />
                </li>
                <li>
                  <input className='border-b focus:ring-0 focus:outline-none w-full font-body text-sm px-2' type="date" placeholder={String(user.birthdate)} value={birthdate} onChange={({ target }) => setBirthdate(target.value)} />
                </li>
                <li>
                  <input className='border-b focus:ring-0 focus:outline-none w-full font-body text-sm px-2' type="text" placeholder={String(user.location)} value={location} onChange={({ target }) => setLocation(target.value)} />
                </li>
                <li>
                  <input className='border-b focus:ring-0 focus:outline-none w-full font-body text-sm px-2' type="text" placeholder={String(user.email)} value={email} onChange={({ target }) => setEmail(target.value)} />
                </li>
                <li className='flex gap-x-2 w-full overflow-x-hidden'>
                  <input className='border-b w-1/2 focus:ring-0 focus:outline-none font-body text-sm px-2' type="text" placeholder={String(user.website.url)} value={website.url} onChange={({ target }) => setWebsite({ ...website, url: target.value })} />
                  <input className='border-b w-1/2 focus:ring-0 focus:outline-none font-body text-sm px-2' type="text" placeholder={String(user.website.title)} value={website.title} onChange={({ target }) => setWebsite({ ...website, title: target.value })} />
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
