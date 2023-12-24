import '../Home.css';

function Profile() {
  return (
    <div className="profile">
      <div className="flex items-end justify-end mx-auto cursor-pointer w-[80%] h-[23rem] bg-[#f3f3f3] rounded-bl-[6px] rounded-br-[6px]">
        <div className="mr-8 mb-4 rounded-[6px] px-[12px] text-[white] bg-[#00000066] border-[red] border-[1px]">
          <div>Edit cover photo</div>
        </div>
      </div>
      <img
        className="mt-[-5rem] ml-[14%] cursor-pointer rounded-[100px] inline-block h-[168px] w-[168px] mr-2"
        src="https://scontent.fdel27-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=CO5dz350V7MAX9oEHkS&_nc_ht=scontent.fdel27-1.fna&oh=00_AfC2_i7ts-u27DsAmbCwU6ZTXuZL6B4htbCbjRlBlARbTg&oe=65AE49B8"
        alt="profile"
      />
      <div className="inline-flex flex-col">
        <h1 className="font-bold text-[#050505] text-[32px]">
          Arunansh Srivastava
        </h1>
        <a
          href=""
          className="font-[600] text-[15px] text-[#65676B] hover:underline"
        >
          75 friends
        </a>
      </div>
    </div>
  );
}

export default Profile;
