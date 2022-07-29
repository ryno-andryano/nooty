import React from 'react';

function NoteDeleteButton({id, onDelete}) {
  return (
    <button
      title="Delete"
      className="note-item__delete-button"
      onClick={() => onDelete(id)}
    >
      <span className="material-icons">&#xe872;</span>
    </button>
  );
}

export default NoteDeleteButton;
