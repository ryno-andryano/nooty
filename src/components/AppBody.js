import React from 'react';
import NoteList from './NoteList';

function AppBody({notes}) {
  return (
    <div className="note-app__body">
      <h2>Catatan Aktif</h2>
      <NoteList notes={notes} isArchived={false} />
      <h2>Archive</h2>
      <NoteList notes={notes} isArchived={true} />
    </div>
  );
}

export default AppBody;
