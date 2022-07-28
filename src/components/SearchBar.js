import React from 'react';

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKeyword: '',
    };

    this.onKeywordChangesHandler = this.onKeywordChangesHandler.bind(this);
  }

  onKeywordChangesHandler(event) {
    this.setState(() => {
      return {
        searchKeyword: event.target.value,
      };
    });
    this.props.onSearch(event.target.value);
  }

  render() {
    return (
      <div className="note-search">
        <input
          type="search"
          placeholder="Search notes..."
          value={this.state.keyword}
          onChange={this.onKeywordChangesHandler}
        />
      </div>
    );
  }
}

export default SearchBar;
