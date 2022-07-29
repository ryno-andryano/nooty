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
    if (this.state.title.length < 50) {
      this.setState(() => {
        return {
          title: event.target.value,
        };
      });
    } else {
      this.setState(() => {
        return {
          title: event.target.value.slice(0, 50),
        };
      });
    }
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
    this.setState({
      title: '',
      body: '',
    });
    this.props.onToggleAdd();
  }

  render() {
    return this.props.showAddNote ? (
      <div className="note-input">
        <h2>Add Note</h2>
        <form onSubmit={this.onSubmitHandler}>
          <p className="note-input__title__char-limit">
            {this.state.title.length < 50
              ? this.state.title.length + '/50'
              : 'You have reached the character limit.'}
          </p>
          <input
            type="text"
            placeholder="Title"
            className="note-input__title"
            value={this.state.title}
            onChange={this.onTitleChangesHandler}
            required
          ></input>
          <textarea
            type="text"
            placeholder="Take a note..."
            className="note-input__body"
            value={this.state.body}
            onChange={this.onBodyChangesHandler}
            required
          ></textarea>
          <button type="submit">Save</button>
        </form>
      </div>
    ) : null;
  }
}

export default NoteInput;
