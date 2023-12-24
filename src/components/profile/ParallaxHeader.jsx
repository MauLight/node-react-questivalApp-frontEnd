import { motion } from 'framer-motion'
import { fadeIn, fadeInSmall } from '../../variants'
import parallax_02 from '../../assets/wall2.jpg'

export const ParallaxHeader = ({ user }) => {
  return (
    <div className="header relative justify-center items-center flex h-[800px] relative">
      <img src={parallax_02} className='background absolute w-screen h-screen object-cover opacity-50 transition-all duration-200 top-0' />
      <div className="flex justify-center items-center w-full h-full">
        <div className="flex flex-col w-full items-center h-full">
          <motion.h1
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true, amount: 0.7 }}
            className='mt-[300px]'>
            <div className="flex flex-col justify-between w-full items-center gap-y-10">
              <h1 className='glow text-8xl text-white'>
                {user?.firstname + ' ' + user?.lastname}
              </h1>
              <div className="flex gap-x-2 items-center justify-around pb-5 w-full">
                <div className="flex flex-col justify-center items-center">
                  <h1 className='font-body text-xl  text-white'>12</h1>
                  <h1 className='font-body text-white text-md'>screenplays</h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className='font-body  text-xl text-white'>136</h1>
                  <h1 className='font-body text-white text-md'>following</h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className='font-body text-xl  text-white'>27</h1>
                  <h1 className='font-body text-white text-md'>followers</h1>
                </div>
              </div>
            </div>
          </motion.h1>
          <motion.div
            variants={fadeInSmall('right', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true, amount: 0.7 }}
            className="flex w-full h-full justify-start items-end mb-[70px]">
            <ul className='mx-10 text-xl flex flex-col justify-center items-center gap-y-1'>
              <li className='font-body text-lg transition-color duration-200 absolute -rotate-90 left-[0.9%] bottom-[24%] text-white '>Visit me</li>
              <li className='text-white font-body hover:text-[#FC4ECF] active:text-white transition-color duration-200'><a href={user?.social.instagram}>
                <i className="fa-brands fa-instagram"></i>
              </a></li>
              <li className='text-white font-body hover:text-[#FC4ECF] active:text-white transition-color duration-200'><a href={user?.social.linkedin}>
                <i className="fa-brands fa-linkedin"></i>
              </a></li>
              <li className='text-white font-body hover:text-[#FC4ECF] active:text-white transition-color duration-200'><a href={user?.social.discord}>
                <i className="fa-brands fa-discord"></i>
              </a></li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
