import React from 'react';

function NoteAddButton({onToggleAdd}) {
  return (
    <button title="Add Note" className="note-add-button" onClick={onToggleAdd}>
      <span className="material-icons">&#xe147;</span>
    </button>
  );
}

export default NoteAddButton;

