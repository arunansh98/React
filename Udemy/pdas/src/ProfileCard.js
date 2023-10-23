function ProfileCard({ title, handle, image, description }) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image} alt="pda-logo" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{title}</p>
          <p className="subtitle is-6">{handle}</p>
        </div>
        <div className="content">{description}</div>
      </div>
    </div>
  );
}

// my method - not recommended (just for demonstration of how spread/rest operators work)
// function ProfileCard({ ...props }) {
//   return (
//     <div>
//       Title is {props[Object.keys(props)[0]]}
//       Handle is {props[Object.keys(props)[1]]}
//     </div>
//   );
// }

export default ProfileCard;
