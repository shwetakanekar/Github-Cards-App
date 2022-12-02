function Card(props) {
  return (
    <div className="github-profile">
      <img src={props.avatar_url} alt={props.login} />
      <div className="info">
        <div className="name">{props.name}</div>
        <div className="username">@{props.login}</div>
        <div className="location">{props.location}</div>
      </div>
    </div>
  );
}

export default Card;
