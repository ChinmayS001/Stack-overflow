// import { deletePost } from "../api";
 import { getPosts } from "../api";
// import { postImage } from "../api";
// export const deletePosts = async (data) =>{let posts;
//     let res  = await deletePost(data.user._id,data._id);
//     if(res.status === 200){
//          posts = await getPosts(data.user._id);
         
//     }
//     else return;
//     return {
//         type: 'UPDATE_POSTS',
//         payload: posts,
//     }
// }
// export const updatePosts = async (id,data) =>{
//     let res  = await postImage(id,data);
//     let posts;
//     if(res.status === 200){
//         posts = await getPosts(data.user._id);
//     }
//     return {
//         type: 'UPDATE_POSTS',
//         payload: posts,
//     }
// }
export const updatePosts = (id) => async (dispatch) => {
    try {
      const { data } = await getPosts(id);
      //console.log('1');console.log(data);
      dispatch({ type: "UPLOAD_POSTS", payload:data });
      //dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
      //console.log('2');console.log(JSON.parse(localStorage.getItem("Profile")))
      //navigate("/");
    } catch (error) {
      console.log(error);
    }
  };