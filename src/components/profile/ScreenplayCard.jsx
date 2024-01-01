import React from 'react'

export const ScreenplayCard = ({ project }) => {
  return (
    <div className="flex bg-[#0b1014] rounded-md h-[60vh] w-[1200px] mb-0 overflow-hidden">
      <div className='h-full w-auto'>
        <img src={project.poster} className='w-[25vw] h-full object-cover' />
      </div>
      <div className='flex flex-col gap-y-[60px] p-5 w-full'>
        <div className="flex justify-end">
          <p className='border border-[#FFFBE9] px-4 py-2 text-[#FFFBE9] rounded-md font-body'>Ranking</p>
        </div>
        <div className="flex flex-col gap-y-5">
          <div className="flex gap-x-2">
            {
              project.genres.map(elem => <p key={elem} className='border border-[#FFFBE9] py-1 px-3 text-[10px] text-[#FFFBE9] rounded-full font-body'>{elem}</p>)
            }
          </div>
          <h1 className='pr-44 w-[40vw] text-[56px] font-body text-[#FFFBE9] uppercase truncate'>{project.title}</h1>
          <p className='pr-44 text-xl font-body text-[#FFFBE9]'>{project.logline}</p>
        </div>
        <div className="flex gap-x-4 justify-end">
          <button className='h-10 w-[10vw] p-2 text-[#FFFBE9] bg-[#FC4ECF] border border-[#FC4ECF] rounded-md hover:bg-[#0b1014] hover:text-[#FC4ECF] active:bg-[#FC4ECF] active:text-[#FFFBE9] transition-color duration-200' >
            Read now
          </button>
          <button className='h-10 w-[8vw] p-2 text-[#FFFBE9] bg-transparent border border-[#FFFBE9] rounded-md hover:text-[#FC4ECF] hover:border-[#FC4ECF] active:bg-[#FC4ECF] active:text-[#FFFBE9] transition-color duration-200' >
            + Save for later
          </button>
        </div>
      </div>

    </div>
  )
}
