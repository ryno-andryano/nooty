import React from 'react';
import AppHeader from './AppHeader';
import AppBody from './AppBody';
import NoteInput from './NoteInput';
import DeleteConfirmation from './DeleteConfirmation';
import NootyIdb from '../data/idb';
import {getSampleData} from '../data/sample';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      query: '',
      selectedId: '',
      showAddModal: false,
      showDeleteModal: false,
      showArchivedNotes: true,
    };
    this.init();

    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onShowAddModalHandler = this.onShowAddModalHandler.bind(this);
    this.onHideAddModalHandler = this.onHideAddModalHandler.bind(this);
    this.onShowDeleteModalHandler = this.onShowDeleteModalHandler.bind(this);
    this.onHideDeleteModalHandler = this.onHideDeleteModalHandler.bind(this);
    this.onToggleArchiveHandler = this.onToggleArchiveHandler.bind(this);
  }

  async init() {
    let notes = await NootyIdb.getAllNotes();
    if (notes.length < 1) {
      notes = getSampleData();
      NootyIdb.putNote(notes[0]);
    }
    this.setState({notes});
  }

  onSearchHandler(keyword) {
    this.setState({query: keyword});
  }

  onShowAddModalHandler() {
    this.setState({showAddModal: true});
  }

  onHideAddModalHandler() {
    this.setState({showAddModal: false});
  }

  onAddNoteHandler({title, body}) {
    const newNote = {
      id: Date.now(),
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

  onToggleArchiveHandler() {
    this.setState((prevState) => ({
      showArchivedNotes: !prevState.showArchivedNotes,
    }));
  }

  render() {
    return (
      <>
        <AppHeader onSearch={this.onSearchHandler} />
        <AppBody
          notes={this.state.notes.filter((note) =>
            note.title.toLowerCase().includes(this.state.query.toLowerCase()),
          )}
          showArchivedNotes={this.state.showArchivedNotes}
          onDelete={this.onShowDeleteModalHandler}
          onArchive={this.onArchiveHandler}
          onShowAdd={this.onShowAddModalHandler}
          onShowArchive={this.onToggleArchiveHandler}
        />
        <NoteInput
          showAddModal={this.state.showAddModal}
          onAddNote={this.onAddNoteHandler}
          onHideAdd={this.onHideAddModalHandler}
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
