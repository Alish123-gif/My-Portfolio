import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
    <div
      className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
    >
      <div className='flex flex-col justify-center items-center mt-5'>
      <div className='w-14 sm:h-[175px] h-40 bg-gradient-to-r from-red-800' />
      </div>

      <div>
        <h1 className={`${styles.heroHeadText} text-white`}>
          Hi, I'm <span className='text-red-800'>Ali </span>Shibli
        </h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
        I develope 3D visuals, user <br className='sm:block hidden' />
        interfaces, web applications and games
        </p>
      </div>
    </div>

    <ComputersCanvas />

    <div className='absolute xs:bottom-0 bottom-22 w-full flex justify-center items-center '>
      <a href='#about' style={{ display: 'block', zIndex: 1 }}>
        <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className='w-3 h-3 rounded-full bg-secondary mb-1'
          />
        </div>
      </a>
    </div>
  </section>
  )
}

export default Hero
