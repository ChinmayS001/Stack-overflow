import React from 'react'
import PostSide from '../../components/PostSide/PostSide'
import LeftSide from '../../components/LeftSide/LeftSide'
import RightSide from '../../components/RightSide/RightSide'
import './home.css'
export const Home = () => {
  return (
    <div className="Home">
      <LeftSide/>
      <PostSide />
      <RightSide/>
      <div></div>
    </div>
  )
}

export default Home;