 import * as api from "../api/index";
 //import { updateQuestions } from "./currentUser";
 //import currentUserReducer from "../reducers/currentUser";
 import { setCurrentUser } from "./currentUser";
export const askQuestion = ( questionData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.postQuestion(questionData);  

    if(data!="You have reached your daily limit of Questions"){
    dispatch({ type: 'POST_QUESTION', payload: data });
    dispatch(fetchAllQuestions());
    // User.data.Q_rem = User.data.Q_rem-1;
    // console.log(User.data.Q_rem);
    //dispatch(setCurrentUser(User))
  //  dispatch(updateQuestions(data.Q_rem))
    }
    else if(data=="You have reached your daily limit of Questions"){
      alert("You Have reached your daily questions limit, buy a subscription at the users page by clicking on the profile icon on the navigation bar");
    }
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const fetchAllQuestions = () => async (disptach) => {
  try {
    const { data } = await api.getAllQuestions();
    disptach({ type: "FETCH_ALL_QUESTIONS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteQuestion = (id, navigate) => async (dispatch) => {
  try {
    await api.deleteQuestion(id);
    dispatch(fetchAllQuestions());
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const voteQuestion = (id, value) => async (dispatch) => {
  try {
    await api.voteQuestion(id, value);
    dispatch(fetchAllQuestions());
  } catch (error) {
    console.log(error);
  }
};

export const postAnswer = (answerData) => async (dispatch) => {
  try {
    const { id, noOfAnswers, answerBody, userAnswered } = answerData;
    const { data } = await api.postAnswer(
      id,
      noOfAnswers,
      answerBody,
      userAnswered
    );
    dispatch({ type: "POST_ANSWER", payload: data });
    dispatch(fetchAllQuestions());
  } catch (error) {
    console.log(error);
  }
};

export const deleteAnswer = (id, answerId, noOfAnswers) => async (dispatch) => {
  try {
    await api.deleteAnswer(id, answerId, noOfAnswers);
    dispatch(fetchAllQuestions());
  } catch (error) {
    console.log(error);
  }
};
