import React, { useState } from 'react'
import { FilterButton } from './FilterButton'
import { ScreenplayCard } from './ScreenplayCard'

const ScreenplayMenu = ({ currentPage, setCurrentPage }) => {
  return (
    <div className="flex justify-center items-end w-full gap-x-20">
      <h1 onClick={() => setCurrentPage(1)} className={currentPage === 1 ? 'text-xl text-[#FC4ECF] font-body underline cursor-pointer hover:text-black transition-color duration-200 italic bold' : 'text-lg font-body cursor-pointer hover:text-[#FC4ECF] transition-color duration-200'}>Read Screenplays</h1>
      <h1 onClick={() => setCurrentPage(2)} className={currentPage === 2 ? 'text-xl text-[#FC4ECF] font-body underline cursor-pointer hover:text-black transition-color duration-200 italic bold' : 'text-lg font-body cursor-pointer hover:text-[#FC4ECF] transition-color duration-200'}>Favorite Screenplays</h1>
      <h1 onClick={() => setCurrentPage(3)} className={currentPage === 3 ? 'text-xl text-[#FC4ECF] font-body underline cursor-pointer hover:text-black transition-color duration-200 italic bold' : 'text-lg font-body cursor-pointer hover:text-[#FC4ECF] transition-color duration-200'}>Saved Screenplays</h1>
    </div>
  )
}

export const Activity = ({
  sortedReadList,
  setSortedReadList,
  sortedFavList,
  setSortedFavList,
  sortedSavedList,
  setSortedSavedList
}) => {

  const [isOpen, setIsOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <>

      <div className="flex flex-col overflow-y-scroll">
        {
          currentPage === 1 && (
            <div>
              <div className="flex gap-x-5 justify-end items-center mr-10">
                <ScreenplayMenu currentPage={currentPage} setCurrentPage={setCurrentPage} />
                <FilterButton isOpen={isOpen} setIsOpen={setIsOpen} sortedList={sortedReadList} setSortedList={setSortedReadList} />
              </div>
              <div className="flex gap-x-10 mt-6 pr-10 overflow-x-scroll">
                {sortedReadList.map(project => <ScreenplayCard key={project.id} project={project} />)}
              </div>
            </div>
          )
        }

        {
          currentPage === 2 && (
            <div>
              <div className="flex gap-x-5 justify-end items-center mr-10">
                <ScreenplayMenu currentPage={currentPage} setCurrentPage={setCurrentPage} />
                <FilterButton isOpen={isOpen} setIsOpen={setIsOpen} sortedList={sortedFavList} setSortedList={setSortedFavList} />
              </div>
              <div className="flex gap-x-10 mt-6 pr-10 overflow-x-scroll">
                {sortedFavList.map(project => <ScreenplayCard key={project.id} project={project} />)}
              </div>
            </div>
          )
        }

        {
          currentPage === 3 && (
            <div>
              <div className="flex gap-x-5 justify-end items-center mr-10">
                <ScreenplayMenu currentPage={currentPage} setCurrentPage={setCurrentPage} />
                <FilterButton isOpen={isOpen} setIsOpen={setIsOpen} sortedList={sortedSavedList} setSortedList={setSortedSavedList} />
              </div>
              <div className="flex gap-x-10 mt-6 pr-10 overflow-x-scroll">
                {sortedSavedList.map(project => <ScreenplayCard key={project.id} project={project} />)}
              </div>
            </div>
          )
        }
      </div>
    </>
  )
}
