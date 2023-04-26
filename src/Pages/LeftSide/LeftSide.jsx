import React from 'react'
import LeftUser from './LeftUser';
const LeftSide = () => {
    const users = useSelector((state) => state.usersReducer);
  return (
    <div className="user-list-left">
      {users.map((user) => (
        <LeftUser user={user} key={user?._id} />
      ))}
    </div>
  )
}

export default LeftSide