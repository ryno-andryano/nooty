import React from 'react';
import NoteList from './NoteList';
import NoteInput from './NoteInput';

function AppBody({notes, searchKeyword, onAddNote, onDelete, onArchive}) {
  return (
    <div className="note-app__body">
      <NoteInput onAddNote={onAddNote} />
      <h2>Catatan Aktif</h2>
      <NoteList
        notes={notes}
        isArchived={false}
        searchKeyword={searchKeyword}
        onDelete={onDelete}
        onArchive={onArchive}
      />
      <h2>Archive</h2>
      <NoteList
        notes={notes}
        isArchived={true}
        searchKeyword={searchKeyword}
        onDelete={onDelete}
        onArchive={onArchive}
      />
    </div>
  );
}

export default AppBody;
