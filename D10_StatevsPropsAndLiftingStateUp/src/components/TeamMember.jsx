const TeamMember = ({id, name,role,img,isOnline}) => {
  const statusStyle = { color:`${isOnline ? "green" : "gray"}`, 
  backgroundColor:`${isOnline ? "white" : "red"}`
};

  return(
        <ul>
          <li>Id: {id}</li>
          <li>Name: {name}</li>
          <li>Role: {role}</li>
          <li>Picture: <img src={img} alt="Photo Profile" srcset="" /></li>
          <li><span style={statusStyle}>{isOnline ? "Online" : "Offline"}</span></li>
        </ul>
  );
};
export default TeamMember;