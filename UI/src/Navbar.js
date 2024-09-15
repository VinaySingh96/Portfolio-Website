import React from 'react'
import './Navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {BiMessageSquareDetail} from 'react-icons/bi'
const navbar = () => {
  return (
    <div className="container">
      <div className='nav'>
      <a href='#' target='_blank'><AiOutlineHome /></a>
      <a href='#'><AiOutlineUser /></a>
      <a href='#'><BiBook /></a>
      <a href='#'><BiMessageSquareDetail /></a>
      {/* <a target='_blank'><AiFillHome /></a> */}
      </div>
    </div>
  )
}

export default navbar