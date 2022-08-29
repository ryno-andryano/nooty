import React from 'react';

function NoteAddButton({onShowAdd}) {
  return (
    <button title="Add Note" className="note-add-button" onClick={onShowAdd}>
      <span className="material-icons">&#xe147;</span>
    </button>
  );
}

export default NoteAddButton;

