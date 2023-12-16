import React, { useState } from 'react'
import { user } from '../../utils/user'

export const ProfileInfo = () => {

  const [introduction, setIntroduction] = useState('')
  const [education, setEducation] = useState('')
  const [experience, setExperience] = useState('')

  return (
    <div
      className='flex flex-col gap-y-10 w-full bg-[#10100e] py-10'
    >
      <div className="flex flex-col gap-y-4 px-2 sm:px-10 w-full py-5">
        <label className='font-body text-xl text-[#FC4ECF]' htmlFor='summary'>Introduction</label>
        <div className="flex text-center items-center h-[44vh]">
          <textarea id='summary' className='glass p-4 rounded-md font-body text-[#aaaaaa] bg-transparent text-2xl w-full h-full focus:ring-0 focus:outline-none' value={introduction} onChange={({ target }) => setIntroduction(target.value)} />
        </div>
      </div>
      <div className="flex flex-col gap-y-4 px-2 sm:px-10 w-full py-5">
        <label className='font-body text-xl text-[#FC4ECF]' htmlFor='summary'>Education</label>
        <div className="flex text-center items-center h-[44vh]">
          <textarea id='summary' className='glass p-4 rounded-md font-body text-[#aaaaaa] bg-transparent text-2xl w-full h-full focus:ring-0 focus:outline-none' value={education} onChange={({ target }) => setEducation(target.value)} />
        </div>
      </div>
      <div className="flex flex-col gap-y-4 px-2 sm:px-10 w-full py-5">
        <label className='font-body text-xl text-[#FC4ECF]' htmlFor='summary'>Experience</label>
        <div className="flex text-center items-center h-[44vh]">
          <textarea id='summary' className='glass p-4 rounded-md font-body text-[#aaaaaa] bg-transparent text-2xl w-full h-full focus:ring-0 focus:outline-none' value={experience} onChange={({ target }) => setExperience(target.value)} />
        </div>
      </div>
      <div className="flex flex-col gap-y-4 px-2 sm:px-10 w-full py-5">
        <label className='font-body text-xl text-[#FC4ECF]' htmlFor='summary'>Certificates</label>
        <div className="flex flex-wrap gap-x-5 text-center items-center">
          {
            user.certificates.map(elem => (
              <img key={elem} src={elem} className='w-1/4 h-auto object-cover' />
            ))
          }
        </div>
      </div>
    </div>
  )
}
