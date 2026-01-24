import { useParams } from 'react-router-dom'

const DetailUser = () => {
const {idUser} = useParams();
  return (
    <div>
      <div>
        {idUser}
      </div>
      <div>
        {idUser}
      </div>
    </div>
  )
}

export default DetailUser;