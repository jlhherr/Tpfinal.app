
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import NavMenu from "./NavMenu";
import ThemeContext from "../contexts/ThemeContext";

const Navbar = ({ appName }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const backgroundClassName = theme === "dark" ? "bg-gray-800" : "bg-blue-500";
  const textClassName = theme === "dark" ? "text-gray-300" : "text-white";

  return (
    <header>
      <nav className={`p-4 ${backgroundClassName}`}>
        <div className="flex justify-between items-center">
          <div className="flex">
            <img src={appLogo} alt="App Logo" className="h-8 w-8 mr-2" />
            <p className={`text-xl font-bold ${textClassName}`}>{appName}</p>
          </div>
          <ul className="flex space-x-4">
            <li><Link className={`${textClassName}`} to="/">Home</Link></li>
            <li><Link className={`${textClassName}`} to="/about">About</Link></li>
            <li><Link className={`${textClassName}`} to="/contact">Contact</Link></li>
            <li><Link className={`${textClassName}`} to="/register">Register</Link></li>
            <li><Link className={`${textClassName}`} to="/login">Login</Link></li>
          </ul>
          <button
            className={`ml-4 p-2 rounded ${theme === "dark" ? "bg-gray-200 text-black" : "bg-gray-800 text-white"}`}
            onClick={toggleTheme}
          >
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </button>
          <div id="navMenu" className="hidden md:block md:flex md:items-center md:justify-between">
    {/* ... */}
</div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
