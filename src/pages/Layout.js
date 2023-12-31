import { Outlet, Link } from "react-router-dom";
import LogoutBtn from "../components/LogoutBtn";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/auth">Auth</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <LogoutBtn/>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;