import React from 'react'

export const ScreenplayCard = ({ project }) => {
  return (
    <div className="flex bg-[#0b1014] rounded-md h-[65.4vh] min-w-[1200px] mb-0 overflow-hidden">
      <div className='h-full w-auto'>
        <img src={project.poster} className='w-[30vw] h-full object-cover' />
      </div>
      <div className='flex flex-col gap-y-[116px] p-5 w-full'>
        <div className="flex justify-end">
          <p className='border border-white px-4 py-2 text-white rounded-md font-body'>Ranking</p>
        </div>
        <div className="flex flex-col gap-y-5">
          <div className="flex gap-x-2">
            {
              project.genres.map(elem => <p key={elem} className='border border-white py-1 px-3 text-[10px] text-white rounded-full font-body'>{elem}</p>)
            }
          </div>
          <h1 className='w-[40vw] text-[56px] font-body text-white uppercase truncate'>{project.title}</h1>
          <p className='text-xl font-body text-white'>{project.logline}</p>
        </div>
        <div className="flex justify-end">
          <button className='h-12 w-[10vw] p-2 text-white bg-[#FC4ECF] border border-[#FC4ECF] rounded-md hover:bg-[#0b1014] hover:text-[#FC4ECF] active:bg-[#FC4ECF] active:text-white transition-color duration-200' >
                            Read now
          </button>
        </div>
      </div>

    </div>
  )
}
