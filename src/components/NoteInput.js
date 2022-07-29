import React from 'react';

export class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    };

    this.onTitleChangesHandler = this.onTitleChangesHandler.bind(this);
    this.onBodyChangesHandler = this.onBodyChangesHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onTitleChangesHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyChangesHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();
    this.props.onAddNote(this.state);
  }

  render() {
    return (
      <div className="note-input">
        <h2>Buat Catatan</h2>
        <form onSubmit={this.onSubmitHandler}>
          <p className="note-input__title__char-limit">
            Sisa karakter: {50 - this.state.title.length}
          </p>
          <input
            type="text"
            placeholder="Ini adalah judul ..."
            className="note-input__title"
            value={this.state.title}
            onChange={this.onTitleChangesHandler}
            maxlength="50"
            required
          ></input>
          <textarea
            type="text"
            placeholder="Tuliskan catatanmu di sini ..."
            className="note-input__body"
            value={this.state.body}
            onChange={this.onBodyChangesHandler}
            required
          ></textarea>
          <button type="submit">Buat</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
