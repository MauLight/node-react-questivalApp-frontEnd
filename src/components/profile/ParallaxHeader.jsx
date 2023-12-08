import parallax_02 from '../../assets/wall2.jpg'

export const ParallaxHeader = () => {
  return (
    <div className="header relative justify-center items-center flex h-[700px]">
      <img src={parallax_02} className='background absolute w-screen h-screen object-cover opacity-60 transition-all duration-200' />
      <div className="flex justify-center items-center w-full">
        <div className="flex flex-col w-full justify-center items-center">
          <h1 className='text-6xl uppercase text-white mt-[200px]'>USER.FIRSTNAME + USER.LASTNAME</h1>
          <div className="flex w-full h-full justify-start items-end mt-[150px]">
            <ul className='mx-10 text-xl'>
              <li className='text-white font-body'><a href=''>instagram</a></li>
              <li className='text-white font-body'><a href=''>linkedin</a></li>
              <li className='text-white font-body'><a href=''>discord</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
