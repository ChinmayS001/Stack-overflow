import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake, faPen } from "@fortawesome/free-solid-svg-icons";
import SubscriptionForm from "./SubscriptionForm";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import Avatar from "../../components/Avatar/Avatar";
import EditProfileForm from "./EditProfileForm";
import ProfileBio from "./ProfileBio";
import "./UsersProfile.css";

const UserProfile = ({ slideIn, handleSlideIn }) => {

  const { id } = useParams();
  const users = useSelector((state) => state.usersReducer);
  const currentProfile = users.filter((user) => user._id === id)[0];
  const currentUser = useSelector((state) => state.currentUserReducer);
  const [Switch, setSwitch] = useState(false);
  const [sub, setSub] = useState(false);
  const navigate = useNavigate();
  function subscribe(){
    setSwitch(false);
    setSub(true);
  }
  function edit(){
    setSwitch(true);
    setSub(false);
  }
  console.log(currentUser);
  return (
    <div className="home-container-1">
      <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} />
      <div className="home-container-2">
        <section>
          <div className="user-details-container">
            <div className="user-details">
              <Avatar
                backgroundColor="purple"
                color="white"
                fontSize="50px"
                px="40px"
                py="30px"
              >
                {currentProfile?.name.charAt(0).toUpperCase()}
              </Avatar>
              <div className="user-name">
                <h1>{currentProfile?.name}</h1>
                <p>
                  <FontAwesomeIcon icon={faBirthdayCake} /> Joined{" "}
                  {moment(currentProfile?.joinedOn).fromNow()}
                </p>
                <p>Questions remaining today:{currentUser.result.Q_rem}</p>
              </div>
            </div>
            {currentUser?.result._id === id && (<>
              <div style={{ display: 'block' }}>
              <button
                type="button"
                onClick={edit}
                className="edit-profile-btn"
              >
                <FontAwesomeIcon icon={faPen} /> Edit Profile
              </button>
              </div>
              <div style={{ display: 'block' }}>
              <button
              type="button"
              onClick={subscribe}
              className="edit-profile-btn"
            >
              
              <FontAwesomeIcon icon={faPen} /> Buy Subscription
            </button>
            </div>
            <div style={{ display: 'block' }}>
              <button
              type="button"
              onClick={() => navigate(`/Users/${id}/Wall`)}
              className="edit-profile-btn"
            >
              
              <FontAwesomeIcon icon={faPen} /> Wall
            </button>
            </div>
            </>
            )}
          </div>
          <>
            {Switch ? (
              <EditProfileForm
                currentUser={currentUser}
                setSwitch={setSwitch}
              />
            ) : (
              <ProfileBio currentProfile={currentProfile} />
            )}
            {sub ? (
              <SubscriptionForm
                currentUser={currentUser}
                setSub={setSub}
              />
            ) : (
              <ProfileBio currentProfile={currentProfile} />
            )}
          </>
        </section>
      </div>
    </div>
  );
};

export default UserProfile;
