import React from 'react'
import { removeFriend } from '../../api';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { setCurrentUser } from '../../actions/currentUser';
import { fetchAllUsers } from "../../actions/users.js"
import { updatePosts } from '../../actions/posts';
import './rightUser.css'
const RightUser = (props) => {const dispatch = useDispatch();
    let user = props.user;
    let currUser = props.curUser;
    async function removeFriendC(){
        const res = await removeFriend(currUser.result._id,user._id);
        //res.data.token = currUser.result.token;
        console.log("Deletion function executed");
        
        dispatch(updatePosts());
        dispatch(setCurrentUser(res.data));
        fetchAllUsers();
        alert("Ther friend has been deleted, you can now see his/her posts, log out and log in to display the changes")
    }

   //let myAvt = useRef();
    //console.log(myAvt.style)// = "10px";  style = {{ display: 'flex', align-items: 'center', justify-content: 'flex-start', text-decoration: 'none', color: 'rgb(230, 16, 16)', }}
   // console.log(user)
  return (<div className = "RightUser"  >
    
    <h3 >{user?.name}</h3>
              
      <button onClick = {removeFriendC} >RemoveFriend</button>
      </div>)
}

export default RightUser