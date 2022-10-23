import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {SiCodechef} from 'react-icons/si'
import {SiLeetcode} from 'react-icons/si'
import {AiOutlineGithub} from 'react-icons/ai'
const CodingProfiles = () => {
  return (
    <div className='codingLinks container'>
      <a  href='https://www.linkedin.com/in/vinay-singh-3b26721b0' target='_blank'><AiFillLinkedin /></a>
      <a  href='https://www.codechef.com/users/vinaysingh321' target='_blank'><SiCodechef /></a>
      <a  href='https://leetcode.com/vinayaksingh920/' target='_blank'><SiLeetcode /></a>
      <a  href='https://github.com/VinaySingh96' target='_blank'><AiOutlineGithub /></a>
    </div>
  )
}

export default CodingProfiles