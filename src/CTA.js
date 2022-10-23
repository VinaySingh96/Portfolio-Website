import React from 'react'
import resume from './Assets/resume.pdf'
const CTA = () => {
  return (
    <div className='container mt5 '>
      <a href={resume} className='btn'>Download Resume</a>
      <a href="#contact" className='btn'>Contact Me</a>
    </div>
  )
}

export default CTA