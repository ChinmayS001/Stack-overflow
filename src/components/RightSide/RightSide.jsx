import React from 'react'
import RightUser from './RightUser';
import { useSelector } from 'react-redux';
const RightSide = () => {
    const users = useSelector((state) => state.usersReducer);
    let currUser   = useSelector((state) => state.currentUserReducer);
    
    console.log(currUser);
    console.log(users);
    //console.
    //console.log(currUser?.result);
    
  return (
    <div className="user-list-left">
      {users.map((user) => {
         if(currUser.result.following.includes(user._id))
            return (<RightUser user={user} curUser = {currUser} key={user?._id} />)
         else 
          return null;
      })}
    </div>
  )
}

export default RightSide