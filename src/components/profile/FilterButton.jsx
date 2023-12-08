import React from 'react'

export const FilterButton = ({ isOpen, setIsOpen }) => {
  return (
    <div>
      <button className='w-44 px-2 py-5 flex justify-between items-center' onClick={() => setIsOpen(!isOpen)}>
        <p className='font-body text-black'>Filters</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {
        isOpen && (
          <div className="flex flex-col w-44 bg-[#FC4ECF] absolute">
            <ul className='flex flex-col'>
              <li className='font-body text-white hover:text-[#FC4ECF] hover:bg-white px-2 py-5 transition-all duration-200'>Alphabetically</li>
              <li className='font-body text-white hover:text-[#FC4ECF] hover:bg-white px-2 py-5 transition-all duration-200'>By Newest</li>
              <li className='font-body text-white hover:text-[#FC4ECF] hover:bg-white px-2 py-5 transition-all duration-200'>By Oldest</li>
              <li className='font-body text-white hover:text-[#FC4ECF] hover:bg-white px-2 py-5 transition-all duration-200'>By Ranking</li>
            </ul>
          </div>
        )
      }
    </div>
  )
}
