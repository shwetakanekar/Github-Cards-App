import { useState } from 'react';

function Form(props) {
  const [userName, setUserName] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const resonse = await fetch(`https://api.github.com/users/${userName}`);
    const profileData = await resonse.json();
    if (profileData && profileData.id) {
      props.onFormSubmit(profileData);
    } else {
      alert(`Invalid username - ${userName}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter github username"
        value={userName}
        onChange={(event) => {
          setUserName(event.target.value);
        }}
        required
      />
      <button>Add Card</button>
    </form>
  );
}

export default Form;
