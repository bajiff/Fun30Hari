import React from 'react'
import { useParams } from 'react-router-dom'

const DetailUser = () => {
const {detailUser} = useParams();
  return (
    <div>{detailUser}</div>
  )
}

export default DetailUser