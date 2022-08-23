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
    this.onCancelHandler = this.onCancelHandler.bind(this);
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
    this.setState({
      title: '',
      body: '',
    });
    this.props.onToggleAdd();
  }

  onCancelHandler(event) {
    event.stopPropagation();
    this.props.onToggleAdd();
  }

  render() {
    return (
      <div className={this.props.showAddNote ? 'modal' : 'modal--hidden'}>
        <div className="note-input">
          <h2>Add Note</h2>
          <span className="material-icons" onClick={this.onCancelHandler}>
            &#xe5c9;
          </span>
          <form onSubmit={this.onSubmitHandler}>
            <p className="note-input__title-limit">
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
              maxLength="50"
              required
            ></input>
            <p className="note-input__body-limit">
              {this.state.body.length < 300
                ? this.state.body.length + '/300'
                : 'You have reached the character limit.'}
            </p>
            <textarea
              type="text"
              placeholder="Take a note..."
              className="note-input__body"
              value={this.state.body}
              onChange={this.onBodyChangesHandler}
              maxLength="300"
              required
            ></textarea>
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    );
  }
}

export default NoteInput;

