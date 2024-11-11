// import propTypes from 'prop-types';
import style from './Navigation.module.css'
import clsx from 'clsx';
import { NavLink } from 'react-router-dom'; 
const buildLinkClass = ({ isActive }) => {
    return clsx(style.link, isActive && style.active);  // isActive true ise 'active' sınıfı eklenir
  };
  
function Navigation() {
    return (
        <div>
            
            <nav className={style.nav}>
            <NavLink to="/"  className={buildLinkClass}>

            Home</NavLink>

            <NavLink to="/moviespage"  className={buildLinkClass}>

            Movies</NavLink>

            <NavLink to="/moviedetailspage"  className={buildLinkClass}>

            Movie details</NavLink>

            <NavLink to="/moviecast"  className={buildLinkClass}>

            Cast</NavLink>
            <NavLink to="/moviereview"  className={buildLinkClass}>

            Reviews</NavLink>

            <NavLink to="/movielist"  className={buildLinkClass}>

            List</NavLink>
            </nav>
        </div>
    )
}

export default Navigation;

Navigation.protoTypes = {

}