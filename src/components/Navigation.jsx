

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
            <NavLink to="/movies"  className={buildLinkClass}>Search Movies </NavLink>
            <Outlet /> 
            </nav>  <hr />
            <BackButton prevLocation={prevLocation.current} /> 
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
    <div className={style.button}> 
      <button className={style.buttonAlt} onClick={() => navigate(-1)}>Go back</button>
      <button className={style.buttonAlt} onClick={() => navigate('/')}>Go home</button>
    </div>
  );
}

export default Navigation;
