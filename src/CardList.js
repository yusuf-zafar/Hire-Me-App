import Card from "./Card"


function CardList(props) {
    const profiles = props.profiles;
  return (
    <div id='container'>
    {profiles.map((profile)=> <Card key={profile.id} {...profile}/>)}
    </div>
  );
}

export default CardList