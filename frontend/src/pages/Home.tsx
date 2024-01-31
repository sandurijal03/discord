import * as React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  let user = 'sandy'

  React.useEffect(() => {
    if (user !== 'sandip') {
      navigate('/dashboard')
    }
  }, [])

  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default Home
