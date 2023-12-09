import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeInSmall } from '../../variants'
import axios from 'axios'
import { updateUser } from '../../services/user'

export const Avatar = ({ user, setUser, setErrorType, setErrorMessage }) => {

  const [cloudinaryAvatarImage, setCloudinaryAvatarImage] = useState('https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png')

  const handleAvatar = async (e) => {

    e.preventDefault()

    const formData = new FormData()
    formData.append('file', e.target.files[0])
    formData.append('upload_preset', 'xksqk2bc')

    const { data } = await axios.post(
      'https://api.cloudinary.com/v1_1/maulight/image/upload',
      formData
    )
    console.log(data)
    setCloudinaryAvatarImage(data.secure_url)


    try {
      const updatedUser = await updateUser(user.id, { ...user, avatar: data.secure_url })
      console.log(updatedUser)
      setUser(updatedUser)
      localStorage.setItem('QuestivalUser', JSON.stringify(updatedUser))
      setErrorType('add')
      setErrorMessage('Profile pic updated succesfully!')
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
    <div className="flex bg-white pt-[103px]">
      <div className="flex flex-col px-10 justify-end items-center relative">
        <div className="flex w-full h-full overflow-hidden">
          <div className='absolute h-full w-[79%] z-40'>


            <label>
              <div className='h-full w-full cursor-pointer'>
              </div>
              <input
                type="file"
                name="upload-avatar"
                onChange={(e) => handleAvatar(e)}
                className="w-0 h-0"
              />
            </label>

          </div>
          <div className="absolute h-full w-[79%] bg-gradient-to-t from-black to-transparent opacity-50"></div>
          <img className='w-[20vw] h-[33.6vh] object-cover' src={user?.avatar === '' ? cloudinaryAvatarImage : user.avatar} />
        </div>
        <motion.div
          variants={fadeInSmall('up', 0.6)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className="flex flex-col absolute gap-y-1">
          <div className="flex flex-col justify-center items-center">
            <h1 className='text-md uppercase text-white'>{user?.firstname + ' ' + user?.lastname}</h1>
          </div>
          <div className="flex gap-x-2 justify-center items-center pb-5">
            <div className="flex flex-col justify-center items-center">
              <h1 className='font-body text-sm  text-white'>12</h1>
              <h1 className='font-body text-white text-[10px]'>screenplays</h1>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className='font-body  text-sm text-white'>136</h1>
              <h1 className='font-body text-white text-[10px]'>following</h1>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className='font-body text-sm  text-white'>27</h1>
              <h1 className='font-body text-white text-[10px]'>followers</h1>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="flex"></div>
    </div>
  )
}
