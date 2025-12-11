import { useState } from "react";

const UserProfile = () => {
  const [status,setStatus] = useState("Active");
  const [username,setUsername] = useState("Budi Doremi");
  const [avatar,setAvatar] = useState("https://i.pravatar.cc/150");
  const statusFontStyles = {
    "color":"red",
    "backgroundColor":"blue"
  };
  return (
    <div className="card">
      <img src={avatar} alt="Gambar Saya" srcset="" />
      <div className="info">
        <h2 style={{ color:"red" }}>Profile: {username}</h2>
        <br/>
        <p style={statusFontStyles}>Status: <b>{status}</b></p>
        <label htmlFor="input-bio">Bio:</label>
        <input id="input-bio" type="text" placeholder="Tulid bio" name="input-bio" required autoFocus />
      </div>
      <div>
        <button onClick={() => alert(`Username ${username}`)}>Save</button>
      </div>
    </div>
  );
};

export default UserProfile;