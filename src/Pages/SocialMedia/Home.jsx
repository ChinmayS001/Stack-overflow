import React from 'react'
import PostSide from '../../components/PostSide/PostSide'
import LeftSide from '../../components/LeftSide/LeftSide'
import RightSide from '../../components/RightSide/RightSide'
import { updatePosts } from '../../actions/posts'
import { useDispatch,useSelector } from 'react-redux'
import './home.css'
export const Home = () => {
  const dispatch = useDispatch();
  const currUser = useSelector((store) => store.currentUserReducer);
  dispatch(updatePosts(currUser.result._id));
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