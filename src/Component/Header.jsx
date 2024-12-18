
import userImage from '../assets/user.png';
import '../Styles/Header.css'; // Add a dedicated CSS file for styling

export default function Header() {
  const currentDate = new Date().toLocaleDateString(); // Dynamically fetch the current date

  return (
    <header className="header">
      <div className="titre">Prototype</div>
      <div className="user">
        <img className="userImage" src={userImage} alt="User Profile" />
        <div className="userInfo">
          <div className="greeting">
            <b>Hello,</b> Ahmed
          </div>
          <div className="date">{currentDate}</div>
        </div>
      </div>
    </header>
  );
}
