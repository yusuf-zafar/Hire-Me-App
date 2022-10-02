import './Card.css'


function Card(props) {
    const profile = props;
  return (

    <div className="profile-card">
        <img className="profile-image" src={profile.avatar_url} alt={profile.username}/>
        <div className="profile-details">
            <h4>Name:<span className="profile-data"> {profile.name}</span></h4>
            <h4>user id:<span className="profile-data"> {profile.username}</span></h4>
            <h4>Age:<span className="profile-data"> {profile.age}</span></h4>
            <h4>Profession:<span className="profile-data"> {profile.profession}</span></h4>
            <h4>Contact:<span className="profile-data"> {profile.contact}</span></h4>
        </div>
    </div>
  );
}

export default Card