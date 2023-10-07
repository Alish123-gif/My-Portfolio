import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import {styles} from '../styles'
import {services} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({index, title,icon}) =>{
  return(
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div variants={fadeIn('right','spring',0.5*index,0.75)}
      className='w-full bg-red-to-dark-violet p-[1px] rounded-[20px] shadow-card'>
        <div options={{
          max:45,
          scale:1,
          speed:450
        }}
        className='bg-tertiary rounded-[20px]
        py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt="tittle" className='w-16 h-16 object-contian'/>
          <h3 className='text-white text-[20px]
          font-bold text-center'>{title}</h3>
        </div>
      </motion.div>

      </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
      variants={fadeIn("","",0.1,1)}
      className='mt-4 text-secondary text-[17px]
      max-w-3xl leading-[30px]'
      >
        I'm Ali Shibli, a dedicated web and game development
        enthusiast currently pursuing my degree at LIU. Beyond the classroom,
        I'm on a relentless quest to explore and master the ever-evolving tech world.
        From diving into the intricacies of web development to immersing myself in the art of game design,
        my goal is to become an expert in one of these fields. My portfolio showcases my passion for technology
        and my commitment to creating engaging digital experiences. I'm eager to connect with fellow enthusiasts,
        collaborate on exciting projects, and continue my journey of learning and growth.
      </motion.p>
      <div className='my-20 flex flex-wrap gap-10 justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")