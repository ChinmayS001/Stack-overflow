import React, { useState } from "react";
import "./Post.css";
import Comment from "../../img/comment.png";
import Share from "../../img/delete.png";
import Heart from "../../img/like.png";
import NotLike from "../../img/notlike.png";
import { useParams } from "react-router-dom";
import { deletePost } from "../../api";
import { useDispatch } from "react-redux";
import {useSelector } from "react-redux"
import Avatar from '../Avatar/Avatar.jsx';
//import { likePost } from "../../api/PostsRequests";
//import { useSelector } from "react-redux";
import { deletePosts } from "../../actions/posts";
const Post = ({ data }) => {
 // data.image = 'https://res.cloudinary.com/dphix0dau/image/upload/v1682346084/Stack-OverFlow-Clone/l4girmrfdedrmqec2wld.png'
  //const { user } = useSelector((state) => state.authReducer.authData);
  const id = useParams().id;
  const [liked, setLiked] = useState(data.likes.includes(id));
  const [likes, setLikes] = useState(data.likes.length)
  const dispatch = useDispatch();
  let dat = useSelector((store) => store.PostReducer);
  
  console.log(dat);
  console.log(data);
  const handleLike = () => {
    //likePost(data._id, user._id);
    setLiked(() => !liked);
    liked? setLikes((prev)=>prev-1): setLikes((prev)=>prev+1)
  };
  const handleDelete = async () =>{
    //dispatch(deletePosts(data))
     console.log(data._id);
     const res = await deletePost(data.user._id,data._id);
     console.log("Final Answer");
  }
  return (
    <div className="Post">
      <h3 style = {{display: "inline"}}>{data.user.name}</h3>
      <img
        src={data.image }
        alt=""
      />

      <div className="postReact">
        <img
          src={liked ? Heart : NotLike}
          alt=""
          style={{ cursor: "pointer" }}
          onClick={handleLike}
        />
        {}
        <img src={Share} alt=""  onClick = {handleDelete}   style={{ cursor: "pointer", width:"20px",height:"20px"}}     />
      </div>

      <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {likes} likes
      </span>
      <div className="detail">
        <span>
          <b>{data.name} </b>
        </span>
        <span>{data.desc}</span>
      </div>
    </div>
  );
};

export default Post;
