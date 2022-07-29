import React from 'react';
import AppHeader from './AppHeader';
import AppBody from './AppBody';
import {getInitialData} from '../utils/data';
import {nanoid} from 'nanoid';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      searchKeyword: '',
      showAddNote: false,
    };

    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onToggleAddHandler = this.onToggleAddHandler.bind(this);
  }

  onSearchHandler(keyword) {
    this.setState({searchKeyword: keyword});
  }

  onAddNoteHandler({title, body}) {
    this.setState((prevState) => {
      return {
        notes: [
          {
            id: nanoid(5),
            title,
            body,
            archived: false,
            createdAt: new Date(),
          },
          ...prevState.notes,
        ],
      };
    });
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({notes});
  }

  onArchiveHandler(id) {
    const index = this.state.notes.findIndex((note) => note.id === id);
    const notes = this.state.notes;
    notes[index].archived = !notes[index].archived;
    this.setState({notes});
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
          notes={this.state.notes}
          searchKeyword={this.state.searchKeyword}
          showAddNote={this.state.showAddNote}
          onAddNote={this.onAddNoteHandler}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
          onToggleAdd={this.onToggleAddHandler}
        />
      </>
    );
  }
}

export default NoteApp;
