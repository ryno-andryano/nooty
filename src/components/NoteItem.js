import React from 'react';
import NoteDeleteButton from './NoteDeleteButton';
import NoteArchiveButton from './NoteArchiveButton';
import {showFormattedDate} from '../utils/data';

function NoteItem({title, createdAt, body}) {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__date">{showFormattedDate(createdAt)}</p>
        <p className="note-item__body">{body}</p>
      </div>
      <div className="note-item__action">
        <NoteDeleteButton />
        <NoteArchiveButton />
      </div>
    </div>
  );
}

export default NoteItem;
