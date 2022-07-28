import React from 'react';

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKeyword: '',
    };

    this.onKeywordChanges = this.onKeywordChanges.bind(this);
  }

  onKeywordChanges(event) {
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
          type="text"
          placeholder="Search notes..."
          value={this.state.keyword}
          onChange={this.onKeywordChanges}
        />
      </div>
    );
  }
}

export default SearchBar;
