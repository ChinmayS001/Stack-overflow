import React from 'react'

const LeftUser = (user) => {
  return (
    <Avatar
                backgroundColor="purple"
                color="white"
                fontSize="50px"
                px="40px"
                py="30px"
              >
                {currentProfile?.name.charAt(0).toUpperCase()}
              </Avatar>
  )
}

export default LeftUser