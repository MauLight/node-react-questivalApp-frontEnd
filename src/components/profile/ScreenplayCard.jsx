import React from 'react'

export const ScreenplayCard = ({ user }) => {
  return (
    <div className="flex bg-[#0b1014] rounded-md overflow-hidden h-[65.4vh] w-[80%]">

      <div className='h-full min-w-[20vw]'>
        <img src='https://r4.wallpaperflare.com/wallpaper/846/216/1006/godzilla-movies-movie-poster-godzilla-king-of-the-monsters-wallpaper-d67b2ff76f7e0423ad9f90305992912b.jpg' className='w-auto h-full object-cover' />
      </div>
      <div className='flex flex-col gap-y-[122px] p-5'>
        <div className="flex justify-end">
          <p className='border border-white p-4 text-white rounded-md font-body'>Rating</p>
        </div>
        <div className="flex flex-col gap-y-5">
          <div className="flex gap-x-2">
            <p className='border border-white py-1 px-3 text-[10px] text-white rounded-full font-body'>Chip</p>
            <p className='border border-white py-1 px-3 text-[10px] text-white rounded-full font-body'>Chip</p>
            <p className='border border-white py-1 px-3 text-[10px] text-white rounded-full font-body'>Chip</p>
          </div>
          <h1 className='text-6xl font-body text-white uppercase'>Title goes here</h1>
          <p className='text-xl font-body text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium numquam magnam, obcaecati eaque ex officiis consequuntur voluptatibus assumenda quia neque placeat minus. Qui itaque officiis eaque quos cupiditate, omnis quas?</p>
        </div>
        <div className="flex justify-end">
          <button className='h-12 w-[10vw] p-2 text-white bg-[#FC4ECF] border border-[#FC4ECF] w-full rounded-md hover:bg-[#0b1014] hover:text-[#FC4ECF] active:bg-[#FC4ECF] active:text-white transition-color duration-200' >
                            Read now
          </button>
        </div>
      </div>

    </div>
  )
}
