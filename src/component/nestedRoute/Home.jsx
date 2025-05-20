import { Link, Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <Link to="profile" >Go to profile</Link>
        <Link to="Dashboard" >Dashboard</Link>
        <Outlet/>
    </div>
  )
}

export default Home