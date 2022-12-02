import { useState } from 'react';
import './App.css';
import CardList from './compponents/CardList';
import Form from './compponents/Form';

function App() {
  const [profiles, setProfiles] = useState([]);

  const formSubmitHandler = (newProfile) => {
    for (let i = 0; i < profiles.length; i++) {
      if (profiles[i].id === newProfile.id) {
        alert('This user is already added.');
        return;
      }
    }
    setProfiles((previousProfiles) => [...previousProfiles, newProfile]);
  };

  return (
    <div>
      <h1>Github Cards App</h1>
      <Form onFormSubmit={formSubmitHandler} />
      <CardList profiles={profiles} />
    </div>
  );
}

export default App;
