import React from 'react';
import NoteItem from './NoteItem';

function NoteList({notes, isArchived, onDelete, onArchive}) {
  return (
    <div className="notes-list">
      {notes
        .filter((note) => note.archived === isArchived)
        .map((note) => (
          <NoteItem
            key={note.id}
            onDelete={onDelete}
            onArchive={onArchive}
            {...note}
          />
        ))}
    </div>
  );
}

export default NoteList;
