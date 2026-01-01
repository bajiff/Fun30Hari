const Card = ({name,nim,tier,major,faculty}) => {
  return(
    <>
      <ul>
        <li>Name: {name}</li>
        <li>NIM: {nim}</li>
        <li>Tier: {tier}</li>
        <li>Major: {major}</li>
        <li>Faculty: {faculty}</li>
      </ul>
    </>
  )
};
export default Card;