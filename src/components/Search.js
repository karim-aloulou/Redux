import React from 'react';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';

import { searchKeyword } from '../actions';

const Search = props => (
  <div>
    <TextField
      hintText="Search your Todo"
      floatingLabelText="Searching..."
      type="text"
      value={props.searchKeywordValue}
      onChange={e => props.setSearchKeyword(e.target.value)}
    />
  </div>
)

const mapStateToProps = state => ({
  searchKeywordValue: state.searchKeyword,
})

const mapDispatchToProps = dispatch => ({
  setSearchKeyword: keyword => dispatch(searchKeyword(keyword)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
