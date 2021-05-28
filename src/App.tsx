import React from 'react';
import { NewNoteInput } from './components/NewNoteInput';

function App() {
  return (
    <>
      <NewNoteInput addNote={alert}/>
      <hr/>
      <ul>
        <li>Some note</li>
      </ul>
    </>
  );
}

export default App;