import React from 'react'

const UserCard = ({name,nim,tier,major,faculty,status}) => {
  return (
    <ul>
      <li>Name: {name}</li>
      <li>NIM: {nim}</li>
      <li>Tier: {tier}</li>
      <li>Major: {major}</li>
      <li>Faculty: {faculty}</li>
      <li>Status: {status}</li>
    </ul>
  );
};

export default UserCard;