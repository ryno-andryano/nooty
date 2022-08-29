import React from 'react';
import NoteDeleteButton from './NoteDeleteButton';
import NoteArchiveButton from './NoteArchiveButton';
import {showFormattedDate} from '../data/sample';

function NoteItem({title, createdAt, body, id, archived, onDelete, onArchive}) {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__date">{showFormattedDate(createdAt)}</p>
        <p className="note-item__body">{body}</p>
      </div>
      <div className="note-item__action">
        <NoteDeleteButton id={id} onDelete={onDelete} />
        <NoteArchiveButton id={id} archived={archived} onArchive={onArchive} />
      </div>
    </div>
  );
}

export default NoteItem;
