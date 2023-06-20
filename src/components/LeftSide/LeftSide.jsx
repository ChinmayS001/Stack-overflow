import React from 'react'
import LeftUser from './LeftUser';
import { useSelector } from 'react-redux';
const LeftSide = () => {
    const users = useSelector((state) => state.usersReducer);
    let currUser   = useSelector((state) => state.currentUserReducer);
    
   // console.log(currUser);
    //console.log(users);
    console.log("The left side is getting refreshed");
    console.log(currUser);
    //console.
    //console.log(currUser?.result);
    const op = users.map((user) => {
      if(!currUser.result.following.includes(user._id))
         return (<LeftUser user={user} curUser = {currUser} key={user?._id} />)
      else 
       return null;
   })
   console.log(op);
  return (
    <div className="user-list-left">
      {op}
    </div>
  )
}

export default LeftSide