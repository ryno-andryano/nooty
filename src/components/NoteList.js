import React from 'react';
import NoteItem from './NoteItem';

function NoteList({notes, isArchived, searchKeyword, onDelete, onArchive}) {
  return (
    <div className="notes-list">
      {notes
        .filter((note) => note.archived === isArchived)
        .filter((note) =>
          note.title.toLowerCase().includes(searchKeyword.toLowerCase())
        )
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
