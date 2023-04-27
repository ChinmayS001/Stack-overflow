import {getCurrentUser} from '../api'
export const setCurrentUser = (data) => {
  return {
    type: "FETCH_CURRENT_USER",
    payload: data,
  };
};
export const getCurrentUserA = (ui) => async dispatch =>{console.log("What the fuck?")
    const dat = await getCurrentUser(ui);
    if(dat){
    const data = { result:dat.data,token:JSON.parse(localStorage.getItem("Profile")).token }
    console.log(data);
  dispatch(setCurrentUser(data));}
}
// export const updateQuestions = (ques) =>  {
//   return{
//     type: "UPDATE_QUESTIONS",
//     Q_rem: ques,
//   }
// }
