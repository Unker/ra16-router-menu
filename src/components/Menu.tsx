import { NavLink } from "react-router-dom";


const activeLink = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'menu__item-active' : '';

interface NavigationItemProps {
  to: string;
  children: React.ReactNode;
}

function NavigationItem({ to, children }: NavigationItemProps) {
  return (
    <li className="menu__item">
      <NavLink to={to} className={activeLink}>
        {children}
      </NavLink>
    </li>
  );
}

export default function Menu() {

  return (
    <nav>
      <ul className="menu">
        <NavigationItem to="/">Главная</NavigationItem>
        <NavigationItem to="/drift">Дрифт-такси</NavigationItem>
      </ul>
    </nav>    
  )
}