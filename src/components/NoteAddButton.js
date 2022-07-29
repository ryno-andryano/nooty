import React from 'react';

function NoteAddButton({onToggleAdd}) {
  return (
    <button title="Add Note" className="note-add-button" onClick={onToggleAdd}>
      <a href="#top">
        <span className="material-icons">&#xe147;</span>
      </a>
    </button>
  );
}

export default NoteAddButton;
