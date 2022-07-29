import React from 'react';
import NoteList from './NoteList';
import NoteInput from './NoteInput';

function AppBody({
  notes,
  searchKeyword,
  onAddNote,
  onDelete,
  onArchive,
  onToggleAdd,
  showAddNote,
}) {
  return (
    <div className="note-app__body">
      <NoteInput
        onAddNote={onAddNote}
        showAddNote={showAddNote}
        onToggleAdd={onToggleAdd}
      />

      <h2>Notes List</h2>
      <NoteList
        notes={notes}
        isArchived={false}
        searchKeyword={searchKeyword}
        onDelete={onDelete}
        onArchive={onArchive}
        isAddButton={true}
        onToggleAdd={onToggleAdd}
      />
      <h2>Archived Notes</h2>
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
