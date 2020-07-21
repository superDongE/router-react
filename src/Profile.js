import React from "react";

const profileData = {
  haedong: {
    name: "임해동",
    description: "세명대학교 학생",
  },
  homer: {
    name: "호머 심슨",
    description: "심슨 가족에 나오는 아빠 역활 캐릭터",
  },
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = profileData[username];
  if (!profile) {
    return <div>존재하지 않는 유저입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
