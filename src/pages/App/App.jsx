import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../../components/AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import Notes from '../../components/Notes/Notes';

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ? 
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={< Notes /> } />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

export default App;
