export default function UserPanel(props) {
    return <div class="clearfix">
        <h2 class="float-left">Witaj {props.username}!</h2>
        <button class="float-right" onClick={() => props.onLogout()}>{props.buttonLabel || 'Wyloguj'}</button>
    </div>;
}
