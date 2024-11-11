// import propTypes from 'prop-types';

import { NavLink, Outlet, useLocation, Link } from 'react-router-dom';

import style from './comp-style/Navigation.module.css'
import clsx from 'clsx';


const buildLinkClass = ({ isActive }) => {
    return clsx(style.link, isActive && style.active);  // isActive true ise 'active' sınıfı eklenir
  };


//   to add go back button we need to use uselocation hook <3

function Navigation() {
    
    return (
        <div>
            
            <nav className={style.nav}>
            <NavLink to="/"  className={buildLinkClass}>Home</NavLink>
            <NavLink to="/movies"  className={buildLinkClass}>Movies</NavLink>
            <NavLink to="/movies/:movieId"  className={buildLinkClass}>Movie details</NavLink>
            <NavLink to="/movies/:movieId/cast"  className={buildLinkClass}>Cast</NavLink>
            <NavLink to="/movies/:movieId/review"  className={buildLinkClass}>Reviews</NavLink>
            <NavLink to="/movies/:movieId/list"  className={buildLinkClass}>List</NavLink>
            <Outlet />
            </nav>
            <BackButton />
        </div>
    )
}

function BackButton() {
    const location = useLocation();
    const prevLocation = location.state?.from || "/";
    return (
        <div>
            {prevLocation !== "/" && (

                <Link to={"/"}>            
                    <button>Go Back</button>           
                </Link> 
            )}

            {prevLocation === "/" && (
                    <Link to="/">                   
                            <button>Go Back Home</button>
                    </Link>
            )}
        </div>     
);
}

export default Navigation;

Navigation.protoTypes = {
    
}

