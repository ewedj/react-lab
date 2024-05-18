import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import "milligram";

export default function App() {
  // let email:string = 'ewelinadubiel92@gmail.com';
  const [email, setEmail] = useState('ewelinadubiel92@gmail.com');
  const [isAutenticated, setIsAutenticated] = useState(false);

  function handleChange(event) {
    setEmail(event.target.value);
  }

  let content;
  if (isAutenticated) {
    content = <div>
      <h2>Zaloguj się e-mailem</h2>
      <button type="button" onClick={() => alert(email)}> Wyloguj się</button>
    </div>
  }else {
    content = <div>
      <input type="text" onChange={handleChange}/>
      <button type="button" onClick={() => setIsAutenticated(true)}>
        Zaloguj się</button>
    </div>
  }


  // let message = <div>Witaj{email}</div>;
  let header1 = <h1>Witaj w systemie do zapisów na zajęcia</h1>
  // let header2 = <h2>Zaloguj się e-mailem</h2>

  return (
    <div>
        {header1}
        {content}
    </div>
  );
}

// export default App;
