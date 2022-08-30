import React from 'react';
import NoteList from './NoteList';

function AppBody({
  notes,
  showArchivedNotes,
  onDelete,
  onArchive,
  onShowAdd,
  onShowArchive,
}) {
  return (
    <div className="note-app__body">
      <h2>Notes List</h2>
      <NoteList
        notes={notes}
        isArchived={false}
        onDelete={onDelete}
        onArchive={onArchive}
        onShowAdd={onShowAdd}
        showAddButton
      />
      <div className="archive-wrapper">
        <h2 onClick={onShowArchive}>Archived Notes</h2>
        {showArchivedNotes ? (
          <span className="material-icons" onClick={onShowArchive}>
            &#xe5c7;
          </span>
        ) : (
          <span className="material-icons" onClick={onShowArchive}>
            &#xe5c5;
          </span>
        )}
      </div>
      <NoteList
        notes={notes}
        isArchived={true}
        onDelete={onDelete}
        onArchive={onArchive}
        showArchivedNotes={showArchivedNotes}
      />
    </div>
  );
}

export default AppBody;
