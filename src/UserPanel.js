import MeetingsPage from "./meetings/MeetingsPage";

export default function UserPanel(props) {
    return <div>
        <div className="clearfix">
            <h2 className="float-left">Witaj {props.username}!</h2>
            <button className="float-right" onClick={() => props.onLogout()}>{props.buttonLabel || 'Wyloguj'}</button>
        </div>
        <div>
            <MeetingsPage loggedUser={props.username}/>
        </div>
    </div>;
}
