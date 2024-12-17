import userImage from '../assets/user.png';

export default function Header() {
  return (
    <div className='header'>
      <div className='titre'>Prototype</div>
      <div className='user'>
        <img src={userImage} alt='user name' />
        <div className='userName'>
          <div>
            <b>Hello, </b>Ahmed Miled
          </div>
          <div className='date'>24-12-2024</div>
        </div>
      </div>
    </div>
  );
}
