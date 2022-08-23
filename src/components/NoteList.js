import React from 'react';
import NoteItem from './NoteItem';
import NoteAddButton from './NoteAddButton';

function NoteList({
  notes,
  isArchived,
  onDelete,
  onArchive,
  isAddButton,
  onToggleAdd,
}) {
  const notesToRender = notes
    .filter((note) => note.archived === isArchived)
    .map((note) => (
      <NoteItem
        key={note.id}
        onDelete={onDelete}
        onArchive={onArchive}
        {...note}
      />
    ));

  return (
    <div className="notes-list">
      {isAddButton ? <NoteAddButton onToggleAdd={onToggleAdd} /> : null}
      {notesToRender.length === 0 ? <p>No notes found.</p> : notesToRender}
    </div>
  );
}

export default NoteList;
