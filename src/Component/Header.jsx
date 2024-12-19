
import userImage from '../assets/user.png';
import '../Styles/Header.css'; 

export default function Header() {

  return (
    <header className="header">
      <div className="titre">Prototype</div>
      <div className="user">
        <img className="userImage" src={userImage} alt="User Profile" />
        <div className="userInfo">
          <div className="greeting">
            <b>Hello,</b> Ahmed
          </div>
          <div className="date email">fake@gmail.com</div>
        </div>
      </div>
    </header>
  );
}
