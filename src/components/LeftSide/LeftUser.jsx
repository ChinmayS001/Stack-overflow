import React from 'react'
import  {setCurrentUser}  from '../../actions/currentUser';
import { updatePosts } from '../../actions/posts';
import { useDispatch } from 'react-redux';
import { addFriend } from '../../api';
import { useRef } from 'react';
import { useState } from 'react';
import './leftUser.css'
import { fetchAllUsers } from "../../actions/users.js"
const LeftUser = (props) => {const dispatch = useDispatch();
    let user = props.user;
    const [foll,setfoll] = useState(user.followers);
    let currUser = props.curUser;
    async function addFriendC(){
        const res = await addFriend(currUser.result._id,user._id);
        // console.log("result data:",res.data,"currentuser data:",currUser);
        // res.data.token = currUser.result.token;
        dispatch(updatePosts(currUser.result._id));
        // console.log("result data:",res.data,"currentuser data:",currUser);
      //  console.log(res.data); 
        console.log("Dospatching");
        dispatch(setCurrentUser(res.data));//setfoll(res.data.result.followers)
        fetchAllUsers();
        alert("Ther friend has been added,  his/her posts will be added to your wall, log out and log in to display the changes")
    }

   //let myAvt = useRef();
    //console.log(myAvt.style)// = "10px";  style = {{ display: 'flex', align-items: 'center', justify-content: 'flex-start', text-decoration: 'none', color: 'rgb(230, 16, 16)', }}
   // console.log(user)
  return (<div className = "LeftUser"  >
    
    <h3 >{user?.name}</h3>
              
      <button onClick = {addFriendC} >AddFriend</button>
      </div>)
}

export default LeftUser