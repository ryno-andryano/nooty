import React from 'react';

function DeleteConfirmation({showDeleteModal, onConfirm, onCancel}) {
  return (
    <div className={showDeleteModal ? 'modal' : 'hidden'} onClick={onCancel}>
      <div
        className="delete-confirmation"
        onClick={(event) => event.stopPropagation()}
      >
        <h2>Are you sure?</h2>
        <span className="material-icons" onClick={onCancel}>
          &#xe5c9;
        </span>
        <p>
          Do you really want to delete this note? This process cannot be undone.
        </p>
        <button id="cancel-delete-button" onClick={onCancel}>
          Cancel
        </button>
        <button id="confirm-delete-button" onClick={onConfirm}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default DeleteConfirmation;

