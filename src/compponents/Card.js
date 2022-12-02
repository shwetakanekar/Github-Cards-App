function Card(props) {
  return (
    <div className="github-profile">
      <img
        src={props.avatar_url}
        alt=""
        style={{ width: '75px', height: '75px', color: '#ccc' }}
      />
      <div
        className="info"
        style={{ display: 'inline-block', marginLeft: '10px' }}
      >
        <div className="name">{props.name}</div>
        <div className="username">@{props.login}</div>
        <div className="location">{props.location}</div>
      </div>
    </div>
  );
}

export default Card;
