// import propTypes from 'prop-types';

import { NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useRef, useEffect } from 'react';

import style from './comp-style/Navigation.module.css'
import clsx from 'clsx';


const buildLinkClass = ({ isActive }) => {
    return clsx(style.link, isActive && style.active);  // isActive true ise 'active' sınıfı eklenir
  };


//   to add go back button we need to use uselocation hook <3
function Navigation() {

    const location = useLocation();
    const prevLocation = useRef(location.state?.from || '/'); // 'from' state'ini kullanarak geri gitme işlemi

  useEffect(() => {
   prevLocation.current = location.state?.from || '/'; // Her sayfa değişiminde previous location'ı güncelle
  }, [location]);
    return (
        <div>
            
            <nav className={style.nav}>
            <NavLink to="/"  className={buildLinkClass}>Home</NavLink> <br/>  
            {/* <NavLink to="/movies"  className={buildLinkClass}>Movies</NavLink> */}
            <NavLink to="/movies/:movieId"  className={buildLinkClass}>Search Movies </NavLink>
            <Outlet />
            </nav>
            <BackButton />
        </div>
    )
}


function BackButton() {
  const navigate = useNavigate();
  const location = useLocation();
  if (location.pathname === '/') {
    return null;
  }
  return (
    <>
      <button onClick={() => navigate(-1)}>go back</button>
    </>
  );
}

export default Navigation;

Navigation.protoTypes = {
    
}

