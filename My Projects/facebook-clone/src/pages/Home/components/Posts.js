import { PROFILE } from '../../../constants/routeConstants';
import '../Home.css';
import { useNavigate } from 'react-router-dom';

function Posts() {
  const navigate = useNavigate();
  return (
    <div className="footer ml-1">
      <ul className="text-[#050505] text-[15px] font-[600]">
        <li onClick={() => navigate('./' + PROFILE)}>
          <img
            className="rounded-[38px] inline-block h-[28px] w-[28px] mr-2"
            src="https://scontent.fdel27-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=db1b99&_nc_ohc=YUP9h2YH5zkAX97rAxE&_nc_ht=scontent.fdel27-1.fna&oh=00_AfBwPGMVm4iT_RJhZuyBJ9uvRB3uAHdRLI3qoqNUbMMLag&oe=65A903B8"
            alt="profile"
          />
          <span>Arunansh Srivastava</span>
        </li>
      </ul>
    </div>
  );
}

export default Posts;
