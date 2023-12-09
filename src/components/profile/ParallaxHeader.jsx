import { motion } from 'framer-motion'
import { fadeIn, fadeInSmall } from '../../variants'
import parallax_02 from '../../assets/wall2.jpg'

export const ParallaxHeader = ({ user }) => {
  return (
    <div className="header relative justify-center items-center flex h-[800px]">
      <img src={parallax_02} className='background absolute w-screen h-screen object-cover opacity-50 transition-all duration-200' />
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
            <ul className='mx-10 text-xl'>
              <li className='text-white font-body hover:text-[#FC4ECF] uppercase text-2xl active:text-white transition-color duration-200 absolute -rotate-90 left-[0.4%] top-[73%] text-[#FC4ECF]'>Visit me</li>
              <li className='text-white font-body hover:text-[#FC4ECF] active:text-white transition-color duration-200'><a href={user.social.instagram}>instagram</a></li>
              <li className='text-white font-body hover:text-[#FC4ECF] active:text-white transition-color duration-200'><a href={user.social.linkedin}>linkedin</a></li>
              <li className='text-white font-body hover:text-[#FC4ECF] active:text-white transition-color duration-200'><a href={user.social.discord}>discord</a></li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
