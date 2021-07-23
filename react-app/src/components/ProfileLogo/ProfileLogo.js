import "./ProfileLogo.css";
import { useSelector } from "react-redux";

const ProfileLogo = () => {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <>
      <div id="profile-logo-div">
        <button id="profile-logo-button">
          <i className="fas fa-user-circle"></i>
        </button>
      </div>
      <>
        {sessionUser ? (
          <div id="profile-logo-username">
            <p>{sessionUser.username}</p>
          </div>
        ) : (
          <div id="profile-logo-username">
            <p>Guest</p>
          </div>
        )}
      </>
    </>
  );
};

export default ProfileLogo;
