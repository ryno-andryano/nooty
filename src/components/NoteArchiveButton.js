import React from 'react';

function NoteArchiveButton({id, archived, onArchive}) {
  return (
    <button className="note-item__archive-button" onClick={() => onArchive(id)}>
      {archived ? 'Activate' : 'Archive'}
    </button>
  );
}

export default NoteArchiveButton;
