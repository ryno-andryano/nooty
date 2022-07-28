import React from 'react';
import NoteItem from './NoteItem';

function NoteList({notes, isArchived}) {
  return (
    <div className="notes-list">
      {notes
        .filter((note) => note.archived === isArchived)
        .map((note) => (
          <NoteItem key={note.id} {...note} />
        ))}
    </div>
  );
}

export default NoteList;
