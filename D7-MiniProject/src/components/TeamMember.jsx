const TeamMember = ({name,role,img,isOnline}) => {
  return (
  <ul>
    <li>Name: {name}</li>
    <li>Role: {role}</li>
    <img className="rounded shadow-2xl" src={img} alt="My Profile" />
    <li>Status: {isOnline}</li>
  </ul>
  )
}

export default TeamMember;