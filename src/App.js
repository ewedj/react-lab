import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import "milligram";
import LoginForm from "./LoginForm";

export default function App() {
  const [authenticatedUsername, setAuthenticatedUsername] = useState('');

  function logout() {
    setAuthenticatedUsername('');
  }

  let content;
  if (authenticatedUsername) {
    content = <div>
      <h2>Twój e-mail to {authenticatedUsername}</h2>
      <button onClick={logout}> Wyloguj się</button>
    </div>
  }else {
    content = <div>
      <LoginForm
        onlogin={(email) => setAuthenticatedUsername(email)}
        buttonLabel="Zaloguj się"/>
    </div>;
        // <LoginForm onLogin={(email)=> setAuthenticatedUsername(email)}/>;
  }

  return (
    <div>
        <h1>Witaj w systemie do zapisów na zajęcia</h1>
        {content}
    </div>
  );
}

// export default App;
