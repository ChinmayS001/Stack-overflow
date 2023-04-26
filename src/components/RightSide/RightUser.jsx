import React from 'react'
import { removeFriend } from '../../api';
import { useDispatch } from 'react-redux';
import { addFriend } from '../../api';
import { useRef } from 'react';
import { setCurrentUser } from '../../actions/currentUser';
import { fetchAllUsers } from "../../actions/users.js"
import './rightUser.css'
const LeftUser = (props) => {const dispatch = useDispatch();
    let user = props.user;
    let currUser = props.curUser;
    async function removeFriendC(){
        const res = await removeFriend(currUser.result._id,user._id);
        //res.data.token = currUser.result.token;
        console.log(res.data);
        if(res)
        dispatch(setCurrentUser(res.data));
        fetchAllUsers();
    }

   //let myAvt = useRef();
    //console.log(myAvt.style)// = "10px";  style = {{ display: 'flex', align-items: 'center', justify-content: 'flex-start', text-decoration: 'none', color: 'rgb(230, 16, 16)', }}
    console.log(user)
  return (<div className = "RightUser"  >
    
    <h3 >{user?.name}</h3>
              
      <button onClick = {removeFriendC} >RemoveFriend</button>
      </div>)
}

export default LeftUser