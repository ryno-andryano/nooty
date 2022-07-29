import React from 'react';

function NoteArchiveButton({id, archived, onArchive}) {
  return (
    <button
      title={archived ? 'Return' : 'Archive'}
      className="note-item__archive-button"
      onClick={() => onArchive(id)}
    >
      {archived ? (
        <span className="material-icons">&#xe169;</span>
      ) : (
        <span className="material-icons">&#xe149;</span>
      )}
    </button>
  );
}

export default NoteArchiveButton;
