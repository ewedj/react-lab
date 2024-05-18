import logo from './logo.svg';
import './App.css';
import {useState} from "react";

export default function App() {
  // let email:string = 'ewelinadubiel92@gmail.com';
  const [email, setEmail] = useState('ewelinadubiel92@gmail.com');

  function handleChange(event) {
    setEmail(event.target.value);
  }


  let message = <div>Masz krótki adres</div>;
  if (email.length > 15) {
    message = <div>Masz bardzo długi adres</div>
  }else if (email.length > 5) {
    message = <div>Masz w porządku adres</div>
  }

  let header1 = <h1>System do zapisów na zajęcia</h1>
  let header2 = <h2>Twój email to: {email}</h2>

  return (
    <div>
        {header1}
        {header2}
        {message}
      <input type="text" onChange={handleChange}/> <button type="button" onClick={() => alert(email)}>
      Wyświetl mój email w alercie</button>

    </div>
  );
}

// export default App;
