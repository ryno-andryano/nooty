import React from 'react';
import AppHeader from './AppHeader';
import AppBody from './AppBody';
import {getInitialData} from '../utils/data';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      searchKeyword: '',
    };

    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  onSearchHandler(keyword) {
    this.setState({searchKeyword: keyword});
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

  render() {
    return (
      <>
        <AppHeader onSearch={this.onSearchHandler} />
        <AppBody
          notes={this.state.notes}
          searchKeyword={this.state.searchKeyword}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
        />
      </>
    );
  }
}

export default NoteApp;
