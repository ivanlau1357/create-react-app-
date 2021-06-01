import React from 'react';
import { NewNoteInput } from './components/NewNoteInput';
import { useDispatch, useSelector } from 'react-redux';
import { addNote } from './actions';
import { Store } from './store';

function App() {
  const notesReducer = useSelector<Store, Store['notesReducer']>((state) => state.notesReducer)
  const dispatch = useDispatch()

  const onAddNote = (note: string) => {
    dispatch(addNote(note))
  }
  return (
    <>
      <NewNoteInput addNote={onAddNote}/>
      <hr/>
      <ul>
        {notesReducer?.notes?.map((note) => {
           return <li key={note}>{note}</li>
        })}
        <li>Some note</li>
      </ul>
    </>
  );
}

export default App;
