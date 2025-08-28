function ProfileCard({ name, image, description }) {
  return (
    <div className="Card">
      <img src={image} alt="" className="profile-img" />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}

export default ProfileCard;
