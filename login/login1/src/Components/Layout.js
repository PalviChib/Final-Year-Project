import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav  >
        <div className="box">
       <ul id = "menu"  >
          <li>
            <Link to="/" >Home</Link>
          </li>
          <li>
            <Link to="/login">Add More Information</Link>
          </li>
          <li>
            <Link to="/MyInformation">MyInformation</Link>
          </li>
          <li>
            <Link to="/DeleteMyAccount">DeleteMyAccount</Link>
          </li>
          <li>
            <Link to="/SignIn">SignIn</Link>
          </li>
          
          </ul>
          </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;