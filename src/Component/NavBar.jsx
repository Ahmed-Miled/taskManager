import home from '../assets/home.png';
import game from '../assets/game.png';
import calendrier from '../assets/calendrier.png';
import todo from '../assets/todo.png';
export default function NavBar() {
  return (
    <div className='navBar'>
      <div className='dailyBox'>
        <a href='/'>
          <div className='box'>
            <img src={home} alt='home' />
            <div>Home</div>
          </div>
        </a>
      </div>
      <div className='todoBox'>
        <a href='/todo'>
          <div className='box'>
            <img src={todo} alt='todo' />
            <div>To do</div>
          </div>
        </a>
      </div>
      <div className='schedule'>
        <a href='/schedule'>
          <div className='box'>
            <img src={calendrier} alt='calendrier' />
            <div>schedule</div>
          </div>
        </a>
      </div>
      <div className='game'>
        <a href='/game'>
          <div className='box'>
            <img src={game} alt='Game ' />
            <div>Game</div>
          </div>
        </a>
      </div>
    </div>
  );
}
