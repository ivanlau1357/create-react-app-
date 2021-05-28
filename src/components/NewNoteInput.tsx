import React, {useState, ChangeEvent} from 'react'

interface INewNoteInputProps {
    addNote(note: String) : void;
}

export const NewNoteInput: React.FC<INewNoteInputProps> = ({
    addNote,
}) => {
    const [note, setNote] = useState("")

    const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
        setNote(event.target.value);
    }
    const onAddNoteClick = () => {
        addNote(note);
        setNote("");
    }
    return (
        <div>
            <input onChange={updateNote} value={note} type="text" name="note" placeholder="Note" />
            <button onClick={onAddNoteClick}>Add note </button>
        </div>
    );
};