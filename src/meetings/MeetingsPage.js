import {useState} from "react";
import NewMeetingForm from "./NewMeetingForm";
import MeetingsList from "./MeetingsList";

export default function MeetingsPage({loggedUser}) {
    const [meetings, setMeetings] = useState(() => {
        const savedMeetings = localStorage.getItem('meetings');
        return savedMeetings ? JSON.parse(savedMeetings) : [];
    });

    const [showForm, setShowForm] = useState(false);

    function handleNewMeeting(meeting) {
        const nextMeetings = [...meetings, meeting];

        storeAndSetMeetings(nextMeetings);
    }

    function storeAndSetMeetings(meetings) {
        localStorage.setItem('meetings', JSON.stringify(meetings))
        setMeetings(meetings);
    }

    return (
        <div>
            {showForm
                ? <NewMeetingForm onSubmit={(meeting) => handleNewMeeting(meeting)}/>
                : <button onClick={() => setShowForm(true)}>Dodaj nowe spotkanie</button>
            }
            <h2>Zaplanowane zajęcia ({meetings.length})</h2>
            {meetings.length > 0
                ? <MeetingsList loggedUser={loggedUser} meetings={meetings} storeMeetings={(meetings) => storeAndSetMeetings(meetings)}/>
                : <div>Brak zaplanowanych spotkań</div>
            }
        </div>
    )
}
