import axios from "axios";
const instance = axios.create({
  baseURL: process.env.APIkey,
  headers: {
    'Authorization' : 'Bearer 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',
    'Content-Type' : 'application/json',
  },
});
export async function getMessage(msg) {let op = 'nothing'
await instance({
  method: 'POST',
  data: {
    "model": "gpt-3.5-turbo",
    "messages": [{"role": "user", "content": msg}],
    "temperature": 0.7
  },
  
})
  .then(response => {
   
    op = response['data']['choices'][0]['message']['content'];
  }

  )
  .catch(error => {
    return error;
  });
  return op;
}



const API = axios.create({
  baseURL: "http://localhost:5000",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("Profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("Profile")).token
    }`;
  }
  return req;
});


export const logIn = (authData) => API.post("/user/login", authData);
export const signUp = (authData) => API.post("/user/signup", authData);
export const result = async (payId) => API.post('/payment/orders',payId);

export const postQuestion = (questionData) => API.post("/questions/Ask", questionData);
export const getAllQuestions = () => API.get("/questions/get");
export const deleteQuestion = (id) => API.delete(`/questions/delete/${id}`);
export const voteQuestion = (id, value) => API.patch(`/questions/vote/${id}`, { value });

export const postAnswer = (id, noOfAnswers, answerBody, userAnswered) => API.patch(`/answer/post/${id}`, { noOfAnswers, answerBody, userAnswered });
export const deleteAnswer = (id, answerId, noOfAnswers) => API.patch(`/answer/delete/${id}`, { answerId, noOfAnswers });

export const getAllUsers = () => API.get("/user/getAllUsers");
export const updateProfile = (id, updateData) => API.patch(`/user/update/${id}`, updateData);


export const getOrder = (id, amount) => {return API.post(`/payments/createOrder/${id}`,amount);}
export const getKey = () => API.post('/payments/getKey');
export const paymentVerification = (id,data) => {return API.post(`/payments/success/${id}`,data);}

export const postImage = (id,data) => {return API.post(`/socialmedia/postupload/${id}`,data)}
export const getPosts = (id) => {return API.get(`/socialmedia/getposts/${id}`)};
export const addFriend = (id,F_id) => {return  API.post(`/socialmedia/addfriend/${id}`,{F_id})}
export const removeFriend = (id,F_id) => {return  API.post(`/socialmedia/removefriend/${id}`,{F_id})}
export const deletePost  = (id,P_id) =>{return API.post(`/socialmedia/deletePost/${id}`,{P_id})}