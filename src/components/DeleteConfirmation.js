import React from 'react';

function DeleteConfirmation({showDeleteModal, onConfirm, onCancel}) {
  return (
    <div className={showDeleteModal ? 'modal' : 'modal--hidden'}>
      <div className="delete-confirmation">
        <h2>Are you sure?</h2>
        <span className="material-icons" onClick={onCancel}>
          &#xe5c9;
        </span>
        <p>
          Do you really want to delete this note? This process cannot be undone.
        </p>
        <button onClick={onCancel}>Cancel</button>
        <button onClick={onConfirm}>Delete</button>
      </div>
    </div>
  );
}

export default DeleteConfirmation;

