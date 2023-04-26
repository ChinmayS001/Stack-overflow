import React, { useEffect } from "react";
//import { getTimelinePosts } from "../../actions/PostsAction";
import Post from "../Post/Post";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import "./Posts.css";
import { useParams } from "react-router-dom";
import { getPosts } from "../../api";
const Posts = () => {
  //const params = useParams()
  //const dispatch = useDispatch();
  //const { user } = useSelector((state) => state.authReducer.authData);
  //let { posts, loading } = useSelector((state) => state.postReducer);
 // useEffect(() => {
  //  dispatch(getTimelinePosts(user._id));
  //}, []);
  const id = useParams().id;  
  const [posts,setPosts] = useState(null);
  //let posts; 
  async function forasync(){
   if(!posts){
   const res = await getPosts(id);
   setPosts(res.data);
   }  }
  forasync();
  let loading = 0;
  if(!posts)return 'No Posts'
  //if(params.id) posts = posts.filter((post)=> post.userId===params.id);
  return (
    <div className="Posts">
      {loading
        ? "Fetching posts...."
        : posts.map((post, _id) => {
            return <Post data={post} key={_id} />;
          })}
    </div>
  );
};

export default Posts;
