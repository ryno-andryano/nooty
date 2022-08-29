import React from 'react';
import AppHeader from './AppHeader';
import AppBody from './AppBody';
import NoteInput from './NoteInput';
import DeleteConfirmation from './DeleteConfirmation';
import {getInitialData} from '../utils/data';
import {nanoid} from 'nanoid';
import NootyIdb from '../data/idb';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      searchKeyword: '',
      showAddNote: false,
      showDeleteModal: false,
      selectedId: '',
    };
    this.init();

    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onToggleAddHandler = this.onToggleAddHandler.bind(this);
    this.onShowDeleteModalHandler = this.onShowDeleteModalHandler.bind(this);
    this.onHideDeleteModalHandler = this.onHideDeleteModalHandler.bind(this);
  }

  async init() {
    let notes = await NootyIdb.getAllNotes();
    if (notes.length < 1) {
      notes = getInitialData();
    }
    this.setState({notes});
  }

  onSearchHandler(keyword) {
    this.setState({searchKeyword: keyword});
  }

  onToggleAddHandler() {
    this.setState((prevState) => ({
      showAddNote: !prevState.showAddNote,
    }));
  }

  onAddNoteHandler({title, body}) {
    const newNote = {
      id: nanoid(5),
      title,
      body,
      archived: false,
      createdAt: new Date(),
    };
    this.setState((prevState) => {
      return {
        notes: [...prevState.notes, newNote],
      };
    });
    NootyIdb.putNote(newNote);
  }

  onShowDeleteModalHandler(id) {
    this.setState({showDeleteModal: true, selectedId: id});
  }

  onHideDeleteModalHandler() {
    this.setState({showDeleteModal: false, selectedId: ''});
  }

  onDeleteHandler() {
    const notes = this.state.notes.filter(
      (note) => note.id !== this.state.selectedId,
    );
    this.setState({notes, showDeleteModal: false});
    NootyIdb.deleteNote(this.state.selectedId);
  }

  onArchiveHandler(id) {
    const index = this.state.notes.findIndex((note) => note.id === id);
    const notes = this.state.notes;
    notes[index].archived = !notes[index].archived;
    this.setState({notes});
    NootyIdb.putNote(notes[index]);
  }

  render() {
    return (
      <>
        <AppHeader onSearch={this.onSearchHandler} />
        <AppBody
          notes={this.state.notes.filter((note) =>
            note.title
              .toLowerCase()
              .includes(this.state.searchKeyword.toLowerCase()),
          )}
          onDelete={this.onShowDeleteModalHandler}
          onArchive={this.onArchiveHandler}
          onToggleAdd={this.onToggleAddHandler}
        />
        <NoteInput
          showAddNote={this.state.showAddNote}
          onAddNote={this.onAddNoteHandler}
          onToggleAdd={this.onToggleAddHandler}
        />
        <DeleteConfirmation
          showDeleteModal={this.state.showDeleteModal}
          onConfirm={this.onDeleteHandler}
          onCancel={this.onHideDeleteModalHandler}
        />
      </>
    );
  }
}

export default NoteApp;
