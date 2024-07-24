
import { Link } from 'react-router-dom';

const NavMenu = ({ items }) => {
  return (
    <ul className="flex space-x-4">
      {items.map((item, index) => (
        <li key={index}>
          <Link to={item.url} className="text-white dark:text-gray-300">{item.text}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;
