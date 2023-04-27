import React, { useState } from 'react'
import './ChatBot.css'
import { chatBot } from '../../api'
import Sm from '../../assets/send-message.png';
//import { Configuration, OpenAIApi } from '../../api';
const ChatBot = () => {//let chat = [];
    
    let text = '';
     const [chat,setChat] = useState([])
     const [ques,setQuest] = useState([])
  async   function updateChat(){
   
       if(text == '')return;
       //let new = chat;new.push(text);
       
      const msg = await chatBot(text);
// 
//openai.api_key = "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";

// Set the parameters for the completion
// const model = 'text-davinci-002';
// const prompt = 'Hello, world!';
// const temperature = 0.5;
//const msg = getMessage(text);
// Generate a completion using the specified model, prompt, and temperature
// openai.complete({
//   engine: model,
//   prompt: prompt,
//   temperature: temperature,
//   max_tokens: 1024,
// }).then((response) => {
//   const generated_text = response.choices[0].text.trim();
//   console.log(generated_text);
//        setQuest([...ques,text]);
//        setChat([...chat,generated_text]);
// }).catch((err) => {
//   console.log(err);
// });
// console.log(msg)
// setQuest([...ques,text]);
// setChat([...chat,msg]);




// const configuration = new Configuration({
//   apiKey: "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",
// });
// const openai = new OpenAIApi(configuration);

// const completion = await openai.createCompletion({
//   model: "text-davinci-002",
//   prompt: text,
// });
console.log(msg);
       setQuest([...ques,text]);
       setChat([...chat,msg.data.resp]);
       
       //setChat([...chat,opp]);
    







// const response = completion.data.choices[0].text;
//        console.log(response);
//        setQuest([...ques,text]);
//        setChat([...chat,response]);
       
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
        <div className = "SendMsg">
            <input className = 'ip1' onChange = {updateText}type="text" placeholder='Enter Message here' />
           <button className = 'Chat-Button' onClick = {()=> {updateChat();}}><img id = "one" src= {Sm} alt="" /></button>
          </div>
    </div>
  )
}

export default ChatBot
