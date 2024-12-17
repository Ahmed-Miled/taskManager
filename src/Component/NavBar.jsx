export default function NavBar() {
  return (
    <div className='navBar'>
      <p> hello im navbar i should be in the bottoum of the page</p>
      <ul>
        <li><a href="/dailyQuest">Daily quest</a></li>
        <li><a href="/todo">Todo</a></li>
        <li><a href="/schedule">Schedule</a></li>
      </ul>
    </div>
  );
}
