export default function MeetingsList({loggedUser, meetings, storeMeetings}) {
    function addParticipantToMeeting(id, participant) {
        const updatedMeetings = meetings.map((meeting, index) => {
            if (index === id) {
                return { ...meeting, participants: [...meeting.participants, participant] };
            }
            return meeting;
        });
        storeMeetings(updatedMeetings)
    }

    function removeParticipantFromMeeting(id, participantName) {
        const updatedMeetings = meetings.map((meeting, index) => {
            if (index === id) {
                return { ...meeting, participants: meeting.participants.filter(participant => participant !== participantName) };
            }
            return meeting;
        });
        storeMeetings(updatedMeetings)
    }

    function removeMeeting(id) {
        const updatedMeetings = meetings.filter((_, i) => i !== id);
        storeMeetings(updatedMeetings)
    }

    return (
        <table>
            <thead>
            <tr>
                <th>Nazwa spotkania</th>
                <th>Opis</th>
                <th>Uczestnicy</th>
                <th></th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {
                meetings.map((meeting, index) => <tr key={index}>
                    <td>{meeting.title}</td>
                    <td>{meeting.description}</td>
                    <td>
                        <ul>
                            {meeting.participants.map((participant, participantIndex) => (
                                <li key={participantIndex}>
                                    {participant}
                                </li>
                            ))}
                        </ul>
                    </td>
                    <td className="actions">
                        {meeting.participants && meeting.participants.includes(loggedUser) ?
                            <button onClick={() => removeParticipantFromMeeting(index, loggedUser)}>Wypisz się</button>
                            :
                            <button onClick={() => addParticipantToMeeting(index, loggedUser)}>Zapisz się</button>
                        }
                        {meeting.participants && meeting.participants.length === 0 &&
                        <button onClick={() => removeMeeting(index)}>Usuń puste spotkanie</button>
                        }
                    </td>
                </tr>)
            }
            </tbody>
        </table>
    );
}
