import React, { useState } from 'react'
import './ChatBot.css'
import Sm from '../../assets/send-message.png';
import { getMessage } from '../../api';
const ChatBot = () => {//let chat = [];
    let text = '';
     const [chat,setChat] = useState([])
     const [ques,setQuest] = useState([])
     function updateChat(){
   
       if(text == '')return;
       //let new = chat;new.push(text);
       
       console.log(chat);
       setQuest([...ques,text]);
       getMessage(text).then(response=> setChat([...chat,response]));
       
       //setChat([...chat,opp]);
    }
    function updateText(event){
        text = event.target.value;
    }
    let elem = chat.map((chate, index) => (
      <div class = "answer" key={index}>{chate}</div>
        ))
    let k = -1;
    const final = ques.map((quess,index)=> {k++;
      return (<div class = "oneQA"><div class = "question" key={index}>{quess}</div>{elem[k]}</div>);
    });
    
  return (
    <div class = "A1">
        {final}
        <div class = "SendMsg">
            <input name = "question" class = "ip1"  onChange = {updateText}type="text" placeholder='Enter Message here' />
           <button onClick = {()=> {updateChat();}}><img id = "one" src= {Sm} alt="" /></button>
          </div>
    </div>
  )
}

export default ChatBot