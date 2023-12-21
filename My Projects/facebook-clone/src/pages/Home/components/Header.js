import { useNavigate } from 'react-router-dom';
import FacebookLogo from '../../../assets/images/facebook.png';
import '../Home.css';

function Header() {
  const navigate = useNavigate();
  return (
    <div className="header">
      <img
        className="cursor-pointer"
        src={FacebookLogo}
        alt="facebook"
        onClick={() => navigate('./')}
      />
    </div>
  );
}

export default Header;
