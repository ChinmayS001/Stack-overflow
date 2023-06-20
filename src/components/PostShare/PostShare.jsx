import React, { useState, useRef } from "react";
import {useParams}   from 'react-router-dom';
import "./PostShare.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { postImage } from "../../api";
// import img from "../../../public/Default.png"
// import { useDispatch, useSelector } from "react-redux";
// import { uploadImage, uploadPost } from "../../actions/UploadAction";

const PostShare = () => {
  // const dispatch = useDispatch();
  // const { user } = useSelector((state) => state.authReducer.authData);
  // const loading = useSelector((state) => state.postReducer.uploading);
   const [image, setImage] = useState(null);
  let loading = 0;
  const desc = useRef();
  // const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  // // handle Image Change
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(img);
    }
  };

   const imageRef = useRef();
   const userId  = useParams().id;
   //console.log(userId);
  // // handle post upload
  const handleUpload = async (e) => {
    e.preventDefault();
    
    //post data
    const newPost = {
      userId,
      desc: desc.current.value,
    };
    //console.log(newPost.desc);
    // if there is an image with post
    if (image) {
      console.log("I swear to god I don't know why this is behaving like this")
      const data = new FormData();
      const fileName = Date.now() + image.name;
      data.append("name", fileName);
      data.append("file", image);
      data.append("desc",desc.current.value)
      newPost.image = fileName;
      //console.log(newPost);
      try {
        //dispatch(uploadImage(data));
        const res = await postImage(userId,data);
        alert("Uploaded, refresh the page to view")
        //console.log(res);
      } catch (err) {
        console.log(err);
      }
      
    }
    //dispatch(uploadPost(newPost));
    resetShare();
  };

  // // Reset Post Share
  const resetShare = () => {
    setImage(null);
    desc.current.value = "";
  };
  let user =null;
  return (
    <div className="PostShare">
      
      <div>
        <input
          type="text"
          placeholder="What's happening?"
          required
          ref={desc}
        />
        <div className="postOptions">
          <div
            className="option"
            style={{ color: "var(--photo)" }}
            onClick={() => console.log('imageRef.current.click()')}
          >
            <UilScenery />
            
            <label for = "file">Photo</label>
          </div>

          <div className="option" style={{ color: "var(--video)" }}>
            <UilPlayCircle />
            Video
          </div>
          
          <button
            className="button ps-button"
            onClick={handleUpload}
            disabled={loading}
          >
            {loading ? "uploading" : "Share"}
          </button>

          <div style={{ display:"none" }}>
          <input name = "file" id = "file"type="file" ref={imageRef} onChange={onImageChange} />
          </div>


        </div>

        {image && (
          <div className="previewImage">
            <UilTimes onClick={() => setImage(null)} />
            <img src={URL.createObjectURL(image)} alt="preview" />
          </div>
        )}
      </div>
      
    </div>
  );
};

export default PostShare;
