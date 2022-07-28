import React from 'react';
import NoteList from './NoteList';

function AppBody({notes, searchKeyword, onDelete, onArchive}) {
  return (
    <div className="note-app__body">
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
