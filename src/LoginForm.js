
import {useState} from "react";

export default function LoginForm(props) {
    const [email, setEmail] = useState('');

    return <div>
        <label>Zaloguj się e-mailem</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <button type="button" onClick={() => props.onLogin(email)}>
            {props.buttonLabel || 'Zaloguj'}
        </button>
    </div>;
}