import { motion } from 'framer-motion'
import { fadeIn, fadeInSmall } from '../../variants'
import parallax_02 from '../../assets/wall2.jpg'

export const ParallaxHeader = ({ user }) => {
  return (
    <div className="header relative justify-center items-center flex h-[800px] relative">
      <img src={parallax_02} className='background absolute w-screen h-screen object-cover opacity-50 transition-all duration-200 top-0' />
      <div className="flex justify-center items-center w-full">
        <div className="flex flex-col w-full justify-center items-center">
          <motion.h1
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true, amount: 0.7 }}
            className='text-[180px] uppercase text-white mt-[188px]'>{user.firstname + ' ' + user.lastname}
          </motion.h1>
          <motion.div
            variants={fadeInSmall('right', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true, amount: 0.7 }}
            className="flex w-full h-full justify-start items-end mt-[150px]">
            <ul className='mx-10 text-xl flex flex-col justify-center items-center'>
              <li className='font-body uppercase text-2xl transition-color duration-200 absolute -rotate-90 left-[0.5%] top-[73%] text-[#FC4ECF] '>Visit me</li>
              <li className='text-white font-body hover:text-[#FC4ECF] active:text-white transition-color duration-200'><a href={user.social.instagram}>
                <i className="fa-brands fa-instagram"></i>
              </a></li>
              <li className='text-white font-body hover:text-[#FC4ECF] active:text-white transition-color duration-200'><a href={user.social.linkedin}>
                <i className="fa-brands fa-linkedin"></i>
              </a></li>
              <li className='text-white font-body hover:text-[#FC4ECF] active:text-white transition-color duration-200'><a href={user.social.discord}>
                <i className="fa-brands fa-discord"></i>
              </a></li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
