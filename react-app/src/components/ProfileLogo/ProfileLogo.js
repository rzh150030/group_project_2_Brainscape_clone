import "./ProfileLogo.css";

const ProfileLogo = () => {
  return (
    <>
      <div id="profile-logo-div">
        <button id="profile-logo-button">
          <i className="fas fa-user-circle"></i>
        </button>
      </div>
      <div id="profile-logo-username">
        <p>Username here</p>
      </div>
    </>
  );
};

export default ProfileLogo;
