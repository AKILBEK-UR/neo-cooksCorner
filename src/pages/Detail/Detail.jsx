import React from 'react'
import { useNavigate, useParams } from 'react-router-dom' 
const Detail = () => {
  const mealId = useParams()
  const navigate = useNavigate();
  return (
    <div>Detail</div>
  )
}

export default Detail