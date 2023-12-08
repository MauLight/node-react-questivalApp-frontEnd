
export const AvatarInfo = ({ user }) => {
  return (
    <div className="flex flex-col bg-white px-10 pt-5 gap-y-5">
      <ul className='flex flex-col gap-y-2'>
        <li className='border-b font-body text-sm px-2'>user.birthdate</li>
        <li className='border-b font-body text-sm px-2'>user.location</li>
        <li className='border-b font-body text-sm px-2'>user.email</li>
        <li className='border-b font-body text-sm px-2'>
          <a href='/'>user.website</a>
        </li>
      </ul>
      <div className="flex flex-col">
        <h1 className='font-body text-lg'>Milestones</h1>
        <div className='w-full'>
          <p className='text-end underline'>See all</p>
          <div className="flex justify-between">
            <p>badge.id</p>
            <p>badge.id</p>
            <p>badge.id</p>
          </div>
          <div className="flex justify-between mt-5">
            <button className='h-12 p-2 text-white bg-[#FC4ECF] border border-[#FC4ECF] w-full rounded-md hover:bg-white hover:text-[#FC4ECF] active:bg-[#FC4ECF] active:text-white transition-color duration-200' >
                            Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
