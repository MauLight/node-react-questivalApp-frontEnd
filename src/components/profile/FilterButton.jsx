import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeInSmall } from '../../variants'

export const FilterButton = ({ isOpen, setIsOpen, sortedList, setSortedList }) => {

  const [menu, setMenu] = useState('hide')

  const handleList = (num) => {

    if (num === '1') {
      const alphaList = sortedList.sort((a, b) => a.title.localeCompare(b.title))
      setSortedList(alphaList)
      setIsOpen(!isOpen)
      console.log(sortedList)
    }
    if (num === '2') {
      const newList = sortedList.sort((a, b) => b.pos - a.pos)
      setSortedList(newList)
      setIsOpen(!isOpen)
      console.log(sortedList)
    }
    if (num === '3') {
      const oldList = sortedList.sort((a, b) => a.pos - b.pos)
      setSortedList(oldList)
      setIsOpen(!isOpen)
      console.log(sortedList)
    }

  }

  return (
    <div>
      <button className='w-44 px-2 py-5 flex justify-between items-center hover:bg-[#FC4ECF] hover:text-white transition-all duration-200 rounded-t-md' onClick={() => menu === 'hide' ? setMenu('show') : setMenu('hide')}>
        <p className='font-body'>Filters</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      <motion.div
        variants={fadeInSmall('down', 0.2)}
        initial='hidden'
        whileInView={menu}
        viewport={{ once: false, amount: 0.7 }}
        className="flex flex-col w-44 bg-[#FC4ECF] absolute rounded-b-md justify-start">
        <button className='text-start font-body text-white hover:text-[#FC4ECF] hover:bg-white px-4 py-5 transition-all duration-200' onClick={() => handleList('1')} >Alphabetically</button>
        <button className='text-start font-body text-white hover:text-[#FC4ECF] hover:bg-white px-4 py-5 transition-all duration-200' onClick={() => handleList('2')} >By Newest</button>
        <button className='text-start font-body text-white hover:text-[#FC4ECF] hover:bg-white px-4 py-5 transition-all duration-200' onClick={() => handleList('3')} >By Oldest</button>
        <button className='text-start font-body text-white hover:text-[#FC4ECF] hover:bg-white px-4 py-5 transition-all duration-200'>By Ranking</button>
      </motion.div>

    </div>
  )
}
