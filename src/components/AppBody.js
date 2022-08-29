import React from 'react';
import NoteList from './NoteList';

function AppBody({notes, onDelete, onArchive, onShowAdd}) {
  return (
    <div className="note-app__body">
      <h2>Notes List</h2>
      <NoteList
        notes={notes}
        isArchived={false}
        onDelete={onDelete}
        onArchive={onArchive}
        onShowAdd={onShowAdd}
        isShowAddButton
      />
      <h2>Archived Notes</h2>
      <NoteList
        notes={notes}
        isArchived={true}
        onDelete={onDelete}
        onArchive={onArchive}
      />
    </div>
  );
}

export default AppBody;
