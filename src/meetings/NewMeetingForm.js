import {useState} from "react";

export default function NewMeetingForm({onSubmit}) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    function submit(event) {
        event.preventDefault();
        onSubmit({title, description, participants: []});
        setTitle('');
        setDescription('');
    }

    return (
        <form onSubmit={submit}>
            <h3>Dodaj nowe spotkanie</h3>
            <label>Nazwa</label>
            <input required type="text" value={title}
                   onChange={(e) => setTitle(e.target.value)}/>
            <label>Opis</label>
            <textarea required value={description}
                      onChange={(e) => setDescription(e.target.value)}></textarea>
            <button>Dodaj</button>
        </form>
    );
}
