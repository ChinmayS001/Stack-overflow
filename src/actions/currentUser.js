export const setCurrentUser = (data) => {
  return {
    type: "FETCH_CURRENT_USER",
    payload: data,
  };
};

// export const updateQuestions = (ques) =>  {
//   return{
//     type: "UPDATE_QUESTIONS",
//     Q_rem: ques,
//   }
// }
