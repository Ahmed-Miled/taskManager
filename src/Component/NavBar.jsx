/*
import home from '../assets/home.png';
import game from '../assets/game.png';
import calendrier from '../assets/calendrier.png';
import todo from '../assets/todo.png';
import '../Styles/NavBar.css';

export default function NavBar() {
  return (
    <nav className="navBar">
      <a href="/" className="navItem">
        <img src={home} alt="Home" />
        <span>Home</span>
      </a>
      <a href="/todo" className="navItem">
        <img src={todo} alt="To Do" />
        <span>To Do</span>
      </a>
      <a href="/schedule" className="navItem">
        <img src={calendrier} alt="Schedule" />
        <span>Schedule</span>
      </a>
      <a href="/game" className="navItem">
        <img src={game} alt="Game" />
        <span>Game</span>
      </a>
    </nav>
  );
}
*/
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import home from '../assets/home.png';
import game from '../assets/game.png';
import calendrier from '../assets/calendrier.png';
import todo from '../assets/todo.png';
import '../Styles/NavBar.css';

export default function NavBar() {
  const location = useLocation(); // Get the current location

  return (
    <nav className="navBar">
      <Link to="/" className={`navItem ${location.pathname === '/' ? 'active' : ''}`}>
        <img src={home} alt="Home" />
        <span>Home</span>
      </Link>
      <Link to="/todo" className={`navItem ${location.pathname === '/todo' ? 'active' : ''}`}>
        <img src={todo} alt="To Do" />
        <span>To Do</span>
      </Link>
      <Link to="/schedule" className={`navItem ${location.pathname === '/schedule' ? 'active' : ''}`}>
        <img src={calendrier} alt="Schedule" />
        <span>Schedule</span>
      </Link>
      <Link to="/game" className={`navItem ${location.pathname === '/game' ? 'active' : ''}`}>
        <img src={game} alt="Game" />
        <span>Game</span>
      </Link>
    </nav>
  );
}
