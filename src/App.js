import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import "milligram";
import LoginForm from "./LoginForm";
import UserPanel from "./UserPanel";

export default function App() {
  const [authenticatedUsername, setAuthenticatedUsername] = useState('');

  return (
      <div>
        <h1>System do zapisów na zajęcia</h1>
        {
            authenticatedUsername
              ? <UserPanel username={authenticatedUsername} onLogout={(_login) => setAuthenticatedUsername(null)}/>
              : <LoginForm onLogin={(login) => setAuthenticatedUsername(login)}/>
        }
      </div>
  );
}
