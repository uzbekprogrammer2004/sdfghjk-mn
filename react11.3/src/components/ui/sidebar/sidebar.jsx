import { NavLink } from 'react-router-dom'
import './sidebar.css'
NavLink
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <h1>Sidebar</h1>
        <NavLink to="/main" className="navlink" >
            Users
        </NavLink>
        <NavLink to="/main/brand" className="navlink" >
           Posts
        </NavLink>
        <NavLink to="/main/albums" className="navlink" >
           Albums
        </NavLink>
        <NavLink to="/main/comments" className="navlink" >
           Comments
        </NavLink>
        <NavLink to="/main/todos" className="navlink" >
           Todos
        </NavLink>
        <NavLink to="/main/photos" className="navlink" >
           Photos
        </NavLink>
        <NavLink to="/main/newproject" className="navlink" >
        Newproject
        </NavLink>
        
    </div>
  )
}

export default Sidebar