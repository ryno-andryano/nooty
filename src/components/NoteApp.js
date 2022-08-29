import React from 'react';
import AppHeader from './AppHeader';
import AppBody from './AppBody';
import NoteInput from './NoteInput';
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
    };
    this.init();

    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onToggleAddHandler = this.onToggleAddHandler.bind(this);
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

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({notes});
    NootyIdb.deleteNote(id);
  }

  onArchiveHandler(id) {
    const index = this.state.notes.findIndex((note) => note.id === id);
    const notes = this.state.notes;
    notes[index].archived = !notes[index].archived;
    this.setState({notes});
    NootyIdb.putNote(notes[index]);
  }

  onToggleAddHandler() {
    this.setState((prevState) => ({
      showAddNote: !prevState.showAddNote,
    }));
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
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
          onToggleAdd={this.onToggleAddHandler}
        />
        <NoteInput
          showAddNote={this.state.showAddNote}
          onAddNote={this.onAddNoteHandler}
          onToggleAdd={this.onToggleAddHandler}
        />
      </>
    );
  }
}

export default NoteApp;
