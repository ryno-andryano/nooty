import React from 'react';

function NoteArchiveButton({id, archived, onArchive}) {
  if (archived) {
    return (
      <button
        className="note-item__archive-button"
        onClick={() => onArchive(id)}
      >
        Active
      </button>
    );
  }
  return (
    <button className="note-item__archive-button" onClick={() => onArchive(id)}>
      Archive
    </button>
  );
}

export default NoteArchiveButton;
