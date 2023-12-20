import FacebookLogo from '../../../assets/images/facebook.png';
import '../Home.css';

function Header() {
  return (
    <div className="header">
      <img src={FacebookLogo} alt="facebook" />
    </div>
  );
}

export default Header;
