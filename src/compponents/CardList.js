import Card from './Card';

function CardList(props) {
  return (
    <div className="card-list">
      {props.profiles.map((profile) => (
        <Card key={profile.id} {...profile} />
      ))}
    </div>
  );
}

export default CardList;
